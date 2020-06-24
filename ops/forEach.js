"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
exports.forEach = (f) => async (iter) => {
    for await (const i of iter)
        await f(i);
};
exports.default = exports.forEach;
