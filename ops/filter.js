"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = (f) => async function* (iter) {
    for await (const v of iter)
        if (await f(v))
            yield v;
};
