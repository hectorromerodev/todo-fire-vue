<script setup lang="ts">
import { computed, ref } from 'vue';
import { auth } from '@/core/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { checkEmail } from './utils/checkEmailPassword';

/*
  initializing plugins
*/
const toast = useToast();
const router = useRouter();

/*
  reactive variables
*/
const email = ref('');
const showMessage = ref(false);

/*
  methods
*/
const sendPassResetEmail = async () => {
  await sendPasswordResetEmail(auth, email.value)
    .then(() => {
      showMessage.value = true;
      successToast();
    })
    .catch(() => {
      showMessage.value = true;
      successToast();
    });
};

/*
  utils
*/
const successToast = () =>
  toast.info('Redirecting to login page', {
    timeout: 8000,
    onClose: () => router.push('/sign-in'),
    hideProgressBar: false,
  });

/*
  computed
*/
const isFormValid = computed(() => checkEmail(email.value));
</script>

<template>
  <div class="h-full columns is-vcentered is-centered">
    <div class="column is-5">
      <div class="box" v-if="!showMessage">
        <h1 class="title py-6 has-text-centered">Forgot Password</h1>
        <p class="subtitle has-text-centered">
          Enter your email to reset your password
        </p>
        <form @submit.prevent="sendPassResetEmail">
          <div class="field">
            <div class="control">
              <input
                class="input is-large"
                type="email"
                placeholder="Your Email"
                autofocus
                required
                v-model="email"
              />
            </div>
          </div>
          <button
            class="button is-primary is-fullwidth"
            :disabled="!isFormValid"
          >
            Send Password Reset Email
          </button>
        </form>
        <p class="has-text-centered py-4">
          Already have an account?
          <router-link to="sign-in">Sign In</router-link>
        </p>
      </div>
      <div class="box" v-else>
        <h1 class="title py-6 has-text-centered">Forgot Password</h1>
        <p class="subtitle py-6 has-text-centered">
          An email has been sent to {{ email }} with instructions on how to
          reset your password.
        </p>
        <p class="has-text-centered py-4">
          You will be redirected to login shortly.
        </p>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style>
.h-full {
  height: 100vh;
}
</style>
