"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const instruccion_1 = require("./instruccion");
class Print extends instruccion_1.instruccion {
    constructor(valor, fila, columna) {
        super(fila, columna);
        this.valor = valor;
    }
    ejecutar(ambito) {
        const aux = this.valor.ejecutar(ambito);
        console.log(aux.valor);
    }
}
exports.Print = Print;
