"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoNat = exports.Nativo = void 0;
//import { type } from "express/lib/response";
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
class Nativo extends expresion_1.Expresion {
    constructor(valor, tipoN, fila, columna) {
        super(fila, columna);
        this.valor = valor;
        this.tipoN = tipoN;
    }
    ejecutar() {
        console.log(this.tipoN);
        if (this.tipoN == tipoNat.NUMERO) {
            return { valor: Number(this.valor), type: retorno_1.tipo.NUMERO };
        }
        else if (this.tipoN == tipoNat.STRING) {
            return { valor: this.valor.toString(), type: retorno_1.tipo.STRING };
        }
        else if (this.tipoN == tipoNat.BOOLEAN) {
            if (this.valor.toString().toLowerCase() == "true") {
                return { valor: true, type: retorno_1.tipo.BOOLEAN };
            }
            return { valor: false, type: retorno_1.tipo.BOOLEAN };
        }
        return { valor: null, type: retorno_1.tipo.NULL };
    }
    ;
}
exports.Nativo = Nativo;
var tipoNat;
(function (tipoNat) {
    tipoNat[tipoNat["NUMERO"] = 0] = "NUMERO";
    tipoNat[tipoNat["STRING"] = 1] = "STRING";
    tipoNat[tipoNat["BOOLEAN"] = 2] = "BOOLEAN";
    tipoNat[tipoNat["DOBLE"] = 3] = "DOBLE";
})(tipoNat = exports.tipoNat || (exports.tipoNat = {}));
