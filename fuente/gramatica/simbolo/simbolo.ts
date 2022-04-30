import { tipo } from "../expresion/retorno";


export class simbolo {
    static Simbolos:Array<any>= new Array<any>() ;
    constructor(public id:string, public valor: any, public tipo:tipo,) {}
}