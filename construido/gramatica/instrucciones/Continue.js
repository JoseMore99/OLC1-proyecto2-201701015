"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Continue = void 0;
const instruccion_1 = require("./instruccion");
class Continue extends instruccion_1.instruccion {
    constructor(fila, columna) {
        super(fila, columna);
    }
    ejecutar(ambito) {
        return { tipo: "201701015C", fila: this.fila, columna: this.columna };
    }
}
exports.Continue = Continue;
