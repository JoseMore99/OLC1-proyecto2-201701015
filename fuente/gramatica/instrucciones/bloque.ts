import { ambito } from "../simbolo/ambito";
import { instruccion } from "./instruccion";

export class Bloque extends instruccion{
    constructor(private instrucciones: instruccion[], fila:number,columna:number){
        super(fila,columna);
    }
    public ejecutar(padre: ambito) {
        const Nuevoamb= new ambito(padre);
        for (const iterar of this.instrucciones) {
            try {
                iterar.ejecutar(Nuevoamb);
            } catch (error) {
                console.log(error)
            }
            
        }
    }
}