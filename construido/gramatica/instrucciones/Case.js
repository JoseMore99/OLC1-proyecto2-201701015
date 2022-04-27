"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Case = void 0;
const NodoAst_1 = require("../simbolo/NodoAst");
const instruccion_1 = require("./instruccion");
class Case extends instruccion_1.instruccion {
    constructor(condicion, contenido, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.contenido = contenido;
    }
    ejecutar(ambito) {
        return this.contenido.ejecutar(ambito);
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('CASE');
        nodo.agregarHijo('case');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(':');
        nodo.agregarHijoAST(this.contenido.getNodo());
        return nodo;
    }
}
exports.Case = Case;
