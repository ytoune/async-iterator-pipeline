"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (f) => async function* (iter) {
    for await (const v of iter)
        if (await f(v))
            yield v;
};
exports.filter = filter;
exports.default = exports.filter;
