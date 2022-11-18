<script setup lang="ts"></script>
<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box mt-5">
            <figure class="avatar">
              <img src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/todo-256.png?alt=media&token=8e308f35-e3e7-4309-a3fc-6fb17833f0b0" height="150" width="150">
            </figure>
            <p class="subtitle has-text-grey">Sign Up with your email</p>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus>
                </div>
              </div>
  
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <button class="button is-block is-info is-medium is-fullwidth">Sign Up</button>
            </form>
            <p class="line-before-text line-after-text subtitle has-text-grey my-4">Or</p>
            <div class="buttons">
              <button class="button is-block is-danger is-medium is-fullwidth">
                <span>Sign Up with Google</span>
              </button>
              <button class="button is-block is-black is-medium is-fullwidth">
                <span>Sign Up with Github</span>
              </button>
            </div>

            <hr class="mt-6" />

            <p class="has-text-grey">
              <router-link to="sign-in">Sign In</router-link> &nbsp;·&nbsp;
              <router-link to="/">Need Help?</router-link>
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
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
}

p {
  font-weight: 700;
} 

.login-hr {
  border-bottom: 1px solid black;
}

/* Create a line with or text in the center */
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}


</style>
