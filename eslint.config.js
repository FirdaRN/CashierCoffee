// eslint.config.js
const pluginJs = require('@eslint/js');
const pluginVue = require('eslint-plugin-vue');
const globals = require('globals');

module.exports = {
    ...pluginVue.configs['flat/strongly-recommended']
}

// module.exports = [
//     { 
//         files: ['**/*.{js,mjs,cjs,ts,vue}'],
//         files: ['**/*.vue'],
//         "rules": {
//             "no-console": 0,
//             "quotes": [2, "double", "avoid-escape"]
//         },
//         rules: {
//             'vue/multi-word-component-names': 'off',
//             // '@typescript-eslint/no-unused-expressions': [
//             //     'error',
//             //     {
//             //         allowShortCircuit: true,
//             //         allowTernary: true
//             //     }
//             // ]
//         }
//     }
// ];