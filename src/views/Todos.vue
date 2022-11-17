<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { Todo } from '../core/interfaces/todo.interface';
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../core/firebase';
import filterTabsComponent from '../components/filterTabs.component.vue';

/*
  firebase references
*/
const todosCollection = collection(db, 'todos');
const todosCOllectionQuery = query(todosCollection, orderBy('createdAt', 'desc'));

/*
  reactive variables
*/
const todos = ref<Todo[]>([]);
const originalTodos = ref<Todo[]>([]);
const activeQty = ref<number>(0);
const completedQty = ref<number>(0);
const newTodoContent = ref('');


const addTodo = () => {
  const newTodo: Partial<Todo> = {
    content: newTodoContent.value,
    completed: false,
    createdAt: Date.now()
  };
  addDoc(todosCollection, newTodo);
  newTodoContent.value = '';
};

const deleteTodo = (id: string) => {
  deleteDoc(doc(db, 'todos', id));
};

const completeTodo = (id: string) => {
  updateDoc(doc(todosCollection, id), {
    completed: !todos.value.find(todo => todo.id === id)!.completed
  });
};


onMounted(() => {
  // GET TODOS FROM FIRESTORE REALTIME
  onSnapshot(todosCOllectionQuery, (querySnapshot) => {
    todos.value = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const todo: Todo = {
        ...doc.data() as Todo,
        id,
      };
      todos.value.push(todo);
    });
    originalTodos.value = todos.value;
    onHashChange()
  });
});

// CALCULATE ACTIVE AND COMPLETED TODOS
watch(originalTodos, () => {
  activeQty.value = originalTodos.value.filter(todo => !todo.completed).length;
  completedQty.value = originalTodos.value.filter(todo => todo.completed).length;
});

const filterAll = () => {
  todos.value = originalTodos.value;
};
const filterActive = () => {
  todos.value = originalTodos.value;
  todos.value = todos.value.filter((todo) => !todo.completed);
};
const filterCompleted = () => {
  todos.value = originalTodos.value;
  todos.value = todos.value.filter((todo) => todo.completed);
}



// WATCH FOR URL CHANGES
window.addEventListener('hashchange', onHashChange);
function onHashChange() {
  const route = window.location.hash.replace(/#\/?/, '')
  switch (route) {
    case 'active':
      filterActive();
      break;
    case 'completed':
      filterCompleted();
      break;
    default:
      filterAll();
      break;
  }
}

</script>

<template>
  <div class="todo">
    <h1 class="title has-text-centered">Todo List</h1>

    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input v-model="newTodoContent" class="input is-large" type="text" placeholder="Add a todo">
        </p>
        <p class="control">
          <button :disabled="!newTodoContent" class="button is-info is-large">
            Add
          </button>
        </p>
      </div>
    </form>

    <filterTabsComponent v-if="originalTodos.length" :allQty="originalTodos.length" :activeQty="activeQty"
      :completedQty="completedQty" />

    <div v-else class="has-text-centered">
      <p class="is-size-4">Start adding new tasks</p>
    </div>


    <div class="card mb-5" :class="{ 'has-background-success-light': todo.completed }" v-for="todo in todos">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{ 'has-text-success': todo.completed }">
              <p :class="{ 'line-through': todo.completed }">{{ todo.content }}</p>
            </div>
            <div class="column is-narrow is-4 has-text-right">
              <button class="button" :class="todo.completed ? 'is-success' : 'is-light'" @click="completeTodo(todo.id)">
                &check;
              </button>
              <button class="button is-danger ml-2" @click="deleteTodo(todo.id)">
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeQty === 0" class="has-text-centered">
      <p class="is-size-4">You finished all tasks! &#128513;</p>
    </div>

  </div>

</template>


<style scoped>
.todo {
  max-width: 500px;
  margin: 0 auto;

}

.line-through {
  text-decoration: line-through;
}
</style>
