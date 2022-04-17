"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoA = exports.Incdec = void 0;
const instruccion_1 = require("./instruccion");
class Incdec extends instruccion_1.instruccion {
    constructor(id, tipo, fila, columna) {
        super(fila, columna);
        this.id = id;
        this.tipo = tipo;
    }
    ejecutar(ambito) {
        const identificador = this.id.id;
        const aux = ambito.RetornarVal(identificador);
        if (aux != null) {
            console.log(aux);
            if (this.tipo == tipoA.INCREMENTO) {
                ambito.AgregarVal(identificador.toLowerCase(), aux.valor + 1, aux.tipo);
            }
            else if (this.tipo == tipoA.DECREMENTO) {
                ambito.AgregarVal(identificador.toLowerCase(), aux.valor - 1, aux.tipo);
            }
        }
    }
}
exports.Incdec = Incdec;
var tipoA;
(function (tipoA) {
    tipoA[tipoA["INCREMENTO"] = 0] = "INCREMENTO";
    tipoA[tipoA["DECREMENTO"] = 1] = "DECREMENTO";
})(tipoA = exports.tipoA || (exports.tipoA = {}));
