"use strict";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEvent = void 0;
async function* fromEvent(target, type, options) {
    const queue = [];
    const handle = (event) => {
        queue.unshift(event);
        res === null || res === void 0 ? void 0 : res();
    };
    const { once, passive, capture } = options || {};
    const add = options && { once, passive, capture };
    const remove = null == capture ? undefined : { capture };
    target.addEventListener(type, handle, add);
    let res;
    try {
        for (;;) {
            await new Promise(r => (res = r));
            while (queue.length)
                yield queue.pop();
        }
    }
    finally {
        target.removeEventListener(type, handle, remove);
    }
}
exports.fromEvent = fromEvent;
exports.default = fromEvent;
