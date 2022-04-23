"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dowhile = void 0;
const retorno_1 = require("../expresion/retorno");
const instruccion_1 = require("./instruccion");
class Dowhile extends instruccion_1.instruccion {
    constructor(condicion, contenido, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.contenido = contenido;
    }
    ejecutar(ambito) {
        let condi = this.condicion.ejecutar(ambito);
        if (condi.type == retorno_1.tipo.BOOLEAN) {
            do {
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
            } while (condi.valor);
        }
        else {
            console.log("Error semantico en while");
        }
    }
}
exports.Dowhile = Dowhile;