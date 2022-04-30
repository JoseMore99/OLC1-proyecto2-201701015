"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const retorno_1 = require("../expresion/retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
const simbolo_1 = require("../simbolo/simbolo");
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
        let tipoD = "";
        if (this.tipo == null) {
            nodo.agregarHijo('void');
            tipoD = "void";
        }
        else if (this.tipo == retorno_1.tipo.NUMERO) {
            nodo.agregarHijo('int');
            tipoD = "int";
        }
        else if (this.tipo == retorno_1.tipo.STRING) {
            nodo.agregarHijo('string');
            tipoD = "string";
        }
        else if (this.tipo == retorno_1.tipo.DECIMAL) {
            nodo.agregarHijo('double');
            tipoD = "double";
        }
        else if (this.tipo == retorno_1.tipo.CHAR) {
            nodo.agregarHijo('char');
            tipoD = "char";
        }
        else if (this.tipo == retorno_1.tipo.BOOLEAN) {
            nodo.agregarHijo('boolean');
            tipoD = "boolean";
        }
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        simbolo_1.simbolo.Simbolos.push({ id: this.id, tipo: tipoD, tipoO: "funcion", fila: this.fila, columna: this.columna });
        return nodo;
    }
}
exports.Funcion = Funcion;
