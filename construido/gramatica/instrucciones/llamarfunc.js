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
                    if (valor.type != actual.parametros[i].tipo) {
                        console.log("ERROR SEMANTICO en llamarfuncion");
                    }
                    EntornoG.AgregarVal(actual.parametros[i].id, valor.valor, valor.type);
                }
                const salida = actual.contenido.ejecutar(EntornoG);
                if (salida != null && salida != undefined) {
                    if (salida.tipo == "201701015R") {
                        if (salida.valor != null) {
                            return;
                        }
                        const variable = salida.valor.ejecutar(EntornoG);
                        return { valor: variable.valor, type: variable.type };
                    }
                }
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
