import { ambito } from "../simbolo/ambito";
import NodoAst from "../simbolo/NodoAst";
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
    public getNodo(): NodoAst {
        let nodo = new NodoAst('BLOQUE');
        for (const inst of this.instrucciones) {
            nodo.agregarHijoAST(inst.getNodo())
        }
        return nodo;
    }
}