

import { exec } from 'child_process';
import { simbolo } from './simbolo/simbolo';
var fs = require('fs');
let cuerpo = '';
let contador = 0;

export  function graficarTabla() {
  
  contador = 1;
  cuerpo = '';
  graphsimbolos()
  let principal = `digraph tabla{ 
    nodo [label=<<TABLE> 
        ${cuerpo}
    </TABLE>>];
    }`;
    fs.writeFile('TablaSimbolos.dot', principal, () => {});
  exec('dot -Tsvg TablaSimbolos.dot -o web/public/TablaSimbolos.svg',(error, stdout, stderr) => {
      if (error) {
        return;
      }
      if (stderr) {
        return;
      }
    }
  );
  return principal
}
function graphsimbolos() {
    cuerpo+= "<TR><TD >Numero</TD><TD>id</TD><TD>tipo</TD><TD>valor</TD><TD>clase</TD><TD>fila</TD><TD>columna</TD></TR>";
    let contador =1;
  for (const sim of simbolo.Simbolos) {
    cuerpo+= `<TR><TD>${contador}</TD><TD>${sim.id}</TD><TD>${sim.tipo}</TD><TD>${sim.valor}</TD><TD>${sim.tipoO}</TD><TD>${sim.fila}</TD><TD>${sim.columna}</TD></TR>`;
    contador++
  }
}