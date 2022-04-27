import { Expresion } from "../expresion/expresion";
import { ambito } from "../simbolo/ambito"
import {NodoAst} from "../simbolo/NodoAst";
import { instruccion } from "./instruccion"

 export class Llamarfunc extends instruccion{

    constructor(private id:string, private parametros:Expresion[],fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambit: ambito) {
       const actual = ambit.funciones.get(this.id)
       if(actual){
            if (this.parametros.length==actual.parametros.length){
                const EntornoG = new ambito(ambit.global());
                for (let i = 0; i < this.parametros.length; i++) {
                    const valor = this.parametros[i].ejecutar(ambit);
                    if (valor.type!=actual.parametros[i].tipo){
                        console.log("ERROR SEMANTICO en llamarfuncion")
                    }

                    EntornoG.AgregarVal(actual.parametros[i].id,valor.valor,valor.type)
                }
                const salida = actual.contenido.ejecutar(EntornoG);
                if (salida !=null&&salida!=undefined){
                    if(salida.tipo == "201701015R"){
                        if (salida.valor!=null){
                            return;
                        }
                        const variable = salida.valor.ejecutar(EntornoG);
                        return{valor:variable.valor,type:variable.type};
                    }
                }
            }else{
           console.log("ERROR SEMANTICO en llamarfuncion")
       }
       }else{
           console.log("ERROR SEMANTICO en llamarfuncion")
       }
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('LLAMADA');
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('(');
        for (const para of this.parametros) {
            nodo.agregarHijoAST(para.getNodo());
        }
        nodo.agregarHijo(')');
        return nodo;
    }
 }