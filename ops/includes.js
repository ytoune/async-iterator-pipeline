"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includes = void 0;
exports.includes = (v) => async (iter) => {
    for await (const i of iter)
        if (v === i)
            return true;
    return false;
};
exports.default = exports.includes;
