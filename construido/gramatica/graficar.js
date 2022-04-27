"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graficarArbol = void 0;
let cuerpo = '';
let contador = 0;
function graficarArbol(arbolitos) {
    contador = 1;
    cuerpo = '';
    graphAST('n0', arbolitos);
    let principal = `digraph arbolAST{ 
      n0[label="${arbolitos.valor.replace('"', '\\"')}"];
      ${cuerpo}
    }`;
    return principal;
}
exports.graficarArbol = graficarArbol;
function graphAST(texto, padre) {
    for (let hijo of padre.listaHijos) {
        let nombreHijo = `n${contador}`;
        cuerpo += `${nombreHijo}[label="${hijo.valor.replace('"', '\\"')}"];
      ${texto} -> ${nombreHijo};`;
        contador++;
        graphAST(nombreHijo, hijo);
    }
}
