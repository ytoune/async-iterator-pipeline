"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhile = void 0;
exports.takeWhile = (f) => async function* (iter) {
    for await (const v of iter)
        if (await f(v))
            yield v;
        else
            break;
};
exports.default = exports.takeWhile;
