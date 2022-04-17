
import { Expresion } from "../expresion/expresion";
import { ambito } from "../simbolo/ambito";
import { instruccion } from "./instruccion";

export class Incdec extends instruccion {

    constructor(private iden:any,  private tipo: tipoA, fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(ambito:ambito) {
        const identificador=this.iden.id
        const aux = ambito.RetornarVal(identificador)
        if(aux != null) {
            console.log(aux)
            if (this.tipo == tipoA.INCREMENTO){
                ambito.AgregarVal(identificador.toLowerCase(), aux.valor+1, aux.tipo)
            }else if (this.tipo == tipoA.DECREMENTO){
                ambito.AgregarVal(identificador.toLowerCase(), aux.valor-1, aux.tipo)
            }
        }
    }
    
}
export enum tipoA {
    INCREMENTO,
    DECREMENTO
}