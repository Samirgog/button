module.exports = {
  extends: [
    // REACT
    "plugin:react/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:react-hooks/recommended",

    // JavaScript
    "eslint:recommended",
    "prettier",
    "plugin:xss/recommended",
    // "plugin:security/recommended",
    "plugin:eslint-plugin-import/recommended",

    // TypeScript
    "plugin:@typescript-eslint/recommended",
  ],

  parser: "@typescript-eslint/parser",

  plugins: [
    // REACT
    "react",
    "jsx-a11y",
    "react-hooks",
    "xss",

    // JavaScript
    "prettier",
    "optimize-regex",
    "no-secrets",
    "import",
    "security",

    // TypeScript
    "@typescript-eslint",
  ],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // REACT
        "react/prop-types": "off",

        // JavaScript, TypeScript
        "security/detect-object-injection": "off",
      },
    },
    // {
    //   files: ["src/app/**/*", "src/pages/**/*", "codegen.ts", "middleware.ts"],
    //   rules: {
    //     // JavaScript, TypeScript
    //     "import/no-default-export": "off"
    //   }
    // },
    {
      files: ["*.js", "*.mjs"],
      rules: {
        // Node.js scripts
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],

  rules: {
    // REACT
    "react/no-unknown-property": [
      "error",
      {
        ignore: ["jsx", "global"],
      },
    ],
    "jsx-quotes": ["error", "prefer-single"],
    "xss/no-mixed-html": [
      "warn",
      {
        htmlVariableRules: ["AsHtml", "HtmlEncoded/i", "^html$"],
        htmlFunctionRules: [".asHtml/i", "toHtml"],
        functions: {
          $: {
            htmlInput: true,
            safe: ["document", "this"],
          },
          ".html": {
            htmlInput: true,
            htmlOutput: true,
          },
          ".join": {
            passthrough: { obj: true, args: true },
          },
        },
      },
    ],

    // JavaScript
    "import/newline-after-import": ["error", { count: 1 }],
    semi: ["error", "always"],
    "no-secrets/no-secrets": "error",
    "optimize-regex/optimize-regex": [
      "warn",
      {
        blacklist: ["charClassClassrangesMerge"],
      },
    ],
    "class-methods-use-this": "off",
    "no-implicit-coercion": "error",
    "no-param-reassign": ["error", { props: false }],
    indent: "off",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
        ignoreCase: true,
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-cycle":
      process.env.ESLINT_CYCLE_ENABLED === "true" ? "error" : "off",
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-underscore-dangle": "off",
    "no-void": ["error", { allowAsStatement: true }],
    "default-case": "error",

    // TypeScript
    "import/named": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", //["warn"],
    "@typescript-eslint/no-explicit-any": "off", //["warn"],
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/member-ordering": ["warn"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/method-signature-style": ["warn", "property"],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          object: false,
        },
      },
    ],
  },

  // REACT
  settings: {
    react: {
      version: "detect",
    },
  },
};
