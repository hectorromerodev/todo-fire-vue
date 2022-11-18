<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://todo-e99d3.web.app">
          <img src="https://firebasestorage.googleapis.com/v0/b/todo-e99d3.appspot.com/o/todo.png?alt=media&token=551b58dd-8205-4c52-aa41-5fd0fc7e0e62" width="32" height="32">
        </a>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

          <router-link to="/" class="navbar-item">
            Home
          </router-link>

    
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
    
            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              
              <router-link to="register" class="button is-primary">
                <strong>Sign Up</strong>
              </router-link>

              <router-link to="sign-in" class="button is-light">
                Log In
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </nav>
    <slot default/>
</template>



