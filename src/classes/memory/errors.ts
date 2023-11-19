class OffsetValueError extends Error{
    constructor(offset: bigint, value: bigint) {
        super(`memory access with offset: ${offset} and value ${value} is not valid`);
    }
}

class invalidMemoryOffset extends OffsetValueError{

}

class invalidMemoryValue extends OffsetValueError{}

export { OffsetValueError, invalidMemoryOffset, invalidMemoryValue};
