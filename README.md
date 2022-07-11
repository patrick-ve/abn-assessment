# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Rationale

Vitest’s approach to the testing space is similar to Vite’s approach on the bundling space: let the tool control your entire environment, top to bottom. Vitest is a replacement for a suite of tools:

- Jest, Mocha, or Chai for test utilities
- Babel for transpiling ESM, TypeScript, and more
- webpack or Rollup for bundling test dependencies (if needed)

This means far less config, dependency mismatching, and performance monitoring for you to manage. Just install vitest and let the magic happen. ✨
