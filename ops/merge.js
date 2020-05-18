"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = (iterable) => async function* (iter) {
    for await (const v of iter)
        yield v;
    for await (const v of iterable)
        yield v;
};
