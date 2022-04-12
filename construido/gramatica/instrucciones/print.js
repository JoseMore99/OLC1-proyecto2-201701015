"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const instruccion_1 = require("./instruccion");
class Print extends instruccion_1.instruccion {
    constructor(valor, line, column) {
        super(line, column);
        this.valor = valor;
    }
    ejecutar(ambito) {
        const aux = this.valor.ejecutar(ambito);
        console.log(aux.valor);
    }
}
exports.Print = Print;
