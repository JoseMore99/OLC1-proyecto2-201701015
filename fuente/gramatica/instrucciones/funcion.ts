
import { ambito } from "../simbolo/ambito"
import { Declarar } from "./declarar"
import { instruccion } from "./instruccion"

 export class Funcion extends instruccion{

    constructor(public id:string, public contenido: instruccion, public parametros:Declarar[],public tipo:any, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        ambito.AgregarFuncion(this.id,this)
        
    }
 }