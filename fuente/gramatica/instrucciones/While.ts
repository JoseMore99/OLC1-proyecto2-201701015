import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import NodoAst from "../simbolo/NodoAst";
import { instruccion } from "./instruccion";

export class While extends instruccion{
    constructor(private condicion:Expresion, private contenido: instruccion, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        let condi = this.condicion.ejecutar(ambito);
        if(condi.type==tipo.BOOLEAN){
            while(condi.valor){
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
            }
        }else{
            console.log("Error semantico en while")
        }

    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('WHILE');
        nodo.agregarHijo('while');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
}