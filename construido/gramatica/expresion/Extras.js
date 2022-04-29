"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoFunc = exports.Extras = void 0;
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
class Extras extends expresion_1.Expresion {
    constructor(valor, tipo, fila, columna) {
        super(fila, columna);
        this.valor = valor;
        this.tipo = tipo;
    }
    ejecutar(ambito) {
        const Valor = this.valor.ejecutar(ambito);
        if (this.tipo == TipoFunc.LOWER) {
            return { valor: Valor.valor.toString().toLowerCase(), type: retorno_1.tipo.STRING };
        }
        else if (this.tipo == TipoFunc.UPPER) {
            return { valor: Valor.valor.toString().toUpperCase(), type: retorno_1.tipo.STRING };
        }
        else if (this.tipo == TipoFunc.ROUND) {
            return { valor: Math.round(Number(Valor.valor)), type: retorno_1.tipo.DECIMAL };
        }
        else if (this.tipo == TipoFunc.TOSTRING) {
            return { valor: Valor.valor.toString(), type: retorno_1.tipo.STRING };
        }
        else if (this.tipo == TipoFunc.TYPEOF) {
            return { valor: typeof Valor.valor, type: retorno_1.tipo.STRING };
        }
        else if (this.tipo == TipoFunc.LEN) {
            return { valor: Valor.valor.toString().length, type: retorno_1.tipo.STRING };
        }
        return { valor: null, type: retorno_1.tipo.NULL };
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('RELACION');
        nodo.agregarHijoAST(this.valor.getNodo());
        return nodo;
    }
}
exports.Extras = Extras;
var TipoFunc;
(function (TipoFunc) {
    TipoFunc[TipoFunc["LOWER"] = 0] = "LOWER";
    TipoFunc[TipoFunc["UPPER"] = 1] = "UPPER";
    TipoFunc[TipoFunc["ROUND"] = 2] = "ROUND";
    TipoFunc[TipoFunc["TYPEOF"] = 3] = "TYPEOF";
    TipoFunc[TipoFunc["TOSTRING"] = 4] = "TOSTRING";
    TipoFunc[TipoFunc["LEN"] = 5] = "LEN";
})(TipoFunc = exports.TipoFunc || (exports.TipoFunc = {}));
