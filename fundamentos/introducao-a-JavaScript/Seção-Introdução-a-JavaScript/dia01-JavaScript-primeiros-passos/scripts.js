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

 /* exercicio: há um par entre nós */ 
let number1 = 7
let number2 = 3
let number3 = 5


if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {console.log('true');}
else {console.log('false');}


let number4 = 2
let number5 = 4
let number6 = 6

if (number4 % 2 !== 0 || number5 % 2 !== 0 || number6 % 2 !== 0) {console.log('true');}
else {console.log('false');}

let custoProduto = -2
let valorVenda = 45
let custoTotal = custoProduto * 1.2
let lucro = valorVenda - custoTotal

if ( custoProduto < 0 || valorVenda < 0) {console.log("Erro: valor maior que zero");}
else {console.log(lucro);}

let salarioBruto = 3000
let aliquota;


if ( salarioBruto <= 1556.94) {console.log(aliquota = salarioBruto * 0.08 );}
else if ( salarioBruto > 1556.94 && salarioBruto <= 2594.92) {console.log(aliquota = salarioBruto * 0.09);}
else if ( salarioBruto > 2594.92 && salarioBruto <= 5189.82) {console.log(aliquota = salarioBruto * 0.11);}
else if ( salarioBruto > 5189.82) {console.log(aliquota = 570.88);}

let impostoRenda;
let salarioBase = salarioBruto - aliquota


if ( salarioBase <= 1903.38) {console.log(impostoRenda = 0 );}
else if ( salarioBase > 1903.38 && salarioBase <= 2826.65) {console.log(impostoRenda = salarioBase * 0.075 - 142.8);}
else if ( salarioBase > 2826.65 && salarioBase <= 3751.05) {console.log(impostoRenda = salarioBase * 0.15 - 354.8);}
else if ( salarioBase > 3751.05 && salarioBase <= 4664.68) {console.log(impostoRenda = salarioBase * 0.225 - 636.13);}
else if ( salarioBase > 4664.68 ) {console.log(impostoRenda = salarioBase * 0.275 - 869.36);}

let salarioLiquido = salarioBase - impostoRenda;
console.log( salarioLiquido);


/* 
    Até R$ 1.903,98: isento de imposto de renda
    De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
 */


