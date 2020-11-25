"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
const tap = (f) => async function* (iter) {
    for await (const v of iter) {
        await f(v);
        yield v;
    }
};
exports.tap = tap;
exports.default = exports.tap;
