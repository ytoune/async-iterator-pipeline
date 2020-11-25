"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
const concat = (...iterables) => async function* (iter) {
    for await (const v of iter)
        yield v;
    for (const iterable of iterables)
        for await (const v of iterable)
            yield v;
};
exports.concat = concat;
exports.default = exports.concat;
