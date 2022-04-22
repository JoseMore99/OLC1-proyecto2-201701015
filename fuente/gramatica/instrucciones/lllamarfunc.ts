import { Expresion } from "../expresion/expresion";
import { ambito } from "../simbolo/ambito"
import { instruccion } from "./instruccion"

 export class Llamarfunc extends instruccion{

    constructor(private id:string, private parametros:Expresion[],fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambit: ambito) {
       const actual = ambit.funciones.get(this.id)
       if(actual){
            if (this.parametros.length==actual.parametros.length){
                const EntornoG = new ambito(ambit.global());
                for (let i = 0; i < this.parametros.length; i++) {
                    //VERIFICAR TIPOS!!
                    const valor = this.parametros[i].ejecutar(ambit);
                    EntornoG.AgregarVal(actual.parametros[i].id,valor.valor,valor.type)
                }
                actual.contenido.ejecutar(EntornoG);
            }else{
           console.log("ERROR SEMANTICO en llamarfuncion")
       }
       }else{
           console.log("ERROR SEMANTICO en llamarfuncion")
       }
    }
 }