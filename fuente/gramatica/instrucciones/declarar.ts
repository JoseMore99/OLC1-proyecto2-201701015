import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";

export class Declarar extends instruccion{
    constructor(private tipo:tipo ,private id:string, private valor:Expresion, line:number, column:number){
        super(line, column)
    }
    public ejecutar(ambito: ambito) {
        const aux = this.valor.ejecutar(ambito)
        //verificar tipos 
        if (this.tipo==tipo.NULL){
            ambito.AgregarVal(this.id.toLowerCase(), aux.valor, aux.type)
        }else if (this.tipo==aux.type){
            ambito.AgregarVal(this.id.toLowerCase(), aux.valor, aux.type)
        }
        else{
            console.log("ERROR SEMANTICO en declarar")
        }
        
    }
}