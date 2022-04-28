"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Llamarfunc = void 0;
const ambito_1 = require("../simbolo/ambito");
const NodoAst_1 = require("../simbolo/NodoAst");
const instruccion_1 = require("./instruccion");
class Llamarfunc extends instruccion_1.instruccion {
    constructor(id, parametros, fila, columna) {
        super(fila, columna);
        this.id = id;
        this.parametros = parametros;
    }
    ejecutar(ambit) {
        const actual = ambit.RetornarFunc(this.id);
        if (actual) {
            if (this.parametros.length == actual.parametros.length) {
                const EntornoG = new ambito_1.ambito(ambit.global());
                for (let i = 0; i < this.parametros.length; i++) {
                    const valor = this.parametros[i].ejecutar(ambit);
                    if (valor.type != actual.parametros[i].tipo) {
                        console.log("ERROR SEMANTICO en llamarfuncion tipo");
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
                console.log("ERROR SEMANTICO en llamarfuncion cantidad de parametros");
            }
        }
        else {
            console.log("ERROR SEMANTICO en llamarfuncion no existe");
        }
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('LLAMADA');
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('(');
        for (const para of this.parametros) {
            nodo.agregarHijoAST(para.getNodo());
        }
        nodo.agregarHijo(')');
        return nodo;
    }
}
exports.Llamarfunc = Llamarfunc;
