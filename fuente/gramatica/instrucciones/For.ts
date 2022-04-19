import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import { Declarar } from "./declarar";
import { instruccion } from "./instruccion";

export class For extends instruccion{
    constructor(private declaracion: instruccion, private condicion:Expresion,private actualizar:instruccion,
            private contenido: instruccion, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        this.declaracion.ejecutar(ambito)
        let condi = this.condicion.ejecutar(ambito);
        if(condi.type==tipo.BOOLEAN){
            while(condi.valor){
                this.contenido.ejecutar(ambito)
                this.actualizar.ejecutar(ambito)
                condi=this.condicion.ejecutar(ambito);
            }
        }else{
            console.log("Error semantico")
        }

    }
}