import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import NodoAst from "../simbolo/NodoAst";
import { instruccion } from "./instruccion";

export class If extends instruccion{
    constructor(private condicion:Expresion, private contenido: instruccion, private SiNo: instruccion, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        const condi = this.condicion.ejecutar(ambito);
        if(condi.type==tipo.BOOLEAN){
            if(condi.valor){
                
                return this.contenido.ejecutar(ambito)
            }
            else if (this.SiNo!=null) {
                return this.SiNo.ejecutar(ambito)
            }
        }else{
            console.log("Error semantico en if")
        }
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('IF');
        nodo.agregarHijo('if');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
}