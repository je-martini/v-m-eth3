"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidMemoryValue = exports.invalidMemoryOffset = exports.OffsetValueError = void 0;
class OffsetValueError extends Error {
    constructor(offset, value) {
        super(`memory access with offset: ${offset} and value ${value} is not valid`);
    }
}
exports.OffsetValueError = OffsetValueError;
class invalidMemoryOffset extends OffsetValueError {
}
exports.invalidMemoryOffset = invalidMemoryOffset;
class invalidMemoryValue extends OffsetValueError {
}
exports.invalidMemoryValue = invalidMemoryValue;
