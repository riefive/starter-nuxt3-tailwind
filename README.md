# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

## Step of Intalling Tailwind CSS for Nuxt 3

- https://tailwindcss.com/docs/guides/nuxtjs#3
- https://stackblitz.com/edit/daisyui-nuxt3/?file=package.json

### Step 1

```
$ npx nuxi init starter-vitejs-tailwind
$ cd starter-vitejs-tailwind
```

### Step 2

```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init
$ npm audit fix --force
```

### Step 3

```
# Edit nuxt.config.js
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

### Step 4

```
# Edit tailwind.config.js
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5

```
# Create assets/css/main.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 6

```
# Edit nuxt.config.js
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

### Step 7

```
# Create or Edit src/components/HelloWorld.vue
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

# Run the application
$ npm run dev
```
