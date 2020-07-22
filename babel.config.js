'use strict';

module.exports = (api) => {
    api.cache(true);

    return {
        ignore: process.env.NODE_ENV === 'test' ? [] : ['**/*.test.js', '**/__snapshots__', '**/__mocks__'],
        presets: [
            ['@moxy/babel-preset/lib', { react: true }],
        ],
    };
};
