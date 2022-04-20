import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import { instruccion } from "./instruccion";

export class Dowhile extends instruccion{
    constructor(private condicion:Expresion, private contenido: instruccion, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        let condi = this.condicion.ejecutar(ambito);
        if(condi.type==tipo.BOOLEAN){
            do{
                this.contenido.ejecutar(ambito)
                condi=this.condicion.ejecutar(ambito);
            }while(condi.valor)
        }else{
            console.log("Error semantico en while")
        }

    }
}