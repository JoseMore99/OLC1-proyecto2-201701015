"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const instruccion_1 = require("./instruccion");
class Print extends instruccion_1.instruccion {
    constructor(valor, salto, fila, columna) {
        super(fila, columna);
        this.valor = valor;
        this.salto = salto;
    }
    ejecutar(ambito) {
        const aux = this.valor.ejecutar(ambito);
        Print.consola = Print.consola + aux.valor;
        if (this.salto == true) {
            Print.consola = Print.consola + "\n";
        }
        console.log(aux.valor);
    }
}
exports.Print = Print;
Print.consola = "";
