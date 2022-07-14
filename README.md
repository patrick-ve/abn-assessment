# ABN AMRO assessment

## Rationale

For this assessment Nuxt 3.0.0rc-4 was used, which is a framework for Vue 3. Out of the box it comes with several handy features, such as Suspense, Composition API inside macro compiler, file-based routing, auto import of components and first-class TypeScript support (although not used here). Nuxt also has a rich set of Nuxt Modules that come in handy in certain use cases.

For this assignment a number of composables were created, each comprising of a function that is reusable across the entire application. Components live inside their own folders and can be auto-imported inside pages, but will be auto transformed based on their respective folder names (i.e.: `@/components/NavBar/Header.vue` becomes `<NavBarHeader />`).

For testing Vitest was used, which required a `vitest.config.ts` file and transforms all auto-imports so that they can be used by Vite and Vitest. Vitest’s approach to the testing space is similar to Vite’s approach on the bundling space: let the tool control your entire environment, top to bottom. Vitest is a replacement for a suite of tools:

- Jest, Mocha, or Chai for test utilities
- Babel for transpiling ESM, TypeScript, and more
- webpack or Rollup for bundling test dependencies (if needed)

This means far less config, dependency mismatching, and performance monitoring for you to manage. Just install vitest and the magic happens. ✨

## Requirements

- [x] Add search functionality with input query
- [x] Display search results based on input query
- [x] Add detail page for individual show
- [x] Responsive design and UI
- [x] Unit tests with Vitest
- [x] Uses TVMaze API
- [x] Show popular TV show list based on rating
- [x] Show horizontal list of TV shows based on genre

## Project Setup

### Prerequisities

- Node.js 16.X.X (latest LTS version)
- Git

### Clone repository and install dependencies

```sh
git clone https://github.com/patrick-ve/abn-assessment.git
cd abn-assessment
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Build server output for production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```
