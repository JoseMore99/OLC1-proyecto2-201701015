"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Case = void 0;
const instruccion_1 = require("./instruccion");
class Case extends instruccion_1.instruccion {
    constructor(condicion, contenido, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.contenido = contenido;
    }
    ejecutar(ambito) {
        return this.contenido.ejecutar(ambito);
    }
}
exports.Case = Case;
