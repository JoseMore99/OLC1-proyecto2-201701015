import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";

export class Declarar extends instruccion{
    constructor(private tipo:tipo ,public id:string, private valor:Expresion, line:number, column:number){
        super(line, column)
    }
    public ejecutar(ambito: ambito) {
        if (this.valor!=null){
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
        }else{
            if(this.tipo==tipo.NUMERO){
                ambito.AgregarVal(this.id.toLowerCase(), 0, tipo.NUMERO)
            }
            else if(this.tipo==tipo.STRING){
                ambito.AgregarVal(this.id.toLowerCase(), "", tipo.NUMERO)
            }
            else if(this.tipo==tipo.DECIMAL){
                ambito.AgregarVal(this.id.toLowerCase(), 0, tipo.NUMERO)
            }
            else if(this.tipo==tipo.CHAR){
                ambito.AgregarVal(this.id.toLowerCase(), '', tipo.NUMERO)
            }
            else if(this.tipo==tipo.BOOLEAN){
                ambito.AgregarVal(this.id.toLowerCase(), false, tipo.NUMERO)
            }
        }
        
        
    }
}