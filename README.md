Product Showcase

Catálogo de productos desarrollado con Vue 3 como parte del Proyecto Módulo 7.

La aplicación permite visualizar productos obtenidos desde una API REST, filtrarlos por nombre y categoría, consultar el detalle de cada producto y gestionar productos favoritos mediante un estado global con Vuex.

Objetivo

Desarrollar una aplicación web modular y reutilizable que permita consumir información desde una API REST y presentar un catálogo de productos mediante una interfaz responsive, accesible y organizada.

El proyecto incorpora componentes reutilizables, gestión de estado global, navegación mediante rutas, estilos desarrollados con SCSS y una librería de componentes UI.

Tecnologías utilizadas

- Vue 3
- Vue Router
- Vuex
- Axios
- Element Plus
- SCSS / Sass
- Jest
- Vue Test Utils
- Cypress
- ESLint
- Vue CLI

Funcionalidades

La aplicación permite:

- Visualizar un catálogo de productos.
- Obtener productos desde una API REST.
- Buscar productos por nombre.
- Filtrar productos por categoría.
- Consultar el detalle de un producto.
- Visualizar información como precio, categoría, descripción, valoración, stock y marca.
- Agregar y quitar productos de favoritos.
- Navegar entre las distintas vistas mediante Vue Router.
- Mostrar estados de carga y mensajes cuando ocurre un error al consumir la API.
- Utilizar componentes de interfaz de Element Plus.
- Adaptar la interfaz a distintos tamaños de pantalla.

Estructura del proyecto

src/
├── App.vue
├── main.js
│
├── assets/
│   └── styles/
│       ├── main.scss
│       ├── abstracts/
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       ├── base/
│       │   ├── _base.scss
│       │   └── _reset.scss
│       └── components/
│           ├── _about.scss
│           ├── _buttons.scss
│           ├── _header.scss
│           ├── _product-card.scss
│           ├── _product-detail.scss
│           ├── _product-filter.scss
│           └── _product-list.scss
│
├── components/
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   ├── ProductCard.vue
│   ├── ProductFilter.vue
│   └── ProductList.vue
│
├── router/
│   └── index.js
│
├── services/
│   └── productService.js
│
├── store/
│   ├── index.js
│   └── modules/
│       ├── favorites.js
│       ├── filters.js
│       └── products.js
│
└── views/
    ├── AboutView.vue
    ├── HomeView.vue
    └── ProductDetailView.vue

La estructura separa las responsabilidades de la aplicación en componentes, vistas, navegación, servicios, estado global y estilos.

Decisiones técnicas

Vue 3

Se utilizó Vue 3 para desarrollar la interfaz mediante componentes reutilizables y una arquitectura modular.

Los componentes utilizan la Composition API y "<script setup>" cuando corresponde.

Componentización

La interfaz se dividió en componentes independientes, entre ellos:

- "AppHeader"
- "AppFooter"
- "ProductCard"
- "ProductFilter"
- "ProductList"

Esto permite reutilizar y mantener cada parte de la interfaz de forma independiente.

Vue Router

Vue Router permite gestionar la navegación entre las distintas vistas de la aplicación.

Se implementaron rutas para:

- Página principal.
- Detalle de producto.
- Página informativa.

El detalle de producto utiliza una ruta dinámica:

/productos/:id

Vuex

Se utilizó Vuex para gestionar el estado global de la aplicación.

El store se organizó mediante módulos:

- "products": productos, carga, errores y producto seleccionado.
- "filters": búsqueda y categoría seleccionada.
- "favorites": gestión de productos favoritos.

Esta separación permite mantener una estructura organizada y facilita el acceso al estado desde diferentes componentes.

API REST y Axios

La comunicación con la API REST se separó de los componentes de interfaz mediante:

src/services/productService.js

De esta manera, los componentes y el store no necesitan implementar directamente la lógica de comunicación HTTP.

También se contemplan estados de carga y error para informar al usuario cuando la información no puede ser obtenida.

SCSS y metodología BEM

Los estilos se desarrollaron utilizando SCSS y se organizaron mediante archivos parciales.

La estructura contempla:

- Variables.
- Mixins.
- Reset.
- Estilos base.
- Estilos específicos de componentes.

Se utilizó la metodología BEM para nombrar las clases, por ejemplo:

.product-card
.product-card__image
.product-card__title
.product-card__actions

Esto permite mantener estilos organizados y facilita su mantenimiento.

Element Plus

Se incorporó Element Plus como librería de componentes UI.

Se utilizaron componentes como:

- "el-button"
- "el-input"
- "el-select"
- "el-option"

La librería se integró sin reemplazar la arquitectura SCSS/BEM del proyecto, utilizando Element Plus específicamente para determinados elementos de interfaz.

La elección permite incorporar componentes UI reutilizables manteniendo la organización y estilos propios del proyecto.

Accesibilidad

Se consideraron aspectos básicos de accesibilidad, entre ellos:

- HTML semántico.
- Etiquetas asociadas a campos de formulario.
- Textos alternativos para imágenes.
- Navegación mediante enlaces y botones.
- Estados mediante atributos ARIA cuando corresponde.
- Indicadores de foco.
- Estructura jerárquica de encabezados.

Diseño responsive

Los estilos incluyen reglas adaptadas a distintos tamaños de pantalla, especialmente para la visualización del catálogo y las tarjetas de productos.

Pruebas

Pruebas unitarias

Se utilizaron Jest y Vue Test Utils.

Se implementaron dos pruebas unitarias:

1. Comprobación del renderizado correcto de "ProductCard".
2. Comprobación de la respuesta visual de "HomeView" ante un error de la API.

Resultado de la ejecución:

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total

Comando utilizado:

npm run test:unit

Prueba E2E

Se utilizó Cypress para comprobar el funcionamiento de la aplicación desde el navegador.

Se verificó la visualización del título principal de la aplicación mediante una prueba E2E.

La prueba fue ejecutada en Chrome y aprobada.

Verificación del código

Se ejecutó ESLint para comprobar la calidad y consistencia del código.

Resultado:

DONE  No lint errors found!

Comando:

npm run lint

Build de producción

Se generó correctamente la versión de producción mediante:

npm run build

Resultado:

DONE  Build complete. The dist directory is ready to be deployed.

El proceso genera la carpeta:

dist/

Durante la compilación Webpack muestra advertencias relacionadas con el tamaño de los bundles. Estas advertencias corresponden a recomendaciones de rendimiento y no impiden completar la compilación.

Instalación

Requisitos

Se requiere tener instalado Node.js y npm.

Clonar el repositorio

git clone https://github.com/gigidegalatea-ship-it/vue-product-showcase.git

Ingresar al proyecto:

cd vue-product-showcase

Instalar dependencias

npm install

Ejecutar en desarrollo

npm run serve

La aplicación estará disponible en la dirección indicada por Vue CLI, normalmente:

http://localhost:8080/

Comandos disponibles

npm run serve

Inicia el servidor de desarrollo.

npm run lint

Ejecuta la comprobación de ESLint.

npm run test:unit

Ejecuta las pruebas unitarias con Jest.

npm run build

Genera la versión de producción.

npm run cypress:open

Abre Cypress para ejecutar las pruebas E2E desde su interfaz.

npm run cypress:run

Permite ejecutar las pruebas E2E desde la línea de comandos.

Nuxt y Quasar

La migración a Nuxt o Quasar no fue realizada porque esta alternativa se planteaba como opcional en el proyecto.

Se mantuvo Vue 3 con Vue CLI, Vue Router y Vuex debido a que esta arquitectura permite cumplir los objetivos principales del proyecto sin introducir una migración adicional que no era necesaria para los requerimientos establecidos.

Evidencias

La entrega contempla evidencias de:

- Funcionamiento del catálogo.
- Búsqueda y filtrado.
- Visualización del detalle de productos.
- Gestión de favoritos.
- Componentes de Element Plus.
- Pruebas unitarias.
- Prueba E2E.
- Ejecución de ESLint.
- Compilación de producción.

Las capturas de pantalla se incorporarán como parte de la entrega final.


Repositorio

https://github.com/gigidegalatea-ship-it/vue-product-showcase

Autoría

Proyecto desarrollado como parte del Proyecto Módulo 7.
