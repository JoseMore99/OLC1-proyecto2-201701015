%{
 const {Aritmetica,tipoArit} = require('./expresion/Aritmetica')
const {Relacional,TipoRel} = require('./expresion/relaciones')
const {Variable} = require('./expresion/variable')
const {Nativo,tipoNat} = require('./expresion/nativo')
 const {Declarar} = require('./instrucciones/declarar')
    const {Print} = require('./instrucciones/print')
    const {Bloque} = require('./instrucciones/bloque')
%}

%lex

%options case-sensitive

%%

\s+                 //espacios en blanco
/*"//".*			
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]*/	

"+"                 return 'mas';
"-"                 return 'menos';
"/"                 return 'divid';
"*"                 return 'por';
"("                 return 'pariz';
")"                 return 'parder';
"{"                 return 'llaveiz';
"}"                 return 'llaveder';
','                 return 'coma'
";"                 return 'puntycom';
"print"             return 'print';
"if"                return 'resif';
"else"              return 'reselse';
"while"             return 'reswhile';
"return"            return 'resreturn';
"break"             return 'resbreak';
"=="                return 'igualigual';
"!="                return 'noigual';
"="                 return 'igual';
">="                return 'mayorigual';                     
">"                 return 'mayor';
"<="                return 'menorigual';
"<"                 return 'menor';


[0-9]+\b                return 'numero';
[0-9]+("."[0-9]+)?\b    return 'decimal';
([a-zA-Z])[a-zA-Z0-9_]*	return 'id';
\'[^\']\'               return 'caracter';
("true"|"false")\b      return 'bool';
\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'cadena'; }

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

INSTRUCCION: IMPRIMIR            {$$=$1;}
        | DECLARAR               {$$=$1;}
        | INSTIF                 {$$=$1}               
;

INSTIF: resifpariz EXPRESION parder llaveiz BLOQUEINST llaveder INSTELSE  {$$=$1}

INSTELSE: reselse llaveiz BLOQUEINST llaveder
        | reselse INSTIF
        |

DECLARAR: id igual EXPRESION puntycom {$$= new Declarar($1,$3,@1.first_line,@1.first_column);}
;
IMPRIMIR: print pariz EXPRESION parder puntycom   {$$=new Print($3,@1.first_line,@1.first_column);}
;

BLOQUEINST:INSTRUCCIONES        {$$=new Bloque($1,@1.first_line,@1.first_column)}

EXPRESION : menos EXPRESION %prec Umenos      {$$= new Aritmetica($2,new Nativo("-1",tipoNat.NUMERO, @1.first_line, @1.first_column),tipoArit.MULTIPLICACION, @1.first_line, @1.first_column)}
        | EXPRESION mas EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.SUMA, @1.first_line, @1.first_column)} 
        | EXPRESION menos EXPRESION           {$$= new Aritmetica($1,$3,tipoArit.RESTA, @1.first_line, @1.first_column)}  
        | EXPRESION divid EXPRESION           {$$= new Aritmetica($1,$3,tipoArit.DIVISION, @1.first_line, @1.first_column)} 
        | EXPRESION por EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.MULTIPLICACION, @1.first_line, @1.first_column)} 
        | pariz EXPRESION parder              {$$ = $2;}
        | NATIVO                              {$$ = $1;}
        | id                                  {$$= new Variable($1,@1.first_line, @1.first_column);}
;

NATIVO :  numero        {$$=new Nativo($1,tipoNat.NUMERO, @1.first_line, @1.first_column)}
        | decimal       {$$=new Nativo($1,tipoNat.DOBLE, @1.first_line, @1.first_column)}
        | cadena        {$$=new Nativo($1,tipoNat.STRING, @1.first_line, @1.first_column)}
        | bool          {$$=new Nativo($1,tipoNat.BOOLEAN, @1.first_line, @1.first_column)}
;