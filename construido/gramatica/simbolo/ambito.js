"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ambito = void 0;
const simbolo_1 = require("./simbolo");
class ambito {
    constructor(padre) {
        this.padre = padre;
        this.variables = new Map();
    }
    AgregarVal(id, valor, tipo) {
        let aux = this;
        while (aux != null) {
            if (aux.variables.has(id)) {
                const val = aux.variables.get(id);
                if ((val === null || val === void 0 ? void 0 : val.tipo) == tipo) {
                    aux.variables.set(id, new simbolo_1.simbolo(id, valor, tipo));
                }
                else {
                    console.log("Error Semantico en ambito");
                }
            }
            aux = aux.padre;
        }
        this.variables.set(id, new simbolo_1.simbolo(id, valor, tipo));
    }
    RetornarVal(id) {
        let aux = this;
        while (aux != null) {
            if (aux.variables.has(id)) {
                const retorno = aux.variables.get(id);
                return retorno;
            }
            aux = aux.padre;
        }
        return undefined;
    }
}
exports.ambito = ambito;
