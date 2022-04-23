import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import { Case } from "./Case";
import { instruccion } from "./instruccion";


export class Switch extends instruccion{

    constructor(private condicion:Expresion,private listaCase: Case[]|undefined, private defecto: Case , fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        const condi = this.condicion.ejecutar(ambito);
        let casebul = true;
        if (this.listaCase!=undefined){
             for (const cases of this.listaCase) {
                const Condi = cases.condicion.ejecutar(ambito)
                const actual = this.condicion.ejecutar(ambito)
                if (Condi.valor==actual.valor){
                    const salida = cases.ejecutar(ambito)
                    if (salida !=null&&salida!=undefined){
                        if(salida.tipo == "201701015B"){
                            casebul =false;
                            break;
                        }
                    }
                }
            }
        }
        if (this.defecto!= null&&casebul){
            this.defecto.ejecutar(ambito)
        }
       
    }
}