import * as exports from './index';

it('should export <NewComponent> by default', () => {
    expect(typeof exports.default).toBe('function');
});
