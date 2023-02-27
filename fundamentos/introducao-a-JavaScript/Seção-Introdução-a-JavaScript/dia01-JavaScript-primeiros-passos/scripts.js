let a = 5;
let b = 8;

if (a > b) { console.log(a);}
    else if (b > a) {console.log(b);}

let d = 6;
let e = 90;
let fi = 309;

if (d > e && d > fi) {console.log(d);}
else if (e > d && e > fi) {console.log(e);}
else if (fi > d && fi > e) {console.log(fi);}

let parametro = 0;
if (parametro > 0) {console.log('positivo');}
else if (parametro < 0) {console.log('negativo');}
else {console.log('zero');}

let a1 = 60;
let a2 = 60;
let a3 = -60;

let a4 = a1 + a2 + a3

if (a1 < 0 || a2 < 0 || a3 < 0) {console.log('angulo invalido');}
else if ( a4  === 180) {console.log('true');}
else {console.log('false');}

let peca = 'Tower'

switch (peca.toLowerCase()) {
    case 'horse':
        console.log('moves in L');
        break;
    case 'queen':
        console.log('all except L-movement');        
        break;
    case 'tower':
        console.log('straight line movement');
        break;

    default: console.log("not a chess piece");
        break;
}

let nota=234
if ( nota > 100 || nota < 0) {console.log('Erro: nota não compativel');}
else if ( nota >= 90 ) {console.log('A');}
else if ( nota >= 80 ) {console.log('B');}
else if ( nota >= 70 ) {console.log('C');}
else if ( nota >= 60 ) {console.log('D');}
else if ( nota >= 50 ) {console.log('E');}
else if ( nota < 50 )  {console.log('F');}