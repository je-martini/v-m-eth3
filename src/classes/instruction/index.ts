import ExecutionContext from "../execution";
import { NotImplementedError } from "./errors";

const defaultExecute = () => {
    throw new NotImplementedError();
}

class Instruction {
    public readonly opcode: number;
    public readonly name: string;
    public readonly execute: (ctx: ExecutionContext) => void;

    constructor(opcode: number, name: string, execute: (ctx: ExecutionContext) => void){
        this.opcode = opcode;
        this.name = name;
        this.execute = execute;
    }
}

export default Instruction