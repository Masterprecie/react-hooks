module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb-typescript",
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh"],
  rules: {
    "no-console": "off",
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [1, { ignoreFilesWithoutCode: true }],
    "react/jsx-filename-extension": [1, { allow: "as-needed" }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "linebreak-style": ["error", "windows"],

    // "react-refresh/only-export-components": [
    //   "warn",
    //   { allowConstantExport: true },
    // ],
  },
};
