"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const defaultExecute = () => {
    throw new errors_1.NotImplementedError();
};
class Instruction {
    constructor(opcode, name, execute) {
        this.opcode = opcode;
        this.name = name;
        this.execute = execute;
    }
}
exports.default = Instruction;
