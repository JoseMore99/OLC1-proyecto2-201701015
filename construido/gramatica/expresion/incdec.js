"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoA = exports.Incdec = void 0;
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
class Incdec extends expresion_1.Expresion {
    constructor(id, tipo, fila, columna) {
        super(fila, columna);
        this.id = id;
        this.tipo = tipo;
    }
    ejecutar(ambito) {
        const aux = ambito.RetornarVal(this.id);
        if (aux != null) {
            if (this.tipo == tipoA.INCREMENTO) {
                ambito.AgregarVal(this.id.toLowerCase(), aux.valor + 1, aux.tipo);
            }
            else if (this.tipo == tipoA.DECREMENTO) {
                ambito.AgregarVal(this.id.toLowerCase(), aux.valor - 1, aux.tipo);
            }
            return { valor: aux.valor, type: aux.tipo };
        }
        return { valor: null, type: retorno_1.tipo.NULL };
    }
}
exports.Incdec = Incdec;
var tipoA;
(function (tipoA) {
    tipoA[tipoA["INCREMENTO"] = 0] = "INCREMENTO";
    tipoA[tipoA["DECREMENTO"] = 1] = "DECREMENTO";
})(tipoA = exports.tipoA || (exports.tipoA = {}));
