"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloque = void 0;
const ambito_1 = require("../simbolo/ambito");
const NodoAst_1 = require("../simbolo/NodoAst");
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
                const valor = iterar.ejecutar(Nuevoamb);
                if (valor != null && valor != undefined) {
                    if (valor.valor == undefined) {
                        return valor;
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('BLOQUE');
        for (const inst of this.instrucciones) {
            nodo.agregarHijoAST(inst.getNodo());
        }
        return nodo;
    }
}
exports.Bloque = Bloque;
