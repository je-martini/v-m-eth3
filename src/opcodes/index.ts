import Instruction from "../classes/instruction"
import ExecutionContext from "../classes/execution";

const Opcodes: {
    0: Instruction;
    [key: number]: Instruction | undefined;
  } = {
    0x00: new Instruction(0x00, "STOP", (ctx: ExecutionContext) => ctx.stop()),

};
  
export default Opcodes;