const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
let newPeople = people.sort((a, b) => a.age < b.age ? 1 : -1);
  
  console.log(newPeople);

  const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

  const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

/* unir 2 arrays */
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (listProducts, listPrices) => listProducts.map((element, index) => {
    return {[element]: listPrices[index]}
});

const newList = listProducts(products,prices);
console.log(newList);

/* exemplo */
const students = [
    {
      firstName: 'João',
      lastName: 'Silva',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: 67 },
        { name: 'Português', grade: 79 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 65 },
      ],
    },
    {
      firstName: 'Mario',
      lastName: 'Ferreira',
      age: 15,
      period: 'Tarde',
      subjects: [
        { name: 'Matemática', grade: '59' },
        { name: 'Português', grade: '80' },
        { name: 'Química', grade: '78' },
        { name: 'Biologia', grade: '92' },
      ],
    },
    {
      firstName: 'Jorge',
      lastName: 'Santos',
      age: 15,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '76' },
        { name: 'Português', grade: '90' },
        { name: 'Química', grade: '70' },
        { name: 'Biologia', grade: '80' },
      ],
    },
    {
      firstName: 'Maria',
      lastName: 'Silveira',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '91' },
        { name: 'Português', grade: '85' },
        { name: 'Química', grade: '92' },
        { name: 'Biologia', grade: '90' },
      ],
    },
    {
      firstName: 'Natalia',
      lastName: 'Castro',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '70' },
        { name: 'Português', grade: '70' },
        { name: 'Química', grade: '60' },
        { name: 'Biologia', grade: '50' },
      ],
    },
    {
      firstName: 'Wilson',
      lastName: 'Martins',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '80' },
        { name: 'Português', grade: '82' },
        { name: 'Química', grade: '79' },
        { name: 'Biologia', grade: '75' },
      ],
    },
  ];
/* Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã. */
  const allNameStudents = [];

students.forEach((student) => {
  if (student.period === 'Manhã') {
    allNameStudents.push(`${student.firstName} ${student.lastName}`);
  }
});

console.log(allNameStudents);

/* Buscar um estudante pelo nome e retornar a situação dele em cada matéria:  */
const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.firstName === name);
    return studentInfo.subjects.map((subject) => (
      `${subject.name} - ${(subject.grade >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  console.log(reportStatus('Natalia', students));
  