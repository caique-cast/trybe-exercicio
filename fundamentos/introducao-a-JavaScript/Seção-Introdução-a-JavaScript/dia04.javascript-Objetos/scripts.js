let diasDaSemana = {
    1: 'domingo',
    2: 'segunda-feira',
    3: 'terça-feira',
    4: 'quarta-feira',
    5: 'quinta-feira',
    6: 'sexta-feira',
    7: 'sábado',
};
  
  diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo

let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
    },
};

let infoDoBanco = 'banco';
console.log(conta['banco']); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
    },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

let moradores = [
    {
        nome: 'Luíza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luíza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

/* exercicio conteudo */


let player = {
    naame: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};
console.log('A jogadora ' + player.naame + player.lastName + ' tem ' + player.age + ' anos de idade.');
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora' + player['naame'] + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');
console.log('A jogadora possui ' + player.medals.golden + " medalhas de ouro " + player.medals.silver + " medalhas de prata.");
console.log(player);

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
    console.log(index, cars[index]);
}
/* 
    Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

 */
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
for (let key in names) {
    console.log('Ola, ' + names[key]);
}
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (let key in car) {
    console.log(key + ":" + car[key]);
}

customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};
let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};
console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);
let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

customer2['lastName'] = 'Silva';

let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(customer, newKey, lastName);
console.log(customer);

let student1 = {

};

function addProperty(object, key, value) {
    object[key] = value;
};
addProperty(student1, `firstName`, `Caique`);
addProperty(student1, `email`, `cascsad`);
addProperty(student1, `lastName`, `Castro`);

console.log(student1);

let student = {};

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(student, `nome`, `Fulano da Silva`);
addProperty(student, `email`, `exemplo-fulano.silva@email.com`);
addProperty(student, `telefone`, `11 1111-1111`);
addProperty(student, `github`, `github.com/exemplo-fulano-da-silva`);
addProperty(student, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);
console.log(student);

let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', 
  };

  function mostraHabilidade (objtect){
    let arrayOfSkill = Object.keys(objtect)
    for( let key in arrayOfSkill){
        console.log(arrayOfSkill[key] + ' Nivel ' + objtect[arrayOfSkill[key]]);
    }
  }
  console.log('Estudante 1');
mostraHabilidade(student1)

  console.log('Estudante 2');
 mostraHabilidade(student2)

  let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  function listSkills(student) {
    let arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
      console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };
  let person = {
    name:'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);
  console.log(lastName);