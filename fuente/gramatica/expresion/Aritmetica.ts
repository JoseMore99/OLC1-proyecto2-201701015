import { Expresion } from "./expresion";
import { Retorno,tipo } from "./retorno";
import { ambito } from "../simbolo/ambito";
import NodoAst from "../simbolo/NodoAst";

export class Aritmetica extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: tipoArit, fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(ambito:ambito): Retorno {
        const ValorIz = this.izquierda.ejecutar(ambito);
        const ValorDer = this.derecha.ejecutar(ambito);
        const Dom = this.tipoDom(ValorIz.type,ValorDer.type)
        if(this.tipo == tipoArit.SUMA){
            if (Dom == tipo.STRING) {
                return { valor: (ValorIz.valor.toString() + ValorDer.valor.toString()), type: tipo.STRING };
            }else if (Dom == tipo.NUMERO || Dom == tipo.DECIMAL) {
                if(ValorIz.type==tipo.CHAR){
                    return { valor: (ValorIz.valor.charCodeAt(0) + ValorDer.valor), type: tipo.NUMERO };
                 }
                if(ValorDer.type==tipo.CHAR){
                    return { valor: (ValorIz.valor + ValorDer.valor.charCodeAt(0)), type: tipo.NUMERO };
                 }
                if(ValorIz.type==tipo.BOOLEAN){
                    if(ValorIz.type){
                        return { valor: (1 + ValorDer.valor), type: tipo.NUMERO };
                    }else{
                        return { valor: (0 + ValorDer.valor), type: tipo.NUMERO };
                    }
                 }
                if(ValorDer.type==tipo.BOOLEAN){
                    if(ValorIz.type){
                        return { valor: (ValorIz.valor + 1), type: tipo.NUMERO };
                    }else{
                        return { valor: (ValorIz.valor + 0), type: tipo.NUMERO };
                    }    
                }
                return { valor: (ValorIz.valor + ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.RESTA) {
            if (Dom == tipo.NUMERO|| Dom == tipo.DECIMAL) {
                if(ValorIz.type==tipo.CHAR){
                    return { valor: (ValorIz.valor.charCodeAt(0) - ValorDer.valor), type: tipo.NUMERO };
                 }
                if(ValorDer.type==tipo.CHAR){
                    return { valor: (ValorIz.valor - ValorDer.valor.charCodeAt(0)), type: tipo.NUMERO };
                 }
                if(ValorIz.type==tipo.BOOLEAN){
                    if(ValorIz.type){
                        return { valor: (1 - ValorDer.valor), type: tipo.NUMERO };
                    }else{
                        return { valor: (0 - ValorDer.valor), type: tipo.NUMERO };
                    }
                 }
                if(ValorDer.type==tipo.BOOLEAN){
                    if(ValorIz.type){
                        return { valor: (ValorIz.valor - 1), type: tipo.NUMERO };
                    }else{
                        return { valor: (ValorIz.valor - 0), type: tipo.NUMERO };
                    }    
                }
                return { valor: (ValorIz.valor - ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.MULTIPLICACION) {
            if (Dom == tipo.NUMERO|| Dom == tipo.DECIMAL) {
                if(ValorIz.type==tipo.CHAR){
                    return { valor: (ValorIz.valor.charCodeAt(0) * ValorDer.valor), type: tipo.NUMERO };
                 }
                if(ValorDer.type==tipo.CHAR){
                    return { valor: (ValorIz.valor * ValorDer.valor.charCodeAt(0)), type: tipo.NUMERO };
                 }
                return { valor: (ValorIz.valor * ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.DIVISION) {
            if (Dom == tipo.NUMERO || Dom == tipo.DECIMAL) {
                if (ValorDer.valor == 0) {
                    console.log("Error Semantico")
                } 
                else {
                    if(ValorIz.type==tipo.CHAR){
                        return { valor: (ValorIz.valor.charCodeAt(0) / ValorDer.valor), type: tipo.NUMERO };
                     }
                    if(ValorDer.type==tipo.CHAR){
                        return { valor: (ValorIz.valor / ValorDer.valor.charCodeAt(0)), type: tipo.NUMERO };
                     }
                    return { valor: (ValorIz.valor / ValorDer.valor), type: tipo.NUMERO };
                }
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.POTENCIA) {
            if (Dom == tipo.NUMERO || Dom == tipo.DECIMAL) {
                let pote:number=ValorIz.valor;
                if (ValorDer.valor==0){
                    return { valor: 1, type: tipo.NUMERO };
                }
                for (let i = 1; i < ValorDer.valor; i++) {
                    pote*=pote;
                }
                return { valor: (pote), type: tipo.NUMERO };
                
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.MODULO) {
            if (Dom == tipo.NUMERO || Dom == tipo.DECIMAL) {
                return { valor: (ValorIz.valor%ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error Semantico")
            }
        }

        return { valor: null, type: tipo.NULL } ;
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('EXPRESION');
        nodo.agregarHijoAST(this.izquierda.getNodo());
        if (this.tipo == tipoArit.SUMA) {
            nodo.agregarHijo('+');
        } else if (this.tipo == tipoArit.RESTA) {
            nodo.agregarHijo('-');
        } else if (this.tipo == tipoArit.DIVISION) {
            nodo.agregarHijo('*');
        } else if (this.tipo == tipoArit.MULTIPLICACION) {
            nodo.agregarHijo('/');
        } else if (this.tipo == tipoArit.MODULO) {
            nodo.agregarHijo('%');
        } else if (this.tipo == tipoArit.POTENCIA) {
            nodo.agregarHijo('^');
        }
        
        nodo.agregarHijoAST(this.derecha.getNodo());
        return nodo;
    }
    
}
export enum tipoArit {
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    POTENCIA,
    MODULO
}