"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
const first = () => async (iter) => {
    for await (const i of iter)
        return i;
};
exports.first = first;
exports.default = exports.first;
