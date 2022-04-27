"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const retorno_1 = require("../expresion/retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
const instruccion_1 = require("./instruccion");
class Funcion extends instruccion_1.instruccion {
    constructor(id, contenido, parametros, tipo, fila, columna) {
        super(fila, columna);
        this.id = id;
        this.contenido = contenido;
        this.parametros = parametros;
        this.tipo = tipo;
    }
    ejecutar(ambito) {
        ambito.AgregarFuncion(this.id, this);
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('FUNCION');
        nodo.agregarHijo('id');
        nodo.agregarHijo('(');
        for (const par of this.parametros) {
            nodo.agregarHijoAST(par.getNodo());
        }
        nodo.agregarHijo(')');
        nodo.agregarHijo(':');
        if (this.tipo == null) {
            nodo.agregarHijo('void');
        }
        else if (this.tipo == retorno_1.tipo.NUMERO) {
            nodo.agregarHijo('int');
        }
        else if (this.tipo == retorno_1.tipo.STRING) {
            nodo.agregarHijo('string');
        }
        else if (this.tipo == retorno_1.tipo.DECIMAL) {
            nodo.agregarHijo('double');
        }
        else if (this.tipo == retorno_1.tipo.CHAR) {
            nodo.agregarHijo('char');
        }
        else if (this.tipo == retorno_1.tipo.BOOLEAN) {
            nodo.agregarHijo('boolean');
        }
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
}
exports.Funcion = Funcion;
