"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloque = void 0;
const ambito_1 = require("../simbolo/ambito");
const instruccion_1 = require("./instruccion");
class Bloque extends instruccion_1.instruccion {
    constructor(instrucciones, fila, columna) {
        super(fila, columna);
        this.instrucciones = instrucciones;
    }
    ejecutar(padre) {
        const Nuevoamb = new ambito_1.ambito(padre);
        for (const iterar of this.instrucciones) {
            try {
                iterar.ejecutar(Nuevoamb);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
exports.Bloque = Bloque;
