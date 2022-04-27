"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
class Variable extends expresion_1.Expresion {
    constructor(id, line, column) {
        super(line, column);
        this.id = id;
    }
    ejecutar(ambito) {
        const aux = ambito.RetornarVal(this.id);
        if (aux != null) {
            return { valor: aux.valor, type: aux.tipo };
        }
        return { valor: null, type: retorno_1.tipo.NULL };
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('ID');
        nodo.agregarHijo(this.id);
        return nodo;
    }
}
exports.Variable = Variable;
