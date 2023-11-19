"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownOpcode = exports.InvalidProgramCounterIndex = exports.InvalidBytecode = void 0;
class InvalidBytecode extends Error {
}
exports.InvalidBytecode = InvalidBytecode;
class InvalidProgramCounterIndex extends Error {
}
exports.InvalidProgramCounterIndex = InvalidProgramCounterIndex;
class UnknownOpcode extends Error {
}
exports.UnknownOpcode = UnknownOpcode;
