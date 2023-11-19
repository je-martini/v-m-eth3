"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackUnderFlow = exports.StackOverFlow = exports.InvalidStackValue = void 0;
class InvalidStackValue extends Error {
    constructor(value) {
        super(`Value ${value} is invalid`);
    }
}
exports.InvalidStackValue = InvalidStackValue;
class StackOverFlow extends Error {
}
exports.StackOverFlow = StackOverFlow;
class StackUnderFlow extends Error {
}
exports.StackUnderFlow = StackUnderFlow;
