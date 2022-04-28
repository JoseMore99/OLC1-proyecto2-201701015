import { tipo } from "../expresion/retorno";
import { Funcion } from "../instrucciones/funcion";
import { simbolo } from "./simbolo";

export class ambito {
    public variables:Map<string,simbolo>;
    public funciones:Map<string,Funcion>;
    constructor(public padre:ambito|null) {
        this.variables=new Map()
        this.funciones = new Map()
    }
    

    public AgregarVal(id:string, valor:any, tipo:tipo){
        let aux: ambito | null = this
        while(aux!=null){
            if(aux.variables.has(id)){
                const val = aux.variables.get(id)
                if(val?.tipo == tipo) {
                    aux.variables.set(id, new simbolo( id,valor, tipo))
                }else{
                    console.log("Error Semantico en ambito")
                }
            }
            aux = aux.padre
        }
        this.variables.set(id, new simbolo(id,valor, tipo))
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

    public AgregarFuncion(id:string,funcion:Funcion){
        let aux: ambito | null = this
        while(aux!=null){
            if(aux.funciones.has(id)){
                console.log("ERROR SEMANTICO en ambito y funciones")
            }
            aux = aux.padre
        }
        this.funciones.set(id,funcion)
    }
    public RetornarFunc(id:string):Funcion|undefined{
        let aux: ambito | null = this
        while(aux!=null){
            if(aux.funciones.has(id)){
                const retorno:Funcion|undefined = aux.funciones.get(id)
                 return retorno
            }
            aux = aux.padre
        }
        return undefined
    }
    public global():ambito{
            let aux: ambito | null = this;
            while (aux?.padre != null) {
                aux = aux.padre;
            }
            return aux;
        
    }
}