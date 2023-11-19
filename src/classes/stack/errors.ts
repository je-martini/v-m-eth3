class InvalidStackValue extends Error {
    constructor(value: bigint) {
        super(`Value ${value} is invalid`);

    }
}

class StackOverFlow extends Error {}

class StackUnderFlow extends Error {}

export {InvalidStackValue, StackOverFlow, StackUnderFlow};