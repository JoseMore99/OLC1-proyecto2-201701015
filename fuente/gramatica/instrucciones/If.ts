import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import { instruccion } from "./instruccion";

export class If extends instruccion{
    constructor(private condicion:Expresion, private contenido: instruccion, private SiNo: instruccion, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        const condi = this.condicion.ejecutar(ambito);
        if(condi.type==tipo.BOOLEAN){
            if(condi.valor){
                this.contenido.ejecutar(ambito)
            }
            else if (this.SiNo!=null) {
                this.SiNo.ejecutar(ambito)
            }else{
                console.log("Error semantico")
            }
        }
    }
}