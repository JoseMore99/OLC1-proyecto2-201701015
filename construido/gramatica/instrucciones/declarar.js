"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declarar = void 0;
const instruccion_1 = require("./instruccion");
const retorno_1 = require("../expresion/retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
class Declarar extends instruccion_1.instruccion {
    constructor(tipo, id, valor, fila, columna) {
        super(fila, columna);
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
    }
    ejecutar(ambito) {
        if (this.valor != null) {
            const aux = this.valor.ejecutar(ambito);
            //verificar tipos 
            if (this.tipo == retorno_1.tipo.NULL) {
                ambito.AgregarVal(this.id.toLowerCase(), aux.valor, aux.type);
            }
            else if (this.tipo == aux.type) {
                ambito.AgregarVal(this.id.toLowerCase(), aux.valor, aux.type);
            }
            else {
                console.log("ERROR SEMANTICO en declarar");
            }
        }
        else {
            if (this.tipo == retorno_1.tipo.NUMERO) {
                ambito.AgregarVal(this.id.toLowerCase(), 0, retorno_1.tipo.NUMERO);
            }
            else if (this.tipo == retorno_1.tipo.STRING) {
                ambito.AgregarVal(this.id.toLowerCase(), "", retorno_1.tipo.NUMERO);
            }
            else if (this.tipo == retorno_1.tipo.DECIMAL) {
                ambito.AgregarVal(this.id.toLowerCase(), 0, retorno_1.tipo.NUMERO);
            }
            else if (this.tipo == retorno_1.tipo.CHAR) {
                ambito.AgregarVal(this.id.toLowerCase(), '', retorno_1.tipo.NUMERO);
            }
            else if (this.tipo == retorno_1.tipo.BOOLEAN) {
                ambito.AgregarVal(this.id.toLowerCase(), false, retorno_1.tipo.NUMERO);
            }
        }
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('DECLARACION');
        if (this.tipo == retorno_1.tipo.NUMERO) {
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
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('=');
        if (this.valor != null) {
            nodo.agregarHijoAST(this.valor.getNodo());
        }
        nodo.agregarHijo(';');
        return nodo;
    }
}
exports.Declarar = Declarar;
