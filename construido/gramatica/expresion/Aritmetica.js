"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoArit = exports.Aritmetica = void 0;
const expresion_1 = require("./expresion");
const retorno_1 = require("./retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
class Aritmetica extends expresion_1.Expresion {
    constructor(izquierda, derecha, tipo, fila, columna) {
        super(fila, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.tipo = tipo;
    }
    ejecutar(ambito) {
        const ValorIz = this.izquierda.ejecutar(ambito);
        const ValorDer = this.derecha.ejecutar(ambito);
        const Dom = this.tipoDom(ValorIz.type, ValorDer.type);
        if (this.tipo == tipoArit.SUMA) {
            if (Dom == retorno_1.tipo.STRING) {
                return { valor: (ValorIz.valor.toString() + ValorDer.valor.toString()), type: retorno_1.tipo.STRING };
            }
            else if (Dom == retorno_1.tipo.NUMERO || Dom == retorno_1.tipo.DECIMAL) {
                if (ValorIz.type == retorno_1.tipo.CHAR) {
                    return { valor: (ValorIz.valor.charCodeAt(0) + ValorDer.valor), type: Dom };
                }
                if (ValorDer.type == retorno_1.tipo.CHAR) {
                    return { valor: (ValorIz.valor + ValorDer.valor.charCodeAt(0)), type: Dom };
                }
                if (ValorIz.type == retorno_1.tipo.BOOLEAN) {
                    if (ValorIz.type) {
                        return { valor: (1 + ValorDer.valor), type: Dom };
                    }
                    else {
                        return { valor: (0 + ValorDer.valor), type: Dom };
                    }
                }
                if (ValorDer.type == retorno_1.tipo.BOOLEAN) {
                    if (ValorIz.type) {
                        return { valor: (ValorIz.valor + 1), type: Dom };
                    }
                    else {
                        return { valor: (ValorIz.valor + 0), type: Dom };
                    }
                }
                return { valor: (ValorIz.valor + ValorDer.valor), type: Dom };
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.RESTA) {
            if (Dom == retorno_1.tipo.NUMERO || Dom == retorno_1.tipo.DECIMAL) {
                if (ValorIz.type == retorno_1.tipo.CHAR) {
                    return { valor: (ValorIz.valor.charCodeAt(0) - ValorDer.valor), type: Dom };
                }
                if (ValorDer.type == retorno_1.tipo.CHAR) {
                    return { valor: (ValorIz.valor - ValorDer.valor.charCodeAt(0)), type: Dom };
                }
                if (ValorIz.type == retorno_1.tipo.BOOLEAN) {
                    if (ValorIz.type) {
                        return { valor: (1 - ValorDer.valor), type: Dom };
                    }
                    else {
                        return { valor: (0 - ValorDer.valor), type: Dom };
                    }
                }
                if (ValorDer.type == retorno_1.tipo.BOOLEAN) {
                    if (ValorIz.type) {
                        return { valor: (ValorIz.valor - 1), type: Dom };
                    }
                    else {
                        return { valor: (ValorIz.valor - 0), type: Dom };
                    }
                }
                return { valor: (ValorIz.valor - ValorDer.valor), type: Dom };
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.MULTIPLICACION) {
            if (Dom == retorno_1.tipo.NUMERO || Dom == retorno_1.tipo.DECIMAL) {
                if (ValorIz.type == retorno_1.tipo.CHAR) {
                    return { valor: (ValorIz.valor.charCodeAt(0) * ValorDer.valor), type: Dom };
                }
                if (ValorDer.type == retorno_1.tipo.CHAR) {
                    return { valor: (ValorIz.valor * ValorDer.valor.charCodeAt(0)), type: Dom };
                }
                return { valor: (ValorIz.valor * ValorDer.valor), type: Dom };
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.DIVISION) {
            if (Dom == retorno_1.tipo.NUMERO || Dom == retorno_1.tipo.DECIMAL) {
                if (ValorDer.valor == 0) {
                    console.log("Error Semantico");
                }
                else {
                    if (ValorIz.type == retorno_1.tipo.CHAR) {
                        return { valor: (ValorIz.valor.charCodeAt(0) / ValorDer.valor), type: Dom };
                    }
                    if (ValorDer.type == retorno_1.tipo.CHAR) {
                        return { valor: (ValorIz.valor / ValorDer.valor.charCodeAt(0)), type: Dom };
                    }
                    return { valor: (ValorIz.valor / ValorDer.valor), type: Dom };
                }
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.POTENCIA) {
            if (Dom == retorno_1.tipo.NUMERO || Dom == retorno_1.tipo.DECIMAL) {
                let pote = ValorIz.valor;
                if (ValorDer.valor == 0) {
                    return { valor: 1, type: Dom };
                }
                for (let i = 1; i < ValorDer.valor; i++) {
                    pote *= pote;
                }
                return { valor: (pote), type: Dom };
            }
            else {
                console.log("Error Semantico");
            }
        }
        else if (this.tipo == tipoArit.MODULO) {
            if (Dom == retorno_1.tipo.NUMERO || Dom == retorno_1.tipo.DECIMAL) {
                return { valor: (ValorIz.valor % ValorDer.valor), type: Dom };
            }
            else {
                console.log("Error Semantico");
            }
        }
        return { valor: null, type: retorno_1.tipo.NULL };
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('EXPRESION');
        nodo.agregarHijoAST(this.izquierda.getNodo());
        if (this.tipo == tipoArit.SUMA) {
            nodo.agregarHijo('+');
        }
        else if (this.tipo == tipoArit.RESTA) {
            nodo.agregarHijo('-');
        }
        else if (this.tipo == tipoArit.DIVISION) {
            nodo.agregarHijo('*');
        }
        else if (this.tipo == tipoArit.MULTIPLICACION) {
            nodo.agregarHijo('/');
        }
        else if (this.tipo == tipoArit.MODULO) {
            nodo.agregarHijo('%');
        }
        else if (this.tipo == tipoArit.POTENCIA) {
            nodo.agregarHijo('^');
        }
        nodo.agregarHijoAST(this.derecha.getNodo());
        return nodo;
    }
}
exports.Aritmetica = Aritmetica;
var tipoArit;
(function (tipoArit) {
    tipoArit[tipoArit["SUMA"] = 0] = "SUMA";
    tipoArit[tipoArit["RESTA"] = 1] = "RESTA";
    tipoArit[tipoArit["MULTIPLICACION"] = 2] = "MULTIPLICACION";
    tipoArit[tipoArit["DIVISION"] = 3] = "DIVISION";
    tipoArit[tipoArit["POTENCIA"] = 4] = "POTENCIA";
    tipoArit[tipoArit["MODULO"] = 5] = "MODULO";
})(tipoArit = exports.tipoArit || (exports.tipoArit = {}));
