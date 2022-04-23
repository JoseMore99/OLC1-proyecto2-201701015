"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
const instruccion_1 = require("./instruccion");
class Break extends instruccion_1.instruccion {
    constructor(fila, columna) {
        super(fila, columna);
    }
    ejecutar(ambito) {
        return { tipo: "201701015B", fila: this.fila, columna: this.columna };
    }
}
exports.Break = Break;
