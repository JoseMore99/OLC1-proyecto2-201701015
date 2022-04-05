%{
 const {Aritmetica,tipoArit} = require('./expresion/aritmetica')
    const {Relacional,TipoRel} = require('./expresion/relaciones')
    const {Nativo,TipoNat} = require('./expresion/nativo')
%}

%lex

%options case-sensitive

%%

\s+                 //espacios en blanco
"//".*			
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]	

"+"                 return 'mas';
"-"                 return 'menos';
"/"                 return 'divid';
"*"                 return 'por';
"("                 return 'pariz';
")"                 return 'parder';
','                 return 'coma'
";"                 return 'puntycom';
"print"             return 'print';



[0-9]+("."[0-9]+)?\b    return 'decimal';
[0-9]+\b                return 'numero';
([a-zA-Z])[a-zA-Z0-9_]*	return 'id';
\'[^\']\'               return 'caracter';
("true"|"false")\b      return 'bool';
\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'CADENA'; }

<<EOF>>             return 'EOF';
.                   {console.log(yylloc.first_line, yylloc.first_columm, 'Lexico', yytext)}
/lex

%left 'mas', 'menos'
%left 'divid', 'por'
%left Umenos

%start INI

%%

INI: INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES: INSTRUCCIONES INSTRUCCION     {if($2!=false)$1.push($2);$$=$1;}
            |INSTRUCCION                     {$$=($1!=false) ?[$1]:[];}
;

INSTRUCCION: ARITMETICA                          {$$=$1;} 
;

//IMPRIMIR: print pariz EXPRESION parder puntycom   {$$=new print.default($3,@1.first_line,@1.first_column);}
//;

ARITMETICA : menos ARITMETICA %prec Umenos      {$$ = 0 - $2} 
        | ARITMETICA mas ARITMETICA             {$$ = $1 + $3}
        | ARITMETICA menos ARITMETICA           {$$ = $1 - $3}  
        | ARITMETICA divid ARITMETICA           {$$ = $1 / $3}
        | ARITMETICA por ARITMETICA             {$$ = $1 * $3}
        | numero                                {$$ = Number($1)}
;