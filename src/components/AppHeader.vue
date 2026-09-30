<template>
  <header class="app-header">
    <div class="app-header__container">
      <router-link class="app-header__brand" to="/">
        Product Showcase
      </router-link>

      <nav class="app-header__nav" aria-label="Navegación principal">
        <router-link class="app-header__link" to="/"> Productos </router-link>

        <router-link class="app-header__link" to="/about">
          Acerca de
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>
