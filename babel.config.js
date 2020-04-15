'use strict';

const moxy = require('@moxy/postcss-preset')();

// const config = {
//     plugins: {
//         ...moxy.plugins,
//         [require.resolve('postcss-modules')]: {
//             generateScopedName: 'rlt_[name]_[local]',
//             getJSON: () => {}, // Disable exported JSON file
//         },
//     },
// };

module.exports = (api) => {
    api.cache(true);

    return {
        ignore: process.env.NODE_ENV === 'test' ? [] : ['**/*.test.js', '**/__snapshots__'],
        presets: [
            ['@moxy/babel-preset/lib', { react: true }],
        ],
        plugins: [
            ['css-modules-transform', {
                prepend: [() => ({
                    plugins: Object.entries(moxy.plugins),
                })],
                extractCss: './dist/styles.css',
                generateScopedName: 'rlt_[name]_[local]',
            }],
        ],
    };
};
