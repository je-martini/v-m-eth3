"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instruction_1 = __importDefault(require("../classes/instruction"));
const Opcodes = {
    0x00: new instruction_1.default(0x00, "STOP", (ctx) => ctx.stop()),
};
exports.default = Opcodes;
