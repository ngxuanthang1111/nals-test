module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": [
      "off",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": ["off", { devDependencies: true }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": [
      "off",
      {
        html: "ignore",
        custom: "ignore",
        explicitSpread: "ignore",
        exceptions: [],
      },
    ],
    "react/destructuring-assignment": ["warn", "always"],
    "array-bracket-newline": ["off", "never"],
    "no-param-reassign": "off",
    "react/require-default-props": "off",
    "no-unused-vars": "warn",
  },
};
