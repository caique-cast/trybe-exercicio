/* array.filter */
const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];
const mix = dados.filter((item) => typeof item === 'string');
console.log(mix);
console.log(dados.filter((item) =>  typeof item !== 'string'));

/* exemplo 2 */
const listaNumeros = [10, 20, 30, 40];

// Armazena o resultado em uma nova variável maiorVinte
let maiorVinte = listaNumeros.filter((item) => item > 20);

console.log(maiorVinte);

/* array.reduce */
array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);

array.reduce((acc, curr) => {
    // escopo de execução da função
  }, valorInicial);

  /* ex */
  const valorItens = [1, 32, 44, 2, 3];

const it = valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
}, 0);

valorItens.reduce((acc, curr) => {
    console.log(`acc:`, acc);
    console.log(`curr:`, curr);
    console.log('a soma atual é', acc + curr);
  
    return acc + curr;
  }, 0);

  /* ex chamando uma funcao no callback do reduce*/
  const numbers1 = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum = numbers1.reduce(sumNumbers, 30);

console.log(totalSum); //112

/* ex para retornar maior*/
const numbers3 = [50, 85, -30, 3, 15];

const returnBigger = numbers3.reduce((bigger, number) => bigger > number ? bigger : number);

console.log(returnBigger);

/* ex fixar */
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numbersPar = numbers.filter((number) => number % 2 === 0)
console.log(numbersPar);
const sum = numbersPar.reduce((acc, number) => acc + number,0)
console.log(sum);

const sumReduce = numbers.reduce((acc, number) => {
    return number % 2 === 0 ? number + acc : acc
})
console.log(sumReduce);

/* ex fixar 2 */
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];