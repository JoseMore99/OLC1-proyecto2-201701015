import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";
import NodoAst from "../simbolo/NodoAst";



export class Print extends instruccion{
    static consola:string="";
    constructor( private valor:Expresion, private salto:boolean, fila:number, columna:number){
        super(fila, columna)
    }
    public ejecutar(ambito: ambito) {
        const aux = this.valor.ejecutar(ambito)
        Print.consola= Print.consola +aux.valor;
        if(this.salto==true){
            Print.consola= Print.consola+"\n";
        }
        console.log(aux.valor)
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('PRINT');
        if(this.salto==true){
            nodo.agregarHijo('println');
        }else{
            nodo.agregarHijo('print');

        }
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.valor.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo(';');
        return nodo;
    }
    
}