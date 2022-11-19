<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => router.go(-1);
</script>
<template>
  <div class="h-full columns is-flex is-vcentered is-centered">
    <div class="column is-5">
      <div class="box">
        <h1 class="py-4 is-size-1 has-text-centered">404</h1>
        <p class="is-size-3 py-6 has-text-centered">
          Sorry the page you are looking for does not exist.
        </p>

        <button class="button is-primary is-fullwidth" @click="goBack">
          Go Back
        </button>

        <p class="py-2 is-size-6 has-text-centered">
          If you think this is a mistake, please contact the site administrator.
          <a class="is-link" href="mailto:hectorromerodev@gmail.com"
            >hectorromerodev@gmail.com</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-full {
  height: 100vh;
}
</style>
