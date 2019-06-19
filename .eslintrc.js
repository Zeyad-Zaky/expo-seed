module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/jsx-no-bind": [
      1,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 100
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      },
      "babel-module": {}
    }
  },
  plugins: ["prettier"]
};
