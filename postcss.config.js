'use strict';

const moxy = require('@moxy/postcss-preset')();

module.exports = {
    plugins: {
        ...moxy.plugins,
        [require.resolve('postcss-modules')]: {
            generateScopedName: '[name]_[local]_[hash:base64:5]',
            getJSON: () => {},
        },
    },
};
