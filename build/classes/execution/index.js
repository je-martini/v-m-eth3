"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bytes_1 = require("@ethersproject/bytes");
const memory_1 = __importDefault(require("../memory"));
const stack_1 = __importDefault(require("../stack"));
const errors_1 = require("./errors");
const opcodes_1 = __importDefault(require("../../opcodes"));
class ExecutionContext {
    constructor(code) {
        if ((0, bytes_1.isHexString)(code) || code.length % 2 !== 0)
            throw new errors_1.InvalidBytecode();
        this.code = (0, bytes_1.arrayify)(code);
        this.stack = new stack_1.default();
        this.memory = new memory_1.default();
        this.pc = 0;
        this.stopped = false;
    }
    stop() {
        this.stopped = true;
    }
    run() {
        while (!this.stopped) {
            const currenPc = this.pc;
            const instruction = this.fetchInstruction();
            instruction.execute(this);
            console.info(`${instruction.name}\t @pc = ${currenPc}`);
            this.memory.print();
            this.stack.print();
            console.log("");
        }
    }
    fetchInstruction() {
        if (this.pc >= this.code.length)
            return opcodes_1.default[0];
        if (this.pc < 0)
            throw new errors_1.InvalidProgramCounterIndex();
        const opcode = this.readBytesFromCode(1);
        const instruction = opcodes_1.default[Number(opcode)];
        if (!instruction)
            throw new errors_1.UnknownOpcode();
        return instruction;
    }
    readBytesFromCode(bytes = 1) {
        const hexValues = this.code.slice(this.pc, this.pc + bytes);
        const values = BigInt((0, bytes_1.hexlify)(hexValues));
        this.pc += bytes;
        return values;
    }
}
exports.default = ExecutionContext;
