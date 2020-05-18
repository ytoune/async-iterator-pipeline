"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = (...iterables) => async function* (iter) {
    for await (const v of iter)
        yield v;
    for (const iterable of iterables)
        for await (const v of iterable)
            yield v;
};
exports.default = exports.concat;
