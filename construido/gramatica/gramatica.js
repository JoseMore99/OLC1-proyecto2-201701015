/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,22],$V2=[1,13],$V3=[1,11],$V4=[1,15],$V5=[1,16],$V6=[1,17],$V7=[1,18],$V8=[1,19],$V9=[1,9],$Va=[1,20],$Vb=[1,21],$Vc=[1,24],$Vd=[1,25],$Ve=[1,26],$Vf=[1,27],$Vg=[1,28],$Vh=[5,13,14,19,21,24,26,27,28,29,30,31,33,46,48,49,50,51,52],$Vi=[32,33,34,35,36,37,38,39,40,41,42,43,44,45],$Vj=[2,32],$Vk=[2,44],$Vl=[1,37],$Vm=[1,38],$Vn=[1,39],$Vo=[1,40],$Vp=[1,41],$Vq=[1,42],$Vr=[1,43],$Vs=[1,44],$Vt=[1,45],$Vu=[1,46],$Vv=[1,47],$Vw=[1,48],$Vx=[1,49],$Vy=[1,50],$Vz=[1,53],$VA=[12,16,32,33,34,35,36,37,38,39,40,41,42,43,44,45],$VB=[12,16,44,45],$VC=[12,16,32,33,38,39,40,41,42,43,44,45],$VD=[12,16,32,33,34,35,37,38,39,40,41,42,43,44,45],$VE=[12,16,38,39,44,45],$VF=[12,16,38,39,40,41,42,43,44,45];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INI":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"IMPRIMIR":7,"DECLARAR":8,"INSTIF":9,"INSTWHILE":10,"INCDEC":11,"puntycom":12,"resif":13,"pariz":14,"EXPRESION":15,"parder":16,"llaveiz":17,"BLOQUEINST":18,"llaveder":19,"INSTELSE":20,"reswhile":21,"reselse":22,"TIPODATO":23,"id":24,"igual":25,"resint":26,"resdouble":27,"resstring":28,"resbool":29,"reschar":30,"print":31,"mas":32,"menos":33,"divid":34,"por":35,"pot":36,"mod":37,"igualigual":38,"noigual":39,"mayorigual":40,"mayor":41,"menorigual":42,"menor":43,"and":44,"or":45,"not":46,"NATIVO":47,"numero":48,"decimal":49,"cadena":50,"bool":51,"caracter":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"puntycom",13:"resif",14:"pariz",16:"parder",17:"llaveiz",19:"llaveder",21:"reswhile",22:"reselse",24:"id",25:"igual",26:"resint",27:"resdouble",28:"resstring",29:"resbool",30:"reschar",31:"print",32:"mas",33:"menos",34:"divid",35:"por",36:"pot",37:"mod",38:"igualigual",39:"noigual",40:"mayorigual",41:"mayor",42:"menorigual",43:"menor",44:"and",45:"or",46:"not",48:"numero",49:"decimal",50:"cadena",51:"bool",52:"caracter"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,2],[9,8],[10,7],[20,4],[20,2],[20,0],[8,5],[8,4],[23,1],[23,1],[23,1],[23,1],[23,1],[7,5],[18,1],[11,3],[11,3],[15,2],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,1],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,2],[15,3],[15,1],[15,1],[47,1],[47,1],[47,1],[47,1],[47,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
if($$[$0]!=false)$$[$0-1].push($$[$0]);this.$=$$[$0-1];
break;
case 3:
this.$=($$[$0]!=false) ?[$$[$0]]:[];
break;
case 4: case 5: case 6: case 7: case 32:
this.$=$$[$0];
break;
case 8:
this.$=$$[$0-1];
break;
case 9:
this.$=new If($$[$0-5],$$[$0-2],$$[$0],_$[$0-7].first_line,_$[$0-7].first_column);
break;
case 10:
this.$=new While($$[$0-4],$$[$0-1],_$[$0-6].first_line,_$[$0-6].first_column);
break;
case 11:
this.$=$$[$0-1]
break;
case 12:
this.$=$$[$0]
break;
case 13:
this.$= null
break;
case 14:
this.$= new Declarar($$[$0-4],$$[$0-3],$$[$0-1],_$[$0-4].first_line,_$[$0-4].first_column);
break;
case 15:
this.$= new Declarar(tipo.NULL,$$[$0-3],$$[$0-1],_$[$0-3].first_line,_$[$0-3].first_column);
break;
case 16:
this.$=tipo.NUMERO;
break;
case 17:
this.$=tipo.DECIMAL;
break;
case 18:
this.$=tipo.STRING;
break;
case 19:
this.$=tipo.BOOLEAN;
break;
case 20:
this.$=tipo.CHAR;
break;
case 21:
this.$=new Print($$[$0-2],_$[$0-4].first_line,_$[$0-4].first_column);
break;
case 22:
this.$=new Bloque($$[$0],_$[$0].first_line,_$[$0].first_column)
break;
case 23:
this.$= new Incdec($$[$0-2],tipoA.INCREMENTO,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 24:
this.$= new Incdec($$[$0-2],tipoA.DECREMENTO,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 25:
this.$= new Aritmetica($$[$0],new Nativo("-1",tipoNat.NUMERO, _$[$0-1].first_line, _$[$0-1].first_column),tipoArit.MULTIPLICACION, _$[$0-1].first_line, _$[$0-1].first_column)
break;
case 26:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.SUMA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 27:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.RESTA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 28:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.DIVISION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 29:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.MULTIPLICACION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 30:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.POTENCIA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 31:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.MODULO, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 33:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.IGUALIGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 34:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.DIFERENTE, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 35:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 36:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 37:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 38:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 39:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.AND, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 40:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.OR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 41:
this.$= new Relacional(null,$$[$0],TipoRel.NOT, _$[$0-1].first_line, _$[$0-1].first_column)
break;
case 42:
this.$ = $$[$0-1];
break;
case 43:
this.$ = $$[$0];
break;
case 44:
this.$= new Variable($$[$0],_$[$0].first_line, _$[$0].first_column);
break;
case 45:
this.$=new Nativo($$[$0],tipoNat.NUMERO, _$[$0].first_line, _$[$0].first_column)
break;
case 46:
this.$=new Nativo($$[$0],tipoNat.DECIMAL, _$[$0].first_line, _$[$0].first_column)
break;
case 47:
this.$=new Nativo($$[$0],tipoNat.STRING, _$[$0].first_line, _$[$0].first_column)
break;
case 48:
this.$=new Nativo($$[$0],tipoNat.BOOLEAN, _$[$0].first_line, _$[$0].first_column)
break;
case 49:
this.$=new Nativo($$[$0],tipoNat.CHAR, _$[$0].first_line, _$[$0].first_column)
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,13:$V0,14:$V1,15:14,21:$V2,23:10,24:$V3,26:$V4,27:$V5,28:$V6,29:$V7,30:$V8,31:$V9,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{1:[3]},{5:[1,29],6:30,7:4,8:5,9:6,10:7,11:8,13:$V0,14:$V1,15:14,21:$V2,23:10,24:$V3,26:$V4,27:$V5,28:$V6,29:$V7,30:$V8,31:$V9,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},o($Vh,[2,3]),o($Vh,[2,4]),o($Vh,[2,5]),o($Vh,[2,6]),o($Vh,[2,7]),o($Vi,$Vj,{12:[1,31]}),{14:[1,32]},{24:[1,33]},o($Vi,$Vk,{25:[1,34]}),{14:[1,35]},{14:[1,36]},{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy},{24:[2,16]},{24:[2,17]},{24:[2,18]},{24:[2,19]},{24:[2,20]},{11:52,14:$V1,15:51,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:54,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:55,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},o($VA,[2,43]),o($VA,[2,45]),o($VA,[2,46]),o($VA,[2,47]),o($VA,[2,48]),o($VA,[2,49]),{1:[2,1]},o($Vh,[2,2]),o($Vh,[2,8]),{11:52,14:$V1,15:56,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{25:[1,57]},{11:52,14:$V1,15:58,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:59,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:60,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:62,24:$Vz,32:[1,61],33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:64,24:$Vz,33:[1,63],46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:65,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:66,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:67,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:68,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:69,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:70,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:71,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:72,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:73,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:74,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:75,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{11:52,14:$V1,15:76,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},o($VA,[2,25]),o($VA,$Vj),o($VA,$Vk),o($VB,[2,41],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),{16:[1,77],32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy},{16:[1,78],32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy},{11:52,14:$V1,15:79,24:$Vz,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{12:[1,80],32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy},{16:[1,81],32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy},{16:[1,82],32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy},o($VA,[2,23]),o($VC,[2,26],{34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($VA,[2,24],{47:23,15:51,11:52,14:$V1,24:$Vz,46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg}),o($VC,[2,27],{34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($VD,[2,28],{36:$Vp}),o($VD,[2,29],{36:$Vp}),o($VA,[2,30]),o($VD,[2,31],{36:$Vp}),o($VE,[2,33],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VE,[2,34],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VF,[2,35],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($VF,[2,36],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($VF,[2,37],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($VF,[2,38],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($VB,[2,39],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o([12,16,45],[2,40],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VA,[2,42]),{12:[1,83]},{12:[1,84],32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy},o($Vh,[2,15]),{17:[1,85]},{17:[1,86]},o($Vh,[2,21]),o($Vh,[2,14]),{4:88,6:3,7:4,8:5,9:6,10:7,11:8,13:$V0,14:$V1,15:14,18:87,21:$V2,23:10,24:$V3,26:$V4,27:$V5,28:$V6,29:$V7,30:$V8,31:$V9,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{4:88,6:3,7:4,8:5,9:6,10:7,11:8,13:$V0,14:$V1,15:14,18:89,21:$V2,23:10,24:$V3,26:$V4,27:$V5,28:$V6,29:$V7,30:$V8,31:$V9,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{19:[1,90]},{6:30,7:4,8:5,9:6,10:7,11:8,13:$V0,14:$V1,15:14,19:[2,22],21:$V2,23:10,24:$V3,26:$V4,27:$V5,28:$V6,29:$V7,30:$V8,31:$V9,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},{19:[1,91]},o($Vh,[2,13],{20:92,22:[1,93]}),o($Vh,[2,10]),o($Vh,[2,9]),{9:95,13:$V0,17:[1,94]},{4:88,6:3,7:4,8:5,9:6,10:7,11:8,13:$V0,14:$V1,15:14,18:96,21:$V2,23:10,24:$V3,26:$V4,27:$V5,28:$V6,29:$V7,30:$V8,31:$V9,33:$Va,46:$Vb,47:23,48:$Vc,49:$Vd,50:$Ve,51:$Vf,52:$Vg},o($Vh,[2,12]),{19:[1,97]},o($Vh,[2,11])],
defaultActions: {15:[2,16],16:[2,17],17:[2,18],18:[2,19],19:[2,20],29:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://espacios en blanco
break;
case 1://comentario simple	
break;
case 2://comentario multiple
break;
case 3:return 32;
break;
case 4:return 33;
break;
case 5:return 34;
break;
case 6:return 35;
break;
case 7:return 36;
break;
case 8:return 37;
break;
case 9:return 14;
break;
case 10:return 16;
break;
case 11:return 17;
break;
case 12:return 19;
break;
case 13:return 'coma';
break;
case 14:return 12;
break;
case 15:return 'masmas';
break;
case 16:return 'menosmenos';
break;
case 17:return 31;
break;
case 18:return 13;
break;
case 19:return 22;
break;
case 20:return 21;
break;
case 21:return 'resreturn';
break;
case 22:return 'resbreak';
break;
case 23:return 26;
break;
case 24:return 27;
break;
case 25:return 28;
break;
case 26:return 29;
break;
case 27:return 30;
break;
case 28:return 38;
break;
case 29:return 39;
break;
case 30:return 25;
break;
case 31:return 40;                     
break;
case 32:return 41;
break;
case 33:return 42;
break;
case 34:return 43;
break;
case 35:return 45;
break;
case 36:return 44;
break;
case 37:return 46;
break;
case 38:return 48;
break;
case 39:return 49;
break;
case 40:return 24;
break;
case 41:return 52;
break;
case 42:return 51;
break;
case 43: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 50; 
break;
case 44:return 5;
break;
case 45:console.log(yy_.yylloc.first_line, yy_.yylloc.first_columm, 'Lexico', yy_.yytext)
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:\+)/,/^(?:-)/,/^(?:\/)/,/^(?:\*)/,/^(?:\^)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?:;)/,/^(?:\+\+)/,/^(?:--)/,/^(?:print\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:while\b)/,/^(?:return\b)/,/^(?:break\b)/,/^(?:int\b)/,/^(?:double\b)/,/^(?:string\b)/,/^(?:boolean\b)/,/^(?:char\b)/,/^(?:==)/,/^(?:!=)/,/^(?:=)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:!)/,/^(?:[0-9]+\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/,/^(?:'[^\']')/,/^(?:(true|false)\b)/,/^(?:"[^\"]*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}