import { Expresion } from "./expresion";
import { Retorno, tipo } from "./retorno";
import { ambito } from "../simbolo/ambito";
import {NodoAst} from "../simbolo/NodoAst";

export class Relacional extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: TipoRel, fila: number, columna: number) {
        super(fila, columna);
    }

    public ejecutar(ambito:ambito): Retorno {
        const ValorIz = this.izquierda.ejecutar(ambito);
        const ValorDer = this.derecha.ejecutar(ambito);
        if (this.tipo == TipoRel.IGUALIGUAL) {
            const result = ValorIz.valor == ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.DIFERENTE) {
            const result = ValorIz.valor != ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MAYOR) {
            const result = ValorIz.valor > ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MAYOR_IGUAL) {
            const result = ValorIz.valor >= ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MENOR) {
            const result = ValorIz.valor < ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MENOR_IGUAL) {
            const result = ValorIz.valor <= ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        }
         else if (this.tipo == TipoRel.AND) {
            const result = ValorIz.valor && ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        }
         else if (this.tipo == TipoRel.OR) {
            const result = ValorIz.valor || ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        }
         else if (this.tipo == TipoRel.NOT) {
            const result = !ValorDer.valor 
            return { valor: result, type: tipo.BOOLEAN }
        }
        return { valor: null, type: tipo.NULL }
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('RELACION');
        nodo.agregarHijoAST(this.izquierda.getNodo());
        if (this.tipo == TipoRel.IGUALIGUAL) {
            nodo.agregarHijo('==');
        } else if (this.tipo == TipoRel.DIFERENTE) {
            nodo.agregarHijo('!=');
        } else if (this.tipo == TipoRel.MAYOR) {
            nodo.agregarHijo('>');
        } else if (this.tipo == TipoRel.MAYOR_IGUAL) {
            nodo.agregarHijo('>=');
        } else if (this.tipo == TipoRel.MENOR) {
            nodo.agregarHijo('<');
        } else if (this.tipo == TipoRel.MENOR_IGUAL) {
            nodo.agregarHijo('<=');
        }
         else if (this.tipo == TipoRel.AND) {
            nodo.agregarHijo('&&');
        }
         else if (this.tipo == TipoRel.OR) {
            nodo.agregarHijo('||');
        }
         else if (this.tipo == TipoRel.NOT) {
            nodo.agregarHijo('!');
        }
        nodo.agregarHijoAST(this.derecha.getNodo());
        return nodo;
    }
}

export enum TipoRel {
    AND,
    OR,
    IGUALIGUAL,
    DIFERENTE,
    MAYOR,
    MAYOR_IGUAL,
    MENOR,
    MENOR_IGUAL,
    NOT
}