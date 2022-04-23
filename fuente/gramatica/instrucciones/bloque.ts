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
                const valor= iterar.ejecutar(Nuevoamb);
                if (valor !=null&&valor!=undefined) {
                    if(valor.valor==undefined){
                        return valor
                    }
                    
                }
            } catch (error) {
                console.log(error)
            }
            
        }
    }
}