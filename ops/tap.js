"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = (f) => async function* (iter) {
    for await (const v of iter) {
        await f(v);
        yield v;
    }
};
exports.default = exports.tap;
