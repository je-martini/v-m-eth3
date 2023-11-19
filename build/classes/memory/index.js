"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const errors_1 = require("./errors");
const bytes_1 = require("@ethersproject/bytes");
class Memory {
    constructor() {
        this.memory = [];
    }
    store(offset, value) {
        if (offset < 0 || offset > constants_1.MAX_UINT256)
            throw new errors_1.invalidMemoryOffset(offset, value);
        if (value < 0 || value > constants_1.MAX_UINT256)
            throw new errors_1.invalidMemoryValue(offset, value);
        this.memory[Number(offset)] = value;
    }
    load(offset) {
        if (offset < 0 || offset > constants_1.MAX_UINT256)
            throw new errors_1.invalidMemoryOffset(offset, BigInt(0));
        if (offset >= this.memory.length)
            return BigInt(0);
        return this.memory[Number(offset)];
    }
    print() {
        console.log(`Memory:\t`, this.memory.map((value) => (0, bytes_1.hexlify)(value)));
    }
}
exports.default = Memory;
