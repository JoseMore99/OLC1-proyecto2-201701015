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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,14],$V1=[1,26],$V2=[1,15],$V3=[1,18],$V4=[1,17],$V5=[1,13],$V6=[1,19],$V7=[1,20],$V8=[1,21],$V9=[1,22],$Va=[1,23],$Vb=[1,11],$Vc=[1,24],$Vd=[1,25],$Ve=[1,28],$Vf=[1,29],$Vg=[1,30],$Vh=[1,31],$Vi=[1,32],$Vj=[5,15,16,21,23,24,26,30,32,34,36,37,38,39,40,41,43,56,58,59,60,61,62],$Vk=[42,43,44,45,46,47,48,49,50,51,52,53,54,55],$Vl=[2,43],$Vm=[2,55],$Vn=[1,39],$Vo=[1,42],$Vp=[1,43],$Vq=[1,44],$Vr=[1,45],$Vs=[1,46],$Vt=[1,47],$Vu=[1,48],$Vv=[1,49],$Vw=[1,50],$Vx=[1,51],$Vy=[1,52],$Vz=[1,53],$VA=[1,54],$VB=[1,55],$VC=[1,60],$VD=[9,18,31,42,43,44,45,46,47,48,49,50,51,52,53,54,55],$VE=[9,18,31,54,55],$VF=[9,18],$VG=[9,18,31,42,43,48,49,50,51,52,53,54,55],$VH=[9,18,31,42,43,44,45,47,48,49,50,51,52,53,54,55],$VI=[9,18,31,48,49,54,55],$VJ=[9,18,31,48,49,50,51,52,53,54,55],$VK=[1,106],$VL=[1,105],$VM=[21,30,32];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INI":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"IMPRIMIR":7,"DECLARAR":8,"puntycom":9,"INSTIF":10,"INSTWHILE":11,"INCDEC":12,"INSTSWITCH":13,"INSTFOR":14,"resif":15,"pariz":16,"EXPRESION":17,"parder":18,"llaveiz":19,"BLOQUEINST":20,"llaveder":21,"INSTELSE":22,"reswhile":23,"resfor":24,"reselse":25,"reswitch":26,"LISTACASE":27,"DEFAULT":28,"INSTCASE":29,"rescase":30,"dospunt":31,"resdefaul":32,"TIPODATO":33,"id":34,"igual":35,"resint":36,"resdouble":37,"resstring":38,"resbool":39,"reschar":40,"print":41,"mas":42,"menos":43,"divid":44,"por":45,"pot":46,"mod":47,"igualigual":48,"noigual":49,"mayorigual":50,"mayor":51,"menorigual":52,"menor":53,"and":54,"or":55,"not":56,"NATIVO":57,"numero":58,"decimal":59,"cadena":60,"bool":61,"caracter":62,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"puntycom",15:"resif",16:"pariz",18:"parder",19:"llaveiz",21:"llaveder",23:"reswhile",24:"resfor",25:"reselse",26:"reswitch",30:"rescase",31:"dospunt",32:"resdefaul",34:"id",35:"igual",36:"resint",37:"resdouble",38:"resstring",39:"resbool",40:"reschar",41:"print",42:"mas",43:"menos",44:"divid",45:"por",46:"pot",47:"mod",48:"igualigual",49:"noigual",50:"mayorigual",51:"mayor",52:"menorigual",53:"menor",54:"and",55:"or",56:"not",58:"numero",59:"decimal",60:"cadena",61:"bool",62:"caracter"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,2],[6,1],[6,1],[6,2],[6,1],[6,1],[10,8],[11,7],[14,11],[14,11],[22,4],[22,2],[22,0],[13,8],[13,7],[13,7],[27,2],[27,1],[29,4],[28,3],[8,4],[8,3],[33,1],[33,1],[33,1],[33,1],[33,1],[7,5],[20,1],[12,3],[12,3],[17,2],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,1],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,2],[17,3],[17,1],[17,1],[57,1],[57,1],[57,1],[57,1],[57,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2: case 21:
if($$[$0]!=false)$$[$0-1].push($$[$0]);this.$=$$[$0-1];
break;
case 3: case 22:
this.$=($$[$0]!=false) ?[$$[$0]]:[];
break;
case 4: case 6: case 7: case 9: case 10: case 43:
this.$=$$[$0];
break;
case 5: case 8:
this.$=$$[$0-1];
break;
case 11:
this.$=new If($$[$0-5],$$[$0-2],$$[$0],_$[$0-7].first_line,_$[$0-7].first_column);
break;
case 12:
this.$=new While($$[$0-4],$$[$0-1],_$[$0-6].first_line,_$[$0-6].first_column);
break;
case 13: case 14:
this.$=new For($$[$0-8],$$[$0-6],$$[$0-4],$$[$0-1],_$[$0-10].first_line,_$[$0-10].first_column);
break;
case 15:
this.$=$$[$0-1]
break;
case 16:
this.$=$$[$0]
break;
case 17:
this.$= null
break;
case 18:
this.$= new Switch($$[$0-5],$$[$0-2],$$[$0-1],_$[$0-7].first_line,_$[$0-7].first_column);
break;
case 19:
this.$= new Switch($$[$0-4],$$[$0-1],undefined,_$[$0-6].first_line,_$[$0-6].first_column);
break;
case 20:
this.$= new Switch($$[$0-4],undefined,$$[$0],_$[$0-6].first_line,_$[$0-6].first_column);
break;
case 23:
this.$= new Case($$[$0-2],$$[$0],_$[$0-3].first_line,_$[$0-3].first_column);
break;
case 24:
this.$= new Case(null,$$[$0],_$[$0-2].first_line,_$[$0-2].first_column);
break;
case 25:
this.$= new Declarar($$[$0-3],$$[$0-2],$$[$0],_$[$0-3].first_line,_$[$0-3].first_column);
break;
case 26:
this.$= new Declarar(tipo.NULL,$$[$0-2],$$[$0],_$[$0-2].first_line,_$[$0-2].first_column);
break;
case 27:
this.$=tipo.NUMERO;
break;
case 28:
this.$=tipo.DECIMAL;
break;
case 29:
this.$=tipo.STRING;
break;
case 30:
this.$=tipo.BOOLEAN;
break;
case 31:
this.$=tipo.CHAR;
break;
case 32:
this.$=new Print($$[$0-2],_$[$0-4].first_line,_$[$0-4].first_column);
break;
case 33:
this.$=new Bloque($$[$0],_$[$0].first_line,_$[$0].first_column)
break;
case 34:
this.$= new Incdec($$[$0-2],tipoA.INCREMENTO,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 35:
this.$= new Incdec($$[$0-2],tipoA.DECREMENTO,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 36:
this.$= new Aritmetica($$[$0],new Nativo("-1",tipoNat.NUMERO, _$[$0-1].first_line, _$[$0-1].first_column),tipoArit.MULTIPLICACION, _$[$0-1].first_line, _$[$0-1].first_column)
break;
case 37:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.SUMA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 38:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.RESTA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 39:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.DIVISION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 40:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.MULTIPLICACION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 41:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.POTENCIA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 42:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.MODULO, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 44:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.IGUALIGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 45:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.DIFERENTE, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 46:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 47:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 48:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 49:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 50:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.AND, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 51:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.OR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 52:
this.$= new Relacional(null,$$[$0],TipoRel.NOT, _$[$0-1].first_line, _$[$0-1].first_column)
break;
case 53:
this.$ = $$[$0-1];
break;
case 54:
this.$ = $$[$0];
break;
case 55:
this.$= new Variable($$[$0],_$[$0].first_line, _$[$0].first_column);
break;
case 56:
this.$=new Nativo($$[$0],tipoNat.NUMERO, _$[$0].first_line, _$[$0].first_column)
break;
case 57:
this.$=new Nativo($$[$0],tipoNat.DECIMAL, _$[$0].first_line, _$[$0].first_column)
break;
case 58:
this.$=new Nativo($$[$0],tipoNat.STRING, _$[$0].first_line, _$[$0].first_column)
break;
case 59:
this.$=new Nativo($$[$0],tipoNat.BOOLEAN, _$[$0].first_line, _$[$0].first_column)
break;
case 60:
this.$=new Nativo($$[$0],tipoNat.CHAR, _$[$0].first_line, _$[$0].first_column)
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{1:[3]},{5:[1,33],6:34,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},o($Vj,[2,3]),o($Vj,[2,4]),{9:[1,35]},o($Vj,[2,6]),o($Vj,[2,7]),o($Vk,$Vl,{9:[1,36]}),o($Vj,[2,9]),o($Vj,[2,10]),{16:[1,37]},{34:[1,38]},o($Vk,$Vm,{35:$Vn}),{16:[1,40]},{16:[1,41]},{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},{16:[1,56]},{16:[1,57]},{34:[2,27]},{34:[2,28]},{34:[2,29]},{34:[2,30]},{34:[2,31]},{12:59,16:$V1,17:58,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:61,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:62,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},o($VD,[2,54]),o($VD,[2,56]),o($VD,[2,57]),o($VD,[2,58]),o($VD,[2,59]),o($VD,[2,60]),{1:[2,1]},o($Vj,[2,2]),o($Vj,[2,5]),o($Vj,[2,8]),{12:59,16:$V1,17:63,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{35:[1,64]},{12:59,16:$V1,17:65,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:66,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:67,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:69,34:$VC,42:[1,68],43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:71,34:$VC,43:[1,70],56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:72,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:73,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:74,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:75,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:76,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:77,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:78,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:79,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:80,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:81,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:82,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:83,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{12:59,16:$V1,17:84,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{8:85,33:12,34:[1,86],36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},o($VD,[2,36]),o($VD,$Vl),o($VD,$Vm),o($VE,[2,52],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz}),{18:[1,87],42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},{18:[1,88],42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},{12:59,16:$V1,17:89,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},o($VF,[2,26],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB}),{18:[1,90],42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},{18:[1,91],42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},o($VD,[2,34]),o($VG,[2,37],{44:$Vq,45:$Vr,46:$Vs,47:$Vt}),o($VD,[2,35],{57:27,17:58,12:59,16:$V1,34:$VC,56:$Vd,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi}),o($VG,[2,38],{44:$Vq,45:$Vr,46:$Vs,47:$Vt}),o($VH,[2,39],{46:$Vs}),o($VH,[2,40],{46:$Vs}),o($VD,[2,41]),o($VH,[2,42],{46:$Vs}),o($VI,[2,44],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,50:$Vw,51:$Vx,52:$Vy,53:$Vz}),o($VI,[2,45],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,50:$Vw,51:$Vx,52:$Vy,53:$Vz}),o($VJ,[2,46],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt}),o($VJ,[2,47],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt}),o($VJ,[2,48],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt}),o($VJ,[2,49],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt}),o($VE,[2,50],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz}),o([9,18,31,55],[2,51],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA}),{18:[1,92],42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},{9:[1,93]},{35:$Vn},o($VD,[2,53]),{9:[1,94]},o($VF,[2,25],{42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB}),{19:[1,95]},{19:[1,96]},{19:[1,97]},{12:59,16:$V1,17:98,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},o($Vj,[2,32]),{4:100,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,20:99,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{4:100,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,20:101,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{27:102,28:103,29:104,30:$VK,32:$VL},{9:[1,107],42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},{21:[1,108]},o($VM,[2,33],{7:4,8:5,10:6,11:7,12:8,13:9,14:10,33:12,17:16,57:27,6:34,15:$V0,16:$V1,23:$V2,24:$V3,26:$V4,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi}),{21:[1,109]},{21:[1,111],28:110,29:112,30:$VK,32:$VL},{21:[1,113]},o($VM,[2,22]),{31:[1,114]},{12:59,16:$V1,17:115,34:$VC,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{8:116,12:117,16:$V1,17:16,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},o($Vj,[2,17],{22:118,25:[1,119]}),o($Vj,[2,12]),{21:[1,120]},o($Vj,[2,19]),o($VM,[2,21]),o($Vj,[2,20]),{4:100,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,20:121,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{31:[1,122],42:$Vo,43:$Vp,44:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB},{18:[1,123]},o($Vk,$Vl,{18:[1,124]}),o($Vj,[2,11]),{10:126,15:$V0,19:[1,125]},o($Vj,[2,18]),{21:[2,24]},{4:100,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,20:127,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{19:[1,128]},{19:[1,129]},{4:100,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,20:130,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},o($Vj,[2,16]),o($VM,[2,23]),{4:100,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,20:131,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{4:100,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:16,20:132,23:$V2,24:$V3,26:$V4,33:12,34:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va,41:$Vb,43:$Vc,56:$Vd,57:27,58:$Ve,59:$Vf,60:$Vg,61:$Vh,62:$Vi},{21:[1,133]},{21:[1,134]},{21:[1,135]},o($Vj,[2,15]),o($Vj,[2,13]),o($Vj,[2,14])],
defaultActions: {19:[2,27],20:[2,28],21:[2,29],22:[2,30],23:[2,31],33:[2,1],121:[2,24]},
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
    const {Case} = require('./instrucciones/Case')
    const {Switch} = require('./instrucciones/Switch')
    const {For} = require('./instrucciones/For')
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
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://espacios en blanco
break;
case 1://comentario simple	
break;
case 2://comentario multiple
break;
case 3:return 42;
break;
case 4:return 43;
break;
case 5:return 44;
break;
case 6:return 45;
break;
case 7:return 46;
break;
case 8:return 47;
break;
case 9:return 16;
break;
case 10:return 18;
break;
case 11:return 19;
break;
case 12:return 21;
break;
case 13:return 'coma';
break;
case 14:return 9;
break;
case 15:return 31;
break;
case 16:return 'masmas';
break;
case 17:return 'menosmenos';
break;
case 18:return 41;
break;
case 19:return 15;
break;
case 20:return 25;
break;
case 21:return 23;
break;
case 22:return 24;
break;
case 23:return 'resreturn';
break;
case 24:return 'resbreak';
break;
case 25:return 36;
break;
case 26:return 37;
break;
case 27:return 38;
break;
case 28:return 39;
break;
case 29:return 40;
break;
case 30:return 26;
break;
case 31:return 30;
break;
case 32:return 32;
break;
case 33:return 48;
break;
case 34:return 49;
break;
case 35:return 35;
break;
case 36:return 50;                     
break;
case 37:return 51;
break;
case 38:return 52;
break;
case 39:return 53;
break;
case 40:return 55;
break;
case 41:return 54;
break;
case 42:return 56;
break;
case 43:return 58;
break;
case 44:return 59;
break;
case 45:return 34;
break;
case 46:return 62;
break;
case 47:return 61;
break;
case 48: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 60; 
break;
case 49:return 5;
break;
case 50:console.log(yy_.yylloc.first_line, yy_.yylloc.first_columm, 'Lexico', yy_.yytext)
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\/)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:%)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:,)/i,/^(?:;)/i,/^(?::)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:print\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:return\b)/i,/^(?:break\b)/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:string\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:default\b)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:=)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:[0-9]+\b)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:'[^\']')/i,/^(?:(true|false)\b)/i,/^(?:"[^\"]*")/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
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