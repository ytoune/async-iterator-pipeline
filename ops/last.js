"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
exports.last = () => async (iter) => {
    let l;
    for await (const i of iter)
        l = i;
    return l;
};
exports.default = exports.last;
