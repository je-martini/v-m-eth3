"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const constants_1 = require("../../constants");
const bytes_1 = require("@ethersproject/bytes");
class Stack {
    constructor(maxDepth = 1024) {
        this.maxDepth = maxDepth;
        this.stack = [];
    }
    push(value) {
        if (value < 0 || value > constants_1.MAX_UINT256)
            throw new errors_1.InvalidStackValue(value);
        if (this.stack.length + 1 > this.maxDepth)
            throw new errors_1.StackOverFlow();
        this.stack.push(value);
    }
    pop() {
        const value = this.stack.pop();
        if (value == undefined)
            throw new errors_1.StackUnderFlow();
        return value;
    }
    print() {
        console.log(`Stack:\t`, this.stack.map((value) => (0, bytes_1.hexlify)(value)));
    }
}
exports.default = Stack;
