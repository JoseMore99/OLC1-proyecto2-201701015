import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import { instruccion } from "./instruccion";

export class Dowhile extends instruccion{
    constructor(private condicion:Expresion, private contenido: instruccion, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        let condi = this.condicion.ejecutar(ambito);
        if(condi.type==tipo.BOOLEAN){
            do{
                const salida = this.contenido.ejecutar(ambito)
                if (salida !=null&&salida!=undefined){
                    if(salida.tipo == "201701015B"){
                        break;
                    }
                    else if(salida.tipo == "201701015C"){
                        continue;
                    }
                }
                condi=this.condicion.ejecutar(ambito);
            }while(condi.valor)
        }else{
            console.log("Error semantico en while")
        }

    }
}