"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Continue = void 0;
const instruccion_1 = require("./instruccion");
const NodoAst_1 = require("../simbolo/NodoAst");
class Continue extends instruccion_1.instruccion {
    constructor(fila, columna) {
        super(fila, columna);
    }
    ejecutar(ambito) {
        return { tipo: "201701015C", fila: this.fila, columna: this.columna };
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('CONTINUE');
        nodo.agregarHijo('continue');
        nodo.agregarHijo(';');
        return nodo;
    }
}
exports.Continue = Continue;
