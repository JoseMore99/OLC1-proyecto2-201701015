import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import { ambito } from "../simbolo/ambito";
import NodoAst from "../simbolo/NodoAst";
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
                const salida = this.contenido.ejecutar(ambito)
                this.actualizar.ejecutar(ambito)
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
            console.log("Error semantico en for")
        }

    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('FOR');
        nodo.agregarHijo('for');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.declaracion.getNodo());
        nodo.agregarHijo(';');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(';');
        nodo.agregarHijoAST(this.actualizar.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
}