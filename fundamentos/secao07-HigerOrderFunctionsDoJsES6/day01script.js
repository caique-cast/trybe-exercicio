const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui
  emailListInData.forEach((email, index, emailListInData) => {
    console.log(`O email ${email}, que está na posição ${index + 1} do total de ${emailListInData.length}, está cadastrado em nosso banco de dados!`);
  });

const numbers = [19, 21, 30, 3, 45, 22, 15];

const veryficaNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(veryficaNumbers);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const getName = names.find((name) => name.length === 5);
console.log(getName);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const getMusic = musicas.find((music) => music.id === '31031685');
console.log(getMusic);

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
console.log(verificaCargo); // true

const verificaCargo2 = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
console.log(verificaCargo2); // false

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
console.log(verifyGrades);

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name)
};

console.log(hasName(names2, 'Ana'));
console.log(hasName(names2, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
console.log(people[1].age);

const verifyAges = (array, idade) => {
  return array.every((min) => min.age >= idade)
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));