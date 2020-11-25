"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
const merge = (iterable) => async function* (iter) {
    for await (const v of iter)
        yield v;
    for await (const v of iterable)
        yield v;
};
exports.merge = merge;
exports.default = exports.merge;
