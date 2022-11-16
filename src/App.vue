<template>
  <div class="todo">
    <h1 class="title has-text-centered">Todo List</h1>

    <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add a todo">
      </p>
      <p class="control">
        <a class="button is-primary">
          Add
        </a>
      </p>
    </div>

    <div class="card mb-5" v-for="todo in todos">
      <div class="card-content">
        <div class="content">

          <div class="columns is-mobile is-vcentered">
            <div class="column">
              <p>{{ todo.content }}</p>
            </div>
            <div class="column is-narrow is-4 has-text-right">
              <button class="button is-light">
                &check;   
              </button>
              <button class="button is-danger ml-2">
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

const todos = ref([
  {
    id: 1,
    content: 'Todo 1 content',
    completed: false,
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    completed: false,
  },
  {
    id: 3,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    completed: false,
  },
]);

</script>

<style>

.todo {
  max-width: 500px;
  margin: 0 auto;

}

</style>