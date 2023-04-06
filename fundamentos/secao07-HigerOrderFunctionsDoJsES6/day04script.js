/* ex fixar */
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'ameixa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'laranja', 'pera'];

const fruitSalad = (fruit, additional) => {
  const newList = [...fruit, ...additional];
  return newList;
};

console.log(fruitSalad(specialFruit, additionalItens));

/* parametro rest */
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 90)); 

/* object destructuring */
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi, specieName } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}. Da especie ${specieName}.`);


const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  const name = student.a;
  console.log(name); // Maria
console.log(student);  
