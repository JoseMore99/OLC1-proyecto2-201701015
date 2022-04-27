"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const retorno_1 = require("../expresion/retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
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
                return this.contenido.ejecutar(ambito);
            }
            else if (this.SiNo != null) {
                return this.SiNo.ejecutar(ambito);
            }
        }
        else {
            console.log("Error semantico en if");
        }
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('IF');
        nodo.agregarHijo('if');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
}
exports.If = If;
