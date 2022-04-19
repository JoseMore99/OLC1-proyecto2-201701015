"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const instruccion_1 = require("./instruccion");
class Funcion extends instruccion_1.instruccion {
    constructor(id, contenido, parametros, fila, columna) {
        super(fila, columna);
        this.id = id;
        this.contenido = contenido;
        this.parametros = parametros;
    }
    ejecutar(ambito) {
    }
}
exports.Funcion = Funcion;
