"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.For = void 0;
const retorno_1 = require("../expresion/retorno");
const instruccion_1 = require("./instruccion");
class For extends instruccion_1.instruccion {
    constructor(declaracion, condicion, actualizar, contenido, fila, columna) {
        super(fila, columna);
        this.declaracion = declaracion;
        this.condicion = condicion;
        this.actualizar = actualizar;
        this.contenido = contenido;
    }
    ejecutar(ambito) {
        this.declaracion.ejecutar(ambito);
        let condi = this.condicion.ejecutar(ambito);
        if (condi.type == retorno_1.tipo.BOOLEAN) {
            while (condi.valor) {
                this.contenido.ejecutar(ambito);
                this.actualizar.ejecutar(ambito);
                condi = this.condicion.ejecutar(ambito);
            }
        }
        else {
            console.log("Error semantico en for");
        }
    }
}
exports.For = For;
