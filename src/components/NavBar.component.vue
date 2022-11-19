<script setup lang="ts">
import { auth } from '@/core/firebase';

/*
  methods
*/
const logout = () => {
  auth.signOut();
};
</script>
<template>
  <section class="hero is-fullheight is-default is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <figure class="is-flex is-align-items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/todo-256.png?alt=media&token=8e308f35-e3e7-4309-a3fc-6fb17833f0b0"
                  alt="Logo"
                />
                <figcaption class="m-2 title">Todo</figcaption>
              </figure>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="tabs is-right">
                <ul>
                  <li>
                    <router-link
                      to="home"
                      class="button is-light mx-1"
                      @click.prevent="logout"
                      >Log Out</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <slot default />
    </div>
  </section>
</template>
