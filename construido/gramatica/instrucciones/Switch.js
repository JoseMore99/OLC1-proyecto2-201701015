"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const NodoAst_1 = require("../simbolo/NodoAst");
const instruccion_1 = require("./instruccion");
class Switch extends instruccion_1.instruccion {
    constructor(condicion, listaCase, defecto, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.listaCase = listaCase;
        this.defecto = defecto;
    }
    ejecutar(ambito) {
        const condi = this.condicion.ejecutar(ambito);
        let casebul = true;
        if (this.listaCase != undefined) {
            for (const cases of this.listaCase) {
                const Condi = cases.condicion.ejecutar(ambito);
                const actual = this.condicion.ejecutar(ambito);
                if (Condi.valor == actual.valor) {
                    const salida = cases.ejecutar(ambito);
                    if (salida != null && salida != undefined) {
                        if (salida.tipo == "201701015B") {
                            casebul = false;
                            break;
                        }
                    }
                }
            }
        }
        if (this.defecto != null && casebul) {
            this.defecto.ejecutar(ambito);
        }
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('SWITCH');
        nodo.agregarHijo('switch');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        if (this.listaCase != undefined) {
            for (const caso of this.listaCase) {
                nodo.agregarHijoAST(caso.getNodo());
            }
        }
        nodo.agregarHijo('}');
        return nodo;
    }
}
exports.Switch = Switch;
