%{
 const {Aritmetica,tipoArit} = require('./expresion/Aritmetica')
const {Relacional,TipoRel} = require('./expresion/relaciones')
const {tipo} = require('./expresion/retorno')
const {Incdec,tipoA} = require('./instrucciones/incdec')
const {Variable} = require('./expresion/variable')
const {Nativo,tipoNat} = require('./expresion/nativo')
 const {Declarar} = require('./instrucciones/declarar')
    const {Print} = require('./instrucciones/print')
    const {Bloque} = require('./instrucciones/bloque')
    const {If} = require('./instrucciones/If')
    const {While} = require('./instrucciones/While')
    const {Dowhile} = require('./instrucciones/Dowhile')
    const {Case} = require('./instrucciones/Case')
    const {Switch} = require('./instrucciones/Switch')
    const {For} = require('./instrucciones/For')
    const {Funcion} = require('./instrucciones/funcion')
    const {Llamarfunc} = require('./instrucciones/llamarfunc')
    const {Break} = require('./instrucciones/Break')
    const {Continue} = require('./instrucciones/Continue')
    const {Return} = require('./instrucciones/Return')
%}

%lex

%options case-insensitive

%%

\s+                 //espacios en blanco
"//".*		//comentario simple	
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]	//comentario multiple

"+"                 return 'mas';
"-"                 return 'menos';
"/"                 return 'divid';
"*"                 return 'por';
"^"                 return 'pot';
"%"                 return 'mod';
"("                 return 'pariz';
")"                 return 'parder';
"{"                 return 'llaveiz';
"}"                 return 'llaveder';
','                 return 'coma';
";"                 return 'puntycom';
":"                 return 'dospunt';
"++"                return 'masmas';
"--"                return 'menosmenos';
"print"             return 'print';
"println"           return 'println';
"if"                return 'resif';
"else"              return 'reselse';
"while"             return 'reswhile';
"do"                return 'resdo';
"for"               return 'resfor';
"int"               return 'resint';
"double"            return 'resdouble';
"string"            return 'resstring';
"boolean"           return 'resbool';
"char"              return 'reschar';
"switch"            return 'reswitch';
"case"              return 'rescase';
"default"           return 'resdefaul';
"break"             return 'resbreak';
"return"            return 'resreturn';
"continue"          return 'rescontinue';
"void"             return 'resvoid';
"run"              return 'resrun';
"=="                return 'igualigual';
"!="                return 'noigual';
"="                 return 'igual';
">="                return 'mayorigual';                     
">"                 return 'mayor';
"<="                return 'menorigual';
"<"                 return 'menor';
"||"                 return 'or';
"&&"                return 'and';
"!"                 return 'not';

("true"|"false")\b      return 'bool';
[0-9]+[.][0-9]+\b    return 'decimal';
[0-9]+\b                return 'numero';
([a-zA-Z])[a-zA-Z0-9_]*	return 'id';
\'[^\']\'               return 'caracter';
\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'cadena'; }

<<EOF>>             return 'EOF';
.                   {console.log(yylloc.first_line, yylloc.first_columm, 'Lexico', yytext)}
/lex

%left 'or'
%left 'and'
%left 'not'
%left 'noigual' 'igualigual'
%left 'menorigual' 'mayorigual' 'mayor' 'menor'
%left 'mas', 'menos','masmas','menosmenos'
%left 'divid', 'por','mod'
%left 'pot'
%left Umenos

%start INI

%%

INI: INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES: INSTRUCCIONES INSTRUCCION     {if($2!=false)$1.push($2);$$=$1;}
            |INSTRUCCION                     {$$=($1!=false) ?[$1]:[];}
;

INSTRUCCION: IMPRIMIR            {$$=$1;}
        | DECLARAR  puntycom     {$$=$1;}
        | INSTIF                 {$$=$1;}   
        | INSTWHILE              {$$=$1;}
        | INCDEC puntycom        {$$=$1;}
        | INSTSWITCH             {$$=$1;}
        | INSTFOR                {$$=$1;}
        | INSTDOWHILE            {$$=$1;}
        | INSTFUNC               {$$=$1;}
        | INSTBREAK              {$$=$1;}
        | INSTCONTINUE           {$$=$1;}
        | INSTRETURN             {$$=$1;}
        | LLAMARFUNC  puntycom   {$$=$1;}
;

INSTBREAK: resbreak puntycom {$$=new Break(@1.first_line,@1.first_column);}
;
INSTCONTINUE: rescontinue puntycom {$$=new Continue(@1.first_line,@1.first_column);}
;
INSTRETURN: resreturn puntycom {$$=new Return(null, @1.first_line,@1.first_column);}
        |   resreturn EXPRESION puntycom {$$=new Return($2, @1.first_line,@1.first_column);}
;

INSTIF: resif pariz EXPRESION parder llaveiz BLOQUEINST llaveder INSTELSE  {$$=new If($3,$6,$8,@1.first_line,@1.first_column);}
;

INSTWHILE: reswhile pariz EXPRESION parder llaveiz BLOQUEINST llaveder  {$$=new While($3,$6,@1.first_line,@1.first_column);}
;

INSTDOWHILE: resdo llaveiz BLOQUEINST llaveder reswhile pariz EXPRESION parder puntycom {$$=new Dowhile($7,$3,@1.first_line,@1.first_column);}
;

INSTFOR: resfor pariz DECLARAR puntycom EXPRESION puntycom DECLARAR parder llaveiz BLOQUEINST llaveder {$$=new For($3,$5,$7,$10,@1.first_line,@1.first_column);}
       | resfor pariz DECLARAR puntycom EXPRESION puntycom INCDEC parder llaveiz BLOQUEINST llaveder {$$=new For($3,$5,$7,$10,@1.first_line,@1.first_column);}
;

INSTELSE: reselse llaveiz BLOQUEINST llaveder {$$=$3}
        | reselse INSTIF {$$=$2}
        | {$$= null}
;

INSTSWITCH: reswitch pariz EXPRESION parder llaveiz LISTACASE DEFAULT llaveder {$$= new Switch($3,$6,$7,@1.first_line,@1.first_column);}
          | reswitch pariz EXPRESION parder llaveiz LISTACASE llaveder {$$= new Switch($3,$6,undefined,@1.first_line,@1.first_column);}
          | reswitch pariz EXPRESION parder llaveiz DEFAULT llaveder {$$= new Switch($3,undefined,$7,@1.first_line,@1.first_column);}
;

LISTACASE: LISTACASE INSTCASE   {if($2!=false)$1.push($2);$$=$1;}
        |  INSTCASE             {$$=($1!=false) ?[$1]:[];}
        ;

INSTCASE: rescase EXPRESION dospunt BLOQUEINST {$$= new Case($2,$4,@1.first_line,@1.first_column);}
;

DEFAULT: resdefaul dospunt BLOQUEINST {$$= new Case(null,$3,@1.first_line,@1.first_column);}
;
LLAMARFUNC: id pariz LISTAP parder  {$$=new Llamarfunc($1,$3,@1.first_line,@1.first_column);}
          | id pariz  parder  {$$=new Llamarfunc($1,[],@1.first_line,@1.first_column);}
          | resrun id pariz LISTAP parder  {$$=new Llamarfunc($2,$4,@1.first_line,@1.first_column);}
          | resrun id pariz  parder  {$$=new Llamarfunc($2,[],@1.first_line,@1.first_column);}
;

LISTAP : LISTAP coma EXPRESION{ $1.push($3);$$ = $1;}
        | EXPRESION{$$ = [$1];}
;

//funciones y metodos
INSTFUNC: id pariz PARAMETROS parder  llaveiz BLOQUEINST llaveder                     {$$= new Funcion($1,$6,$3,null,@1.first_line,@1.first_column);}
        | id pariz parder  llaveiz BLOQUEINST llaveder                                {$$= new Funcion($1,$5,[],null,@1.first_line,@1.first_column);}
        | id pariz PARAMETROS parder  dospunt resvoid llaveiz BLOQUEINST llaveder     {$$= new Funcion($1,$8,$3,null,@1.first_line,@1.first_column);}
        | id pariz parder dospunt resvoid llaveiz BLOQUEINST llaveder                 {$$= new Funcion($1,$7,[],null,@1.first_line,@1.first_column);}
        | id pariz PARAMETROS parder dospunt TIPODATO llaveiz BLOQUEINST llaveder     {$$= new Funcion($1,$8,$3,$6,@1.first_line,@1.first_column);}
        | id pariz parder dospunt TIPODATO llaveiz BLOQUEINST llaveder                {$$= new Funcion($1,$7,[],$5,@1.first_line,@1.first_column);}
;

PARAMETROS: PARAMETROS coma TIPODATO id       { $1.push(new Declarar($3,$4,null,@1.first_line,@1.first_column)); $$ =$1 }
        |TIPODATO id                          {$$ = [new Declarar($1,$2,null,@1.first_line,@1.first_column)]}
;

//primero declara y tercero asigna
DECLARAR: TIPODATO id igual EXPRESION {$$= new Declarar($1,$2,$4,@1.first_line,@1.first_column);}
        | TIPODATO id                 {$$=new Declarar($1,$2,null,@1.first_line,@1.first_column);}
        | id igual EXPRESION          {$$= new Declarar(tipo.NULL,$1,$3,@1.first_line,@1.first_column);}
;

TIPODATO: resint        {$$=tipo.NUMERO;}
        | resdouble     {$$=tipo.DECIMAL;}
        | resstring     {$$=tipo.STRING;}
        | resbool       {$$=tipo.BOOLEAN;}
        | reschar       {$$=tipo.CHAR;}
;

IMPRIMIR: print pariz EXPRESION parder puntycom   {$$=new Print($3,false,@1.first_line,@1.first_column);}
        | println pariz EXPRESION parder puntycom   {$$=new Print($3,true,@1.first_line,@1.first_column);}
;

BLOQUEINST:INSTRUCCIONES        {$$=new Bloque($1,@1.first_line,@1.first_column)}
;
//incremento o decremento
INCDEC:   EXPRESION mas mas           {$$= new Incdec($1,tipoA.INCREMENTO,@1.first_line,@1.first_column)}
        | EXPRESION menos menos       {$$= new Incdec($1,tipoA.DECREMENTO,@1.first_line,@1.first_column)}
;


EXPRESION : menos EXPRESION %prec Umenos      {$$= new Aritmetica($2,new Nativo("-1",tipoNat.NUMERO, @1.first_line, @1.first_column),tipoArit.MULTIPLICACION, @1.first_line, @1.first_column)}
        | EXPRESION mas EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.SUMA, @1.first_line, @1.first_column)} 
        | EXPRESION menos EXPRESION           {$$= new Aritmetica($1,$3,tipoArit.RESTA, @1.first_line, @1.first_column)}  
        | EXPRESION divid EXPRESION           {$$= new Aritmetica($1,$3,tipoArit.DIVISION, @1.first_line, @1.first_column)} 
        | EXPRESION por EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.MULTIPLICACION, @1.first_line, @1.first_column)} 
        | EXPRESION pot EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.POTENCIA, @1.first_line, @1.first_column)} 
        | EXPRESION mod EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.MODULO, @1.first_line, @1.first_column)} 
        | INCDEC                              {$$=$1;}
        | EXPRESION igualigual EXPRESION      {$$= new Relacional($1,$3,TipoRel.IGUALIGUAL, @1.first_line, @1.first_column)}
        | EXPRESION noigual EXPRESION         {$$= new Relacional($1,$3,TipoRel.DIFERENTE, @1.first_line, @1.first_column)}
        | EXPRESION mayorigual EXPRESION      {$$= new Relacional($1,$3,TipoRel.MAYOR_IGUAL, @1.first_line, @1.first_column)}
        | EXPRESION mayor EXPRESION           {$$= new Relacional($1,$3,TipoRel.MAYOR, @1.first_line, @1.first_column)}
        | EXPRESION menorigual EXPRESION      {$$= new Relacional($1,$3,TipoRel.MENOR_IGUAL, @1.first_line, @1.first_column)}
        | EXPRESION menor EXPRESION           {$$= new Relacional($1,$3,TipoRel.MENOR, @1.first_line, @1.first_column)}
        | EXPRESION and EXPRESION             {$$= new Relacional($1,$3,TipoRel.AND, @1.first_line, @1.first_column)}
        | EXPRESION or EXPRESION              {$$= new Relacional($1,$3,TipoRel.OR, @1.first_line, @1.first_column)}
        | not EXPRESION                       {$$= new Relacional(null,$2,TipoRel.NOT, @1.first_line, @1.first_column)}
        | LLAMARFUNC                          {$$= $1;}
        | pariz EXPRESION parder              {$$ = $2;}
        | NATIVO                              {$$ = $1;}
        | id                                  {$$= new Variable($1,@1.first_line, @1.first_column);}
;

NATIVO :  numero        {$$=new Nativo($1,tipoNat.NUMERO, @1.first_line, @1.first_column)}
        | decimal       {$$=new Nativo($1,tipoNat.DECIMAL, @1.first_line, @1.first_column)}
        | cadena        {$$=new Nativo($1,tipoNat.STRING, @1.first_line, @1.first_column)}
        | bool          {$$=new Nativo($1,tipoNat.BOOLEAN, @1.first_line, @1.first_column)}
        | caracter      {$$=new Nativo($1,tipoNat.CHAR, @1.first_line, @1.first_column)}
;