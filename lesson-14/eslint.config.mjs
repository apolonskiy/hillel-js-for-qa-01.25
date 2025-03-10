import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js'
import jestConfig from 'eslint-plugin-jest'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/**.mjs', '**/**.js']},
  {ignores: ['html*']},
  {languageOptions: 
    { 
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  pluginJs.configs.recommended,
  jestConfig.configs['flat/recommended'],
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
  },
  {
    rules: {
      "no-unused-vars": 0,
      "@stylistic/js/indent": ["error", 2, { "SwitchCase": 2 }],
      "@stylistic/js/space-in-parens": ["error", "never"],
      "@stylistic/js/arrow-spacing": [2, { "before": true, "after": true }]
    }
  }
];