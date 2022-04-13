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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,8],$V2=[1,7],$V3=[5,10,16,19,22],$V4=[1,17],$V5=[1,19],$V6=[1,16],$V7=[1,20],$V8=[1,21],$V9=[1,22],$Va=[1,23],$Vb=[1,28],$Vc=[1,27],$Vd=[1,29],$Ve=[1,30],$Vf=[1,31],$Vg=[1,32],$Vh=[1,33],$Vi=[1,34],$Vj=[1,35],$Vk=[1,36],$Vl=[13,21,23,24,25,26,27,28,29,30,31,32],$Vm=[13,21,23,24,27,28,29,30,31,32],$Vn=[13,21,27,28],$Vo=[13,21,27,28,29,30,31,32];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INI":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"IMPRIMIR":7,"DECLARAR":8,"INSTIF":9,"resif":10,"pariz":11,"EXPRESION":12,"parder":13,"llaveiz":14,"BLOQUEINST":15,"llaveder":16,"INSTELSE":17,"reselse":18,"id":19,"igual":20,"puntycom":21,"print":22,"menos":23,"mas":24,"divid":25,"por":26,"igualigual":27,"noigual":28,"mayorigual":29,"mayor":30,"menorigual":31,"menor":32,"NATIVO":33,"numero":34,"decimal":35,"cadena":36,"bool":37,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"resif",11:"pariz",13:"parder",14:"llaveiz",16:"llaveder",18:"reselse",19:"id",20:"igual",21:"puntycom",22:"print",23:"menos",24:"mas",25:"divid",26:"por",27:"igualigual",28:"noigual",29:"mayorigual",30:"mayor",31:"menorigual",32:"menor",34:"numero",35:"decimal",36:"cadena",37:"bool"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[9,8],[17,4],[17,2],[17,0],[8,4],[7,5],[15,1],[12,2],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,1],[12,1],[33,1],[33,1],[33,1],[33,1]],
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
case 4: case 5:
this.$=$$[$0];
break;
case 6: case 9:
this.$=$$[$0]
break;
case 7:
this.$=new If($$[$0-5],$$[$0-2],$$[$0],_$[$0-7].first_line,_$[$0-7].first_column);
break;
case 8:
this.$=$$[$0-1]
break;
case 10:
this.$= null
break;
case 11:
this.$= new Declarar($$[$0-3],$$[$0-1],_$[$0-3].first_line,_$[$0-3].first_column);
break;
case 12:
this.$=new Print($$[$0-2],_$[$0-4].first_line,_$[$0-4].first_column);
break;
case 13:
this.$=new Bloque($$[$0],_$[$0].first_line,_$[$0].first_column)
break;
case 14:
this.$= new Aritmetica($$[$0],new Nativo("-1",tipoNat.NUMERO, _$[$0-1].first_line, _$[$0-1].first_column),tipoArit.MULTIPLICACION, _$[$0-1].first_line, _$[$0-1].first_column)
break;
case 15:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.SUMA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 16:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.RESTA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 17:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.DIVISION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 18:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.MULTIPLICACION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 19:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.IGUALIGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 20:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.DIFERENTE, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 21:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 22:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 23:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 24:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 25:
this.$ = $$[$0-1];
break;
case 26:
this.$ = $$[$0];
break;
case 27:
this.$= new Variable($$[$0],_$[$0].first_line, _$[$0].first_column);
break;
case 28:
this.$=new Nativo($$[$0],tipoNat.NUMERO, _$[$0].first_line, _$[$0].first_column)
break;
case 29:
this.$=new Nativo($$[$0],tipoNat.DOBLE, _$[$0].first_line, _$[$0].first_column)
break;
case 30:
this.$=new Nativo($$[$0],tipoNat.STRING, _$[$0].first_line, _$[$0].first_column)
break;
case 31:
this.$=new Nativo($$[$0],tipoNat.BOOLEAN, _$[$0].first_line, _$[$0].first_column)
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:$V0,19:$V1,22:$V2},{1:[3]},{5:[1,10],6:11,7:4,8:5,9:6,10:$V0,19:$V1,22:$V2},o($V3,[2,3]),o($V3,[2,4]),o($V3,[2,5]),o($V3,[2,6]),{11:[1,12]},{20:[1,13]},{11:[1,14]},{1:[2,1]},o($V3,[2,2]),{11:$V4,12:15,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:24,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:25,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{13:[1,26],23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk},{11:$V4,12:37,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:38,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},o($Vl,[2,26]),o($Vl,[2,27]),o($Vl,[2,28]),o($Vl,[2,29]),o($Vl,[2,30]),o($Vl,[2,31]),{21:[1,39],23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk},{13:[1,40],23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk},{21:[1,41]},{11:$V4,12:42,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:43,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:44,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:45,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:46,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:47,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:48,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:49,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:50,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},{11:$V4,12:51,19:$V5,23:$V6,33:18,34:$V7,35:$V8,36:$V9,37:$Va},o($Vl,[2,14]),{13:[1,52],23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk},o($V3,[2,11]),{14:[1,53]},o($V3,[2,12]),o($Vm,[2,15],{25:$Vd,26:$Ve}),o($Vm,[2,16],{25:$Vd,26:$Ve}),o($Vl,[2,17]),o($Vl,[2,18]),o($Vn,[2,19],{23:$Vb,24:$Vc,25:$Vd,26:$Ve,29:$Vh,30:$Vi,31:$Vj,32:$Vk}),o($Vn,[2,20],{23:$Vb,24:$Vc,25:$Vd,26:$Ve,29:$Vh,30:$Vi,31:$Vj,32:$Vk}),o($Vo,[2,21],{23:$Vb,24:$Vc,25:$Vd,26:$Ve}),o($Vo,[2,22],{23:$Vb,24:$Vc,25:$Vd,26:$Ve}),o($Vo,[2,23],{23:$Vb,24:$Vc,25:$Vd,26:$Ve}),o($Vo,[2,24],{23:$Vb,24:$Vc,25:$Vd,26:$Ve}),o($Vl,[2,25]),{4:55,6:3,7:4,8:5,9:6,10:$V0,15:54,19:$V1,22:$V2},{16:[1,56]},{6:11,7:4,8:5,9:6,10:$V0,16:[2,13],19:$V1,22:$V2},o($V3,[2,10],{17:57,18:[1,58]}),o($V3,[2,7]),{9:60,10:$V0,14:[1,59]},{4:55,6:3,7:4,8:5,9:6,10:$V0,15:61,19:$V1,22:$V2},o($V3,[2,9]),{16:[1,62]},o($V3,[2,8])],
defaultActions: {10:[2,1]},
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
const {Variable} = require('./expresion/variable')
const {Nativo,tipoNat} = require('./expresion/nativo')
 const {Declarar} = require('./instrucciones/declarar')
    const {Print} = require('./instrucciones/print')
    const {Bloque} = require('./instrucciones/bloque')
    const {If} = require('./instrucciones/If')
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
case 1:return 24;
break;
case 2:return 23;
break;
case 3:return 25;
break;
case 4:return 26;
break;
case 5:return 11;
break;
case 6:return 13;
break;
case 7:return 14;
break;
case 8:return 16;
break;
case 9:return 'coma'
break;
case 10:return 21;
break;
case 11:return 22;
break;
case 12:return 10;
break;
case 13:return 18;
break;
case 14:return 'reswhile';
break;
case 15:return 'resreturn';
break;
case 16:return 'resbreak';
break;
case 17:return 27;
break;
case 18:return 28;
break;
case 19:return 20;
break;
case 20:return 29;                     
break;
case 21:return 30;
break;
case 22:return 31;
break;
case 23:return 32;
break;
case 24:return 34;
break;
case 25:return 35;
break;
case 26:return 19;
break;
case 27:return 'caracter';
break;
case 28:return 37;
break;
case 29: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 36; 
break;
case 30:return 5;
break;
case 31:console.log(yy_.yylloc.first_line, yy_.yylloc.first_columm, 'Lexico', yy_.yytext)
break;
}
},
rules: [/^(?:\s+)/,/^(?:\+)/,/^(?:-)/,/^(?:\/)/,/^(?:\*)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?:;)/,/^(?:print\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:while\b)/,/^(?:return\b)/,/^(?:break\b)/,/^(?:==)/,/^(?:!=)/,/^(?:=)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:[0-9]+\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/,/^(?:'[^\']')/,/^(?:(true|false)\b)/,/^(?:"[^\"]*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":true}}
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