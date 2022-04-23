import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";

export class Return extends instruccion{
    constructor(private valor:any,fila:number, columna:number){
        super(fila, columna)
    }
    public ejecutar(ambito: ambito) {
        
        return{ tipo:"201701015R",valor:this.valor,fila:this.fila,columna:this.columna}
    }
}