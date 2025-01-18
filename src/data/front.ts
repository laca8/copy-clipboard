const data = [
  {
    title: "Start by creating a new React project ",
    feature: "Vite",
    desc: "npm create vite@latest client",
  },
  {
    title:
      "Install tailwindcss and its peer dependencies, then generate your{ } tailwind.config.js  postcss.config.js files:",
    feature: "Vite",
    desc: "npm install -D tailwindcss postcss autoprefixer",
  },
  {
    title:
      "Install tailwindcss and its peer dependencies, then generate your{ } tailwind.config.js  postcss.config.js files:",
    feature: "Vite",
    desc: "npx tailwindcss init -p",
  },
  {
    title:
      "Add this import header in your main css file, src/index.css in our case:",
    feature: "Vite",
    desc: `
@tailwind base;
@tailwind components;
@tailwind utilities;`,
  },
  {
    title: "Configure the tailwind template paths in tailwind.config.js:",
    feature: "Vite",
    desc: `
/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
theme: {
extend: { },
},
plugins: [],
}
    `,
  },
  {
    title: " Edit tsconfig.json file",
    feature: "Vite",
    desc: `
"compilerOptions": {
"baseUrl": ".",
"paths": {
"@/*": ["./src/*"]
  }
}
`,
  },
  {
    title: "Edit tsconfig.app.json file  ",
    feature: "Vite",
    desc: `
"baseUrl": ".",
"paths": {
"@/*": [
"./src/*"
]
}
`,
  },
  {
    title: " Install dependencies{ }",
    feature: "Vite",
    desc: "npm install -D @types/node",
  },
  {
    title: "Update vite.config.ts",
    feature: "Vite",
    desc: `
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
                            `,
  },
  {
    title: "Install components tailwindcss",
    feature: "Vite",
    desc: "npx shadcn@latest init",
  },
  {
    title: "You can now start adding components to your project.",
    feature: "Vite",
    desc: " npx shadcn@latest add button",
  },
  {
    title: " Install features and packages",
    feature: "Vite",
    desc: "npm install react-router-dom axios react-redux @reduxjs/toolkit lucide-react",
  },
  {
    title: "  Using react-router-dom",
    feature: "Vite",
    desc: `
import {BrowserRouter, Route, Routes} from 'react-router-dom'{" "}
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />}>
</Route>
</Routes>
</BrowserRouter>
    `,
  },
  {
    title: "Using vite-config",
    feature: "Vite",
    desc: ` 
import {defineConfig} from "vite";                
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
plugins: [react()],
server: {
proxy: {
"/api": "http://localhost:5000/",
},
},
});
    `,
  },
  {
    title: "Using redux-toolkit in store.js",
    feature: "Vite",
    desc: `
import {configureStore} from "@reduxjs/toolkit"{" "}
const store = configureStore({"reducer: {},"});
export default store;
    `,
  },
];
export default data;
