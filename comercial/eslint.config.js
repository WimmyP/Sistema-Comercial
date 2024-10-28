import globals from "globals";
import eslintPluginSvelte from "eslint-plugin-svelte";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import svelteParser from "svelte-eslint-parser";

const eslintConfig = [
  {
    files: ["**/*.js", "**/*.svelte"],
    languageOptions: { 
      sourceType: "module",
      globals: globals.node,
    },
    plugins: {
      svelte: eslintPluginSvelte,
      import: eslintPluginImport,
      "jsx-a11y": eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "block-scoped-var": "error",
      eqeqeq: "error",
      indent: ["error", 2],
      camelcase: "error",
      "max-len": ["error", { code: 180, ignoreUrls: true }],
      semi: "error",
      quotes: ["error", "double", { avoidEscape: true }],
      "no-unused-vars": "warn",
      "eol-last": "error",
      "prefer-arrow-callback": "error",
      "no-trailing-spaces": "error",
      "require-await": "error",
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
    },
  },
];

export default eslintConfig;