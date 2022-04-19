"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
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
        if (this.listaCase != undefined) {
            for (const cases of this.listaCase) {
                const Condi = cases.condicion.ejecutar(ambito);
                const actual = this.condicion.ejecutar(ambito);
                if (Condi.valor == actual.valor) {
                    cases.ejecutar(ambito);
                }
            }
        }
        if (this.defecto != null) {
            this.defecto.ejecutar(ambito);
        }
    }
}
exports.Switch = Switch;
