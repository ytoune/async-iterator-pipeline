"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapIter = void 0;
class WrapIter {
    constructor(iter) {
        this.iter = iter;
        this.cur = 0;
        this.done = false;
    }
    async next() {
        const r = await this.iter.next();
        if (r.done)
            this.done = true;
        return r;
    }
}
exports.WrapIter = WrapIter;
