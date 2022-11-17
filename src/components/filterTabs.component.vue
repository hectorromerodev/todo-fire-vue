<template>
  <div class="tabs is-centered is-boxed is-small is-mobile">
    <ul> 
      <li :class="activeTab === 'all' ? 'is-active' : ''">
        <a href="#all" @click="activeTab = 'all'; ">
          <span class="tag is-medium mr-1">{{ allQty }}</span>
          <span>All</span> 
        </a>
      </li>
      <li :class="activeTab === 'active' ? 'is-active' : ''">
        <a href="#active" @click="activeTab = 'active';">
          <span class="tag is-medium mr-1">{{ activeQty }}</span>
          <span>Active</span>
        </a>
      </li>
      <li :class="activeTab === 'completed' ? 'is-active' : ''">
        <a href="#completed" @click="activeTab = 'completed';">
          <span class="tag is-medium mr-1">{{ completedQty }}</span>
          <span>Completed</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, type Ref} from 'vue';


const { allQty, activeQty, completedQty } = defineProps<{
  allQty: number
  activeQty: number;
  completedQty: number;
}>();

type Filter = 'all' | 'active' | 'completed';

let activeTab: Ref<Filter> = ref<Filter>('all');

// const emit = defineEmits(['filter-all', 'filter-active', 'filter-completed']);

// watch(activeTab, (newVal) => {
//   switch (newVal) {
//     case 'all':
//       // emit('filter-all');
//       break;
//     case 'active':
//       // emit('filter-active');
//       break;
//     case 'completed':
//       // emit('filter-completed');
//       break;
//   }
// })

</script>