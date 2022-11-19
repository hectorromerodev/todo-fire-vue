<script setup lang="ts">
import { computed, ref } from 'vue';
import { auth } from '@/core/firebase';
import { RouterLink, useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useToast } from 'vue-toastification';
import { checkEmailPassword } from './utils/checkEmailPassword';
import signInWithGoogle from './utils/signInWithGoogle';

/*
  initialising plugins
*/
const router = useRouter();
const toast = useToast();

/*
  reactive variables
*/
const email = ref('');
const password = ref('');

/*
  methods
*/
const registerEmail = async () => {
  await createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      toast.success('Account created successfully');
      toast.info('Redirecting to login page');
      router.push('/sign-in');
    })
    .catch((error: { code: number; message: string }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
      console.error(errorCode, errorMessage);
    });
};

/*
  computed
*/
const isFormValid = computed(() =>
  checkEmailPassword(email.value, password.value),
);
</script>

<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box mt-5">
            <figure class="avatar">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/todo-256.png?alt=media&token=8e308f35-e3e7-4309-a3fc-6fb17833f0b0"
                height="150"
                width="150"
              />
            </figure>
            <p class="subtitle has-text-grey">Sign Up with your email</p>
            <form @submit.prevent="registerEmail">
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

              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    required
                    v-model="password"
                  />
                </div>
                <p class="help has-text-left">
                  Minimum 8 characters, at least one letter and one number
                </p>
              </div>
              <button
                type="submit"
                class="button is-block is-info is-medium is-fullwidth"
                :disabled="!isFormValid"
              >
                Sign Up
              </button>
            </form>
            <p
              class="line-before-text line-after-text subtitle has-text-grey my-4"
            >
              Or
            </p>
            <div class="buttons">
              <button
                class="button is-block is-danger is-medium is-fullwidth"
                @click.prevent="signInWithGoogle"
              >
                <span>Sign Up with Google</span>
              </button>
            </div>

            <hr class="mt-6" />

            <p class="has-text-grey">
              <router-link to="home">Home</router-link> &nbsp;·&nbsp;
              <router-link to="sign-in">Already register?</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}

.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
</style>
