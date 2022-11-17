<template>
  <div class="tabs is-centered is-boxed is-small is-mobile">
    <ul>
      <li :class="activeTab === 'all' ? 'is-active' : ''">
        <a href="#all" @click="activeTab = 'all'">
          <span class="tag is-medium mr-1">{{ allQty }}</span>
          <span>All</span>
        </a>
      </li>
      <li :class="activeTab === 'active' ? 'is-active' : ''">
        <a href="#active" @click="activeTab = 'active'">
          <span class="tag is-medium mr-1">{{ activeQty }}</span>
          <span>Active</span>
        </a>
      </li>
      <li :class="activeTab === 'completed' ? 'is-active' : ''">
        <a href="#completed" @click="activeTab = 'completed'">
          <span class="tag is-medium mr-1">{{ completedQty }}</span>
          <span>Completed</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, type Ref } from "vue";

const props = defineProps<{
  allQty: number;
  activeQty: number;
  completedQty: number;
}>();

let { allQty, activeQty, completedQty } = toRefs(props);

type Filter = "all" | "active" | "completed";
let activeTab: Ref<Filter> = ref<Filter>("all");
</script>
