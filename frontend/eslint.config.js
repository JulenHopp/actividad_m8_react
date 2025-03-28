import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

export default defineConfig([
  // Config básica para JS
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest, 
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // React 17+
      "react/prop-types": "off",         // Desactiva prop-types
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);