<template>
  <div class="todo">
    <h1 class="title has-text-centered">Todo List</h1>

    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input v-model="newTodoContent" class="input is-large" type="text" placeholder="Add a todo">
        </p>
        <p class="control">
          <button :disabled="!newTodoContent" class="button is-primary is-large">
            Add
          </button>
        </p>
      </div>
    </form>

    

    <div  class="card mb-5"
          :class="{'has-background-success-light': todo.completed}"
          v-for="todo in todos">
      <div class="card-content">
        <div class="content">

          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{'has-text-success': todo.completed}">
              <p :class="{ 'line-through': todo.completed }">{{ todo.content }}</p>
            </div>
            <div class="column is-narrow is-4 has-text-right">
              <button 
                class="button" 
                :class="todo.completed ? 'is-success' : 'is-light'"
                @click="completeTodo(todo.id)">
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

  </div>

  
  


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { v4 } from 'uuid';
import type { Todo } from './core/interfaces/todo.interface';

const todos = ref<Todo[]>([]);

const newTodoContent = ref('');


const addTodo = () => {
  const newTodo: Todo = {
    id: v4(),
    content: newTodoContent.value,
    completed: false
  };
  todos.value.unshift(newTodo);
  newTodoContent.value = '';
};

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
};

const completeTodo = (id: string) => {
  todos.value = todos.value.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
};

</script>

<style>
.todo {
  max-width: 500px;
  margin: 0 auto;

}

.line-through{
  text-decoration: line-through;
}

</style>