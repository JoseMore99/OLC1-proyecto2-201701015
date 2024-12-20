"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.For = void 0;
const retorno_1 = require("../expresion/retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
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
                const salida = this.contenido.ejecutar(ambito);
                this.actualizar.ejecutar(ambito);
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
            console.log("Error semantico en for");
        }
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('FOR');
        nodo.agregarHijo('for');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.declaracion.getNodo());
        nodo.agregarHijo(';');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(';');
        nodo.agregarHijoAST(this.actualizar.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
}
exports.For = For;
