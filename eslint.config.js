import js from "@eslint/js";
import globals from "globals";
import svelte from "eslint-plugin-svelte";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".svelte-kit", "dist", "build", ".wrangler"]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs.recommended,
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
    rules: { "svelte/no-navigation-without-resolve": "off" },
  },
  {
    files: ["**/*.{js,ts,svelte}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
]);
