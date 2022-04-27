"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
const instruccion_1 = require("./instruccion");
const NodoAst_1 = require("../simbolo/NodoAst");
class Break extends instruccion_1.instruccion {
    constructor(fila, columna) {
        super(fila, columna);
    }
    ejecutar(ambito) {
        return { tipo: "201701015B", fila: this.fila, columna: this.columna };
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('BREAK');
        nodo.agregarHijo('break');
        nodo.agregarHijo(';');
        return nodo;
    }
}
exports.Break = Break;
