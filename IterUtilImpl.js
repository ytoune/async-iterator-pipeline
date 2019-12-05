"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const flatMapOp_1 = require("./ops/flatMapOp");
const mergeOp_1 = require("./ops/mergeOp");
const skipOp_1 = require("./ops/skipOp");
const takeOp_1 = require("./ops/takeOp");
class IterUtilImpl {
    constructor(list, mapiter) {
        this.list = list;
        this.mapiter = mapiter;
    }
    [Symbol.asyncIterator]() {
        return this.mapiter(this.list[Symbol.asyncIterator]());
    }
    flatMap(f) {
        return new IterUtilImpl(this, flatMapOp_1.flatMapOp(f));
    }
    flat() {
        return this.flatMap((i) => i);
    }
    merge(iterable) {
        return new IterUtilImpl(this, mergeOp_1.mergeOp(iterable));
    }
    skip(offset) {
        return new IterUtilImpl(this, skipOp_1.skipOp(offset));
    }
    take(limit) {
        return new IterUtilImpl(this, takeOp_1.takeOp(limit));
    }
    concat(...iterables) {
        let tmp = this;
        for (const i of iterables)
            tmp = tmp.merge(i);
        return tmp;
    }
    map(f) {
        const f2 = async (i) => [await f(i)];
        return new IterUtilImpl(this, flatMapOp_1.flatMapOp(f2));
    }
    filter(f) {
        const f2 = async (i) => ((await f(i)) ? [i] : []);
        return new IterUtilImpl(this, flatMapOp_1.flatMapOp(f2));
    }
    tap(f) {
        const f2 = async (i) => (await f(i), [i]);
        return new IterUtilImpl(this, flatMapOp_1.flatMapOp(f2));
    }
    async first() {
        var e_1, _a;
        try {
            for (var _b = __asyncValues(this), _c; _c = await _b.next(), !_c.done;) {
                const i = _c.value;
                return i;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    async last() {
        var e_2, _a;
        let l;
        try {
            for (var _b = __asyncValues(this), _c; _c = await _b.next(), !_c.done;) {
                const i = _c.value;
                l = i;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return l;
    }
    async toArray() {
        var e_3, _a;
        const list = [];
        try {
            for (var _b = __asyncValues(this), _c; _c = await _b.next(), !_c.done;) {
                const i = _c.value;
                list.push(i);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return list;
    }
    async forEach(f) {
        var e_4, _a;
        try {
            for (var _b = __asyncValues(this), _c; _c = await _b.next(), !_c.done;) {
                const i = _c.value;
                await f(i);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
}
exports.IterUtilImpl = IterUtilImpl;
