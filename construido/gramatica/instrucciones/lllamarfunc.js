"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Llamarfunc = void 0;
const ambito_1 = require("../simbolo/ambito");
const instruccion_1 = require("./instruccion");
class Llamarfunc extends instruccion_1.instruccion {
    constructor(id, parametros, fila, columna) {
        super(fila, columna);
        this.id = id;
        this.parametros = parametros;
    }
    ejecutar(ambit) {
        const actual = ambit.funciones.get(this.id);
        if (actual) {
            if (this.parametros.length == actual.parametros.length) {
                const EntornoG = new ambito_1.ambito(ambit.global());
                for (let i = 0; i < this.parametros.length; i++) {
                    const valor = this.parametros[i].ejecutar(ambit);
                    EntornoG.AgregarVal(actual.parametros[i].id, valor.valor, valor.type);
                }
                actual.contenido.ejecutar(EntornoG);
            }
            else {
                console.log("ERROR SEMANTICO en llamarfuncion");
            }
        }
        else {
            console.log("ERROR SEMANTICO en llamarfuncion");
        }
    }
}
exports.Llamarfunc = Llamarfunc;
