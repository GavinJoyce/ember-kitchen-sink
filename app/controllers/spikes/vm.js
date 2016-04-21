import Em from 'ember';

//https://www.youtube.com/watch?v=OjaAToVkoTw

class VirtualMachine {
  //codeMemory[]
  //dataMemory[]
  //stack[]

  //instructionPointer;
  //stackPointer;
  //framePointer;

  constructor(program, entryPointIndex=0) {
    this.program = program.map(this._humanToBytecode);
    this.instructionPointer = entryPointIndex;
    this.stack = [];
    this.stackPointer = -1;
  }

  run() {
    this.log('run', this.program);

    while(true) {
      let opcode = this.program[this.instructionPointer];
      this.instructionPointer += 1;
      this.log('opcode:', opcode);

      switch (opcode) { //TODO: enums
        case 0:
          this.log('HALT');
          return;
        case 1:
          this.log('CONST');
          let value = this.program[this.instructionPointer];
          this.instructionPointer += 1;

          this.stackPointer += 1;
          this.stack[this.stackPointer] = value;

          this.log('CONST: VAL: ', value);
          this.log('CONST: STACK: ', this.stack);
          break;
        case 2:
          this.log('PRINT');

          value = this.stack[this.stackPointer];
          this.stackPointer -= 1;

          console.log('PRINT', value);

          break;
        default:
          throw `VM: Invalid opcode [${opcode}]`;
      }
    }
  }

  log() {
    console.log('      [VM LOG]: ', ...arguments);
  }

  _humanToBytecode(operation) {
    if(typeof(operation) !== 'string') {
      return operation;
    }

    switch (operation) {
      case "HALT":
        return 0;
      case "CONST":
        return 1;
      case "PRINT":
        return 2;
      default:
        throw "invalid operation label";
    }
  }
}

export default Em.Controller.extend({
  bytecode: `[
    "CONST", 142857,
    "PRINT",
    "HALT"
  ]`,
  run() {
    let bytecode = JSON.parse(this.get('bytecode'));
    let vm = new VirtualMachine(bytecode);

    this.set('machineBytecode', vm.program);
    vm.run();
  }
});
