<template>
  <main class="container">
    <section class="about" aria-labelledby="about-title">
      <div class="about__card">
        <router-link class="button button--secondary" to="/">
          ← Volver a productos
        </router-link>
        <header class="about__header">
          <span class="about__eyebrow">Nuestro catálogo</span>

          <h1 id="about-title" class="about__title">
            Acerca de Product Showcase
          </h1>

          <p class="about__intro">
            Explora nuestra colección de productos de manera sencilla, rápida y
            organizada.
          </p>
        </header>

        <div class="about__content">
          <h2 class="about__subtitle">¿Qué puedes hacer?</h2>

          <div class="about__features">
            <article class="about__feature">
              <span class="about__feature-icon" aria-hidden="true">🔎</span>

              <h3 class="about__feature-title">Buscar productos</h3>

              <p class="about__feature-text">
                Encuentra rápidamente los productos que estás buscando.
              </p>
            </article>

            <article class="about__feature">
              <span class="about__feature-icon" aria-hidden="true">🗂️</span>

              <h3 class="about__feature-title">Filtrar por categoría</h3>

              <p class="about__feature-text">
                Explora el catálogo utilizando diferentes categorías.
              </p>
            </article>

            <article class="about__feature">
              <span class="about__feature-icon" aria-hidden="true">⭐</span>

              <h3 class="about__feature-title">Guardar favoritos</h3>

              <p class="about__feature-text">
                Marca tus productos favoritos para tenerlos disponibles.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>
