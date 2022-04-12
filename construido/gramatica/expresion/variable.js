"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
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
}
exports.Variable = Variable;
