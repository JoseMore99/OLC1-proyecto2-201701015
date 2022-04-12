"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoArit = exports.Aritmetica = void 0;
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
class Aritmetica extends expresion_1.Expresion {
    constructor(izquierda, derecha, tipo, fila, columna) {
        super(fila, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.tipo = tipo;
    }
    ejecutar(ambito) {
        const ValorIz = this.izquierda.ejecutar(ambito);
        const ValorDer = this.derecha.ejecutar(ambito);
        const Dom = this.tipoDom(ValorIz.type, ValorDer.type);
        if (this.tipo == tipoArit.SUMA) {
            if (Dom == retorno_1.tipo.STRING) {
                return { valor: (ValorIz.valor.toString() + ValorDer.valor.toString()), type: retorno_1.tipo.STRING };
            }
            else if (Dom == retorno_1.tipo.NUMERO) {
                return { valor: (ValorIz.valor + ValorDer.valor), type: retorno_1.tipo.NUMERO };
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.RESTA) {
            if (Dom == retorno_1.tipo.NUMERO) {
                return { valor: (ValorIz.valor - ValorDer.valor), type: retorno_1.tipo.NUMERO };
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.MULTIPLICACION) {
            if (Dom == retorno_1.tipo.NUMERO) {
                return { valor: (ValorIz.valor * ValorDer.valor), type: retorno_1.tipo.NUMERO };
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.DIVISION) {
            if (Dom == retorno_1.tipo.NUMERO) {
                if (ValorDer.valor == 0) {
                    console.log("Error Semantico");
                }
                else {
                    return { valor: (ValorIz.valor / ValorDer.valor), type: retorno_1.tipo.NUMERO };
                }
            }
            else {
                console.log("Error Semantico");
            }
        }
        return { valor: null, type: retorno_1.tipo.NULL };
    }
}
exports.Aritmetica = Aritmetica;
var tipoArit;
(function (tipoArit) {
    tipoArit[tipoArit["SUMA"] = 0] = "SUMA";
    tipoArit[tipoArit["RESTA"] = 1] = "RESTA";
    tipoArit[tipoArit["MULTIPLICACION"] = 2] = "MULTIPLICACION";
    tipoArit[tipoArit["DIVISION"] = 3] = "DIVISION";
})(tipoArit = exports.tipoArit || (exports.tipoArit = {}));
