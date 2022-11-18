<script setup lang="ts"></script>

<template>

<section class="hero is-fullheight is-default is-bold">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <figure class="is-flex is-align-items-center	">
              <img src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/todo-256.png?alt=media&token=8e308f35-e3e7-4309-a3fc-6fb17833f0b0" alt="Logo">
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
                <li><router-link to="register" class="button is-primary mx-1">Sing Up</router-link></li>
                <li><router-link to="sign-in" class="button is-light mx-1">Login</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-vcentered">
        <div class="column box is-5">
          <figure class="image is-4by3">
            <img src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/todo-app.png?alt=media&token=68acec68-d45b-4a52-b716-3cc0402ff9e9" alt="App show case">
          </figure>
        </div>
        <div class="column is-6 is-offset-1">
          <h2 class="title is-2">
            Todo is a simple todo app to manage your daily tasks
          </h2>
          <h3 class="subtitle is-4 mt-6">
            A simple todo app tool made with Vue 3, Firebase, TypeScript and bulma css.
          </h3>
          <br>
          <p class="has-text-centered">
            <router-link to="about" class="button is-medium is-info is-outlined">
              Get Started
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  <footer class="section">
    <div class="container">
      <div class="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
        <div class="mr-auto mb-2">
          <a class="is-inline-block" href="#">
            <figure class="is-flex is-align-items-center	">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/todo-256.png?alt=media&token=8e308f35-e3e7-4309-a3fc-6fb17833f0b0"
                alt="Logo"
                height="45"
                width="45">
              <figcaption class="m-1 title">Todo</figcaption>
            </figure>
          </a>
          
        </div>
      </div>
    </div>
    <div class="pt-5" style="border-top: 1px solid #dee2e6;"></div>
    <div class="container">
      <div class="is-flex-tablet is-justify-content-between is-align-items-center">
        <p>All rights reserved © Todo App 2022</p>
        <div class="py-2 is-hidden-tablet"></div>
        <div class="ml-auto">
          <a class="mr-4 is-inline-block" href="https://www.twitter.com/hectorromerodev">
            <img class="image is-32x32" src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/twitter.png?alt=media&token=a6c7931f-c1ee-41b6-aa78-0ef058adb72f" alt="">
          </a>
          <a class="mr-4 is-inline-block" href="https://www.github.com/hectorromerodev">
            <img class="image is-32x32" src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/github.png?alt=media&token=49c4b642-757f-48ff-acc4-a10a4c7d5dd0" alt="">
          </a>
          <a class="mr-4 is-inline-block" href="https://www.instagram.com/hectorromerodev">
            <img class="image is-32x32" src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/instagram.png?alt=media&token=1d3acba0-bef3-4578-afd8-1012a3e49cd0" alt="">
          </a>
          <a class="is-inline-block" href="https://www.linkedin.com/in/hectorromerodev">
            <img class="image is-32x32" src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/linkedin.png?alt=media&token=f879bc92-2aa7-44a9-ad19-ce0661170339" alt="">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>