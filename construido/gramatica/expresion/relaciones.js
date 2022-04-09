"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoRel = exports.Relacional = void 0;
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
class Relacional extends expresion_1.Expresion {
    constructor(izquierda, derecha, tipo, fila, columna) {
        super(fila, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.tipo = tipo;
    }
    ejecutar() {
        const ValorIz = this.izquierda.ejecutar();
        const ValorDer = this.derecha.ejecutar();
        if (this.tipo == TipoRel.IGUALIGUAL) {
            const result = ValorIz.valor == ValorDer.valor;
            return { valor: result, type: retorno_1.tipo.BOOLEAN };
        }
        else if (this.tipo == TipoRel.DIFERENTE) {
            const result = ValorIz.valor != ValorDer.valor;
            return { valor: result, type: retorno_1.tipo.BOOLEAN };
        }
        else if (this.tipo == TipoRel.MAYOR) {
            const result = ValorIz.valor > ValorDer.valor;
            return { valor: result, type: retorno_1.tipo.BOOLEAN };
        }
        else if (this.tipo == TipoRel.MAYOR_IGUAL) {
            const result = ValorIz.valor >= ValorDer.valor;
            return { valor: result, type: retorno_1.tipo.BOOLEAN };
        }
        else if (this.tipo == TipoRel.MENOR) {
            const result = ValorIz.valor < ValorDer.valor;
            return { valor: result, type: retorno_1.tipo.BOOLEAN };
        }
        else if (this.tipo == TipoRel.MENOR_IGUAL) {
            const result = ValorIz.valor <= ValorDer.valor;
            return { valor: result, type: retorno_1.tipo.BOOLEAN };
        }
        return { valor: null, type: retorno_1.tipo.NULL };
    }
}
exports.Relacional = Relacional;
var TipoRel;
(function (TipoRel) {
    TipoRel[TipoRel["AND"] = 0] = "AND";
    TipoRel[TipoRel["OR"] = 1] = "OR";
    TipoRel[TipoRel["IGUALIGUAL"] = 2] = "IGUALIGUAL";
    TipoRel[TipoRel["DIFERENTE"] = 3] = "DIFERENTE";
    TipoRel[TipoRel["MAYOR"] = 4] = "MAYOR";
    TipoRel[TipoRel["MAYOR_IGUAL"] = 5] = "MAYOR_IGUAL";
    TipoRel[TipoRel["MENOR"] = 6] = "MENOR";
    TipoRel[TipoRel["MENOR_IGUAL"] = 7] = "MENOR_IGUAL";
    TipoRel[TipoRel["NOT"] = 8] = "NOT";
})(TipoRel = exports.TipoRel || (exports.TipoRel = {}));
