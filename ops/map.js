"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
exports.map = (f) => async function* (iter) {
    for await (const v of iter)
        yield await f(v);
};
exports.default = exports.map;
