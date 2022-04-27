"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoA = exports.Incdec = void 0;
const NodoAst_1 = require("../simbolo/NodoAst");
const instruccion_1 = require("./instruccion");
class Incdec extends instruccion_1.instruccion {
    constructor(iden, tipo, fila, columna) {
        super(fila, columna);
        this.iden = iden;
        this.tipo = tipo;
    }
    ejecutar(ambito) {
        const identificador = this.iden.id;
        const aux = ambito.RetornarVal(identificador);
        if (aux != null) {
            if (this.tipo == tipoA.INCREMENTO) {
                aux.valor++;
                // ambito.AgregarVal(identificador.toLowerCase(), aux.valor+1, aux.tipo)
            }
            else if (this.tipo == tipoA.DECREMENTO) {
                aux.valor--;
                //ambito.AgregarVal(identificador.toLowerCase(), aux.valor-1, aux.tipo)
            }
        }
        return { valor: aux === null || aux === void 0 ? void 0 : aux.valor, type: aux === null || aux === void 0 ? void 0 : aux.tipo };
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('EXPRESION');
        nodo.agregarHijo(this.iden);
        if (this.tipo == tipoA.INCREMENTO) {
            nodo.agregarHijo('+');
            nodo.agregarHijo('+');
        }
        else if (this.tipo == tipoA.DECREMENTO) {
            nodo.agregarHijo('-');
            nodo.agregarHijo('-');
        }
        return nodo;
    }
}
exports.Incdec = Incdec;
var tipoA;
(function (tipoA) {
    tipoA[tipoA["INCREMENTO"] = 0] = "INCREMENTO";
    tipoA[tipoA["DECREMENTO"] = 1] = "DECREMENTO";
})(tipoA = exports.tipoA || (exports.tipoA = {}));
