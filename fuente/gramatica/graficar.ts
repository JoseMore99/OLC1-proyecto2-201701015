
import {NodoAst} from './simbolo/NodoAst';
let cuerpo = '';
let contador = 0;

export  function graficarArbol(arbolitos: NodoAst) {
  
  contador = 1;
  cuerpo = '';
  graphAST('n0', arbolitos);
  let principal = `digraph arbolAST{ 
      n0[label="${arbolitos.valor.replace('"', '\\"')}"];
      ${cuerpo}
    }`;
  return principal
}
function graphAST(texto: string, padre: NodoAst) {
  for (let hijo of padre.listaHijos) {
    let nombreHijo = `n${contador}`;
    cuerpo += `${nombreHijo}[label="${hijo.valor.replace('"', '\\"')}"];
      ${texto} -> ${nombreHijo};`;
    contador++;
    graphAST(nombreHijo, hijo);
  }
}