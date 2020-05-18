"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMap = void 0;
exports.flatMap = (f) => async function* (iter) {
    for await (const v of iter)
        for (const p of await f(v))
            yield p;
};
exports.default = exports.flatMap;
