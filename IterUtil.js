"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IterUtilImpl_1 = require("./IterUtilImpl");
class IterUtil extends IterUtilImpl_1.IterUtilImpl {
    constructor(list) {
        super(list, Unit);
    }
}
exports.IterUtil = IterUtil;
const Unit = (i) => i;
