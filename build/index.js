"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const execution_1 = __importDefault(require("./classes/execution"));
const main = () => {
    var _a;
    const code = (_a = process_1.argv[2]) !== null && _a !== void 0 ? _a : '0x00';
    const executionContext = new execution_1.default(code);
    executionContext.run();
};
main();
