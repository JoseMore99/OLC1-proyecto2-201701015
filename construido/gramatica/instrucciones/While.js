"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
const retorno_1 = require("../expresion/retorno");
const instruccion_1 = require("./instruccion");
class While extends instruccion_1.instruccion {
    constructor(condicion, contenido, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.contenido = contenido;
    }
    ejecutar(ambito) {
        let condi = this.condicion.ejecutar(ambito);
        if (condi.type == retorno_1.tipo.BOOLEAN) {
            while (condi.valor) {
                const salida = this.contenido.ejecutar(ambito);
                if (salida != null && salida != undefined) {
                    if (salida.tipo == "201701015B") {
                        break;
                    }
                    else if (salida.tipo == "201701015C") {
                        continue;
                    }
                }
                condi = this.condicion.ejecutar(ambito);
            }
        }
        else {
            console.log("Error semantico en while");
        }
    }
}
exports.While = While;
