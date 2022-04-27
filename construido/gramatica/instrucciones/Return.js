"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Return = void 0;
const instruccion_1 = require("./instruccion");
const NodoAst_1 = require("../simbolo/NodoAst");
class Return extends instruccion_1.instruccion {
    constructor(valor, fila, columna) {
        super(fila, columna);
        this.valor = valor;
    }
    ejecutar(ambito) {
        return { tipo: "201701015R", valor: this.valor, fila: this.fila, columna: this.columna };
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('RETURN');
        nodo.agregarHijo('return');
        if (this.valor != null) {
            nodo.agregarHijoAST(this.valor.getNodo());
        }
        nodo.agregarHijo(';');
        return nodo;
    }
}
exports.Return = Return;
