"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
exports.first = () => async (iter) => {
    for await (const i of iter)
        return i;
};
exports.default = exports.first;
