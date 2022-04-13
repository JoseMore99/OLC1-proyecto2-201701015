"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const retorno_1 = require("../expresion/retorno");
const instruccion_1 = require("./instruccion");
class If extends instruccion_1.instruccion {
    constructor(condicion, contenido, SiNo, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.contenido = contenido;
        this.SiNo = SiNo;
    }
    ejecutar(ambito) {
        const condi = this.condicion.ejecutar(ambito);
        if (condi.type == retorno_1.tipo.BOOLEAN) {
            if (condi.valor) {
                this.contenido.ejecutar(ambito);
            }
            else if (this.SiNo != null) {
                this.SiNo.ejecutar(ambito);
            }
        }
    }
}
exports.If = If;
