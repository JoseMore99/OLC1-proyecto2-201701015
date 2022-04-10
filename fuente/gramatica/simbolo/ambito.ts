import { tipo } from "../expresion/retorno";
import { simbolo } from "./simbolo";

export class ambito {
    public variables:Map<string,simbolo>;
    constructor(public padre:ambito|null) {
        this.variables=new Map()
    }

    public AgregarVal(id:string, value:any, type:tipo){
        let aux: ambito | null = this

        while(aux!=null){
            if(aux.variables.has(id)){
                const val = aux.variables.get(id)
                if(val?.tipo == type) {
                    aux.variables.set(id, new simbolo(value, id, type))
                }else{
                    console.log("Error Semantico")
                }
            }
            aux = aux.padre
        }
        this.variables.set(id, new simbolo(value, id, type))
    }
    public RetornarVal(id:string):simbolo|undefined{
        let aux: ambito | null = this
        while(aux!=null){
            if(aux.variables.has(id)){
                const retorno:simbolo|undefined = aux.variables.get(id)
                 return retorno
            }
            aux = aux.padre
        }
        
        return undefined
    }
}