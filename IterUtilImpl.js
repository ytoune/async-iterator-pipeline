"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IterUtilImpl {
    constructor(_list) {
        this._list = _list;
    }
    [Symbol.asyncIterator]() {
        return this._list[Symbol.asyncIterator]();
    }
    async first() {
        for await (const i of this._list)
            return i;
    }
    async last() {
        let l;
        for await (const i of this._list)
            l = i;
        return l;
    }
    async toArray() {
        const list = [];
        for await (const i of this._list)
            list.push(i);
        return list;
    }
    async forEach(f) {
        for await (const i of this._list)
            await f(i);
    }
    pipe(...ops) {
        // @ts-ignore
        let tmp = this._list;
        for (const op of ops)
            tmp = op(tmp);
        return new IterUtilImpl(tmp);
    }
}
exports.IterUtilImpl = IterUtilImpl;
