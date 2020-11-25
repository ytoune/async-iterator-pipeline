"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMap = void 0;
const flatMap = (f) => async function* (iter) {
    for await (const v of iter)
        for (const p of await f(v))
            yield p;
};
exports.flatMap = flatMap;
exports.default = exports.flatMap;
