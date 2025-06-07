<div align="center">
  <a href="https://oliverbarreto.com">
    <img src="https://www.oliverbarreto.com/images/site-logo.png" />
  </a>
</div>
<div align="center">
  <h1>React + Vite + Shadcn + TailwindCSS TEMPLATE PROJECCT</h1>
  <strong>React 19.1.0 + ReactDOM 19.1.0  + Vite 6.3.5 + TailwindCSS 4.1.8 + ESLint 9.25</strong>
</div>
<br>

## 🚀 Project Features
This a template project for a React Vite app. 

Made with ❤️ by Oliver Barreto.


# Installation (ShadCN + React + TypeScript + Vite))

- https://ui.shadcn.com/docs/installation/vite


## Install and configure shadcn/ui for Vite.

### 1. Create project

Start by creating a new React project using `vite`. Select the **React + TypeScript** template:

```bash
npm create vite@latest
```

### 2. Add Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Replace everything in `src/index.css` with the following:

```css
@import "tailwindcss";
```

### 3. Edit `tsconfig.json` file

The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the `baseUrl` and `paths` properties to the `compilerOptions` section of the `tsconfig.json` and `tsconfig.app.json` files:

`tsconfig.json`

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  // ...
  // The following code needs to be added to the file
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 4. Edit `tsconfig.app.json` file

Add the following code to the `tsconfig.app.json` file to resolve paths, for your IDE:

`tsconfig.app.json`

```json
{
  "compilerOptions": {
    // ...
    // The following code needs to be added to the file
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```

### Update `vite.config.ts`

Install the `@types/node` package to your project:
```bash
npm install -D @types/node
```

Add the following code to the `vite.config.ts` so your app can resolve paths without error:

```typescript
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/

export default defineConfig({

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {

      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### 6. Run the CLI

Run the `shadcn` init command to setup your project:

```bash
npx shadcn@latest init
```

You will be asked a few questions to configure `components.json`.

```bash
Which color would you like to use as base color? › Neutral
```

### 7. Add Components

You can now start adding components to your project.

```bash
npx shadcn@latest add button
```

The command above will add the `Button` component to your project. You can then import it like this:

`src/App.tsx`

```typescript
import { Button } from "@/components/ui/button"


function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}

export default App
```


# Official README created by ShadCN for Vite Installation
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
