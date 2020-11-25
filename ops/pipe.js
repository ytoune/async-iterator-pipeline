"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
const pipe = (...ops) => (iter) => {
    // @ts-ignore
    let tmp = iter;
    for (const op of ops)
        tmp = op(tmp);
    return tmp;
};
exports.pipe = pipe;
exports.default = exports.pipe;
