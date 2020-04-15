'use strict';

const moxy = require('@moxy/postcss-preset')();

const plugins = Object.entries(moxy.plugins).map(([path, options]) => () => require(path)(options));

module.exports = (api) => {
    api.cache(true);

    return {
        ignore: process.env.NODE_ENV === 'test' ? [] : ['**/*.test.js', '**/__snapshots__'],
        presets: [
            ['@moxy/babel-preset/lib', { react: true }],
        ],
        plugins: [
            ['css-modules-transform', {
                prepend: [...plugins],
                extractCss: './dist/styles.css',
                generateScopedName: 'rlt_[name]_[local]',
            }],
        ],
    };
};
