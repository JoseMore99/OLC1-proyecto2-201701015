"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declarar = void 0;
const instruccion_1 = require("./instruccion");
class Declarar extends instruccion_1.instruccion {
    constructor(id, valor, line, column) {
        super(line, column);
        this.id = id;
        this.valor = valor;
    }
    ejecutar(ambito) {
        const aux = this.valor.ejecutar(ambito);
        ambito.AgregarVal(this.id, aux.valor, aux.type);
    }
}
exports.Declarar = Declarar;
