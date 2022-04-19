import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import { Case } from "./Case";
import { instruccion } from "./instruccion";


export class Switch extends instruccion{

    constructor(private condicion:Expresion,private listaCase: Case[]|undefined, private defecto: Case |undefined       , fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        const condi = this.condicion.ejecutar(ambito);
        if (this.listaCase!=undefined){
             for (const cases of this.listaCase) {
                const Condi = cases.condicion.ejecutar(ambito)
                const actual = this.condicion.ejecutar(ambito)
                if (Condi.valor==actual.valor){
                    cases.ejecutar(ambito)
                }
            }
        }
        if (this.defecto!=  undefined){
            this.defecto.ejecutar(ambito)
        }
       
    }
}