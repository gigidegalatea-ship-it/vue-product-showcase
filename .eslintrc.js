module.exports = {
  root: true,
  env: {
    node: true,
    "cypress/globals": true,
    "vue/setup-compiler-macros": true,
    jest: true,
  },
  globals: {
    defineProps: "readonly",
  },
  plugins: ["cypress"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
