import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    extends: ["react-app", "eslint:recommended", "prettier"],
    rules: {
      "no-var": "error", // var 금지
      "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
      "no-console": ["error", { allow: ["warn", "error", "info"] }], // console.log() 금지
      eqeqeq: "error", // 일치 연산자 사용 필수
      "dot-notation": "error", // 가능하다면 dot notation 사용
      "no-unused-vars": "error", // 사용하지 않는 변수 금지
    },
  },
]);
