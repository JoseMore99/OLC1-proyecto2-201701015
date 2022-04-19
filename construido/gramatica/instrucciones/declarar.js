"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declarar = void 0;
const instruccion_1 = require("./instruccion");
const retorno_1 = require("../expresion/retorno");
class Declarar extends instruccion_1.instruccion {
    constructor(tipo, id, valor, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
    }
    ejecutar(ambito) {
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
}
exports.Declarar = Declarar;
