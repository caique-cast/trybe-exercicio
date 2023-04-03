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
  const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade > 50); // 73

const idades2 = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades2.find((idade) => idade === 33); // undefined