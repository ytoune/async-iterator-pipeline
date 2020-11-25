"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const map = (f) => async function* (iter) {
    for await (const v of iter)
        yield await f(v);
};
exports.map = map;
exports.default = exports.map;
