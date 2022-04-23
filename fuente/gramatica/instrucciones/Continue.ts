import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";

export class Continue extends instruccion{
    constructor(fila:number, columna:number){
        super(fila, columna)
    }
    public ejecutar(ambito: ambito) {
        
        return{ tipo:"201701015C",fila:this.fila,columna:this.columna}
    }
}