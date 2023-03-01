/* Obtenha o valor “Serviços” do array menu:  */
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);


/* Procure o índice do valor “Portfólio” do array menu:  */
let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio')

/* Adicione o valor “Contato” no final do array menu.  */
menu1.push('Contato');

console.log(indexOfPortfolio);
console.log(menu1);

/* Utilize o for para imprimir os elementos da lista groceryList com o console.log(): */
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index=0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}
/* Utilize o for/of para imprimir os elementos da lista names com o console.log():  */
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){ 
    console.log(name);
}

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
 (sum += fruits[index]);
}
console.log(sum);

/* Exercicios */
  /* Percorra o array imprimindo todos os valores contidos nele com a função console.log() */
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    }


/* Some todos os valores contidos no array e imprima o resultado.  */
let Sum = 0 
for (let index = 0; index < numbers.length; index += 1) {
    Sum += numbers[index]
} console.log(Sum);
/* Calcule e imprima a média aritmética dos valores contidos no array.
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let Sum = 0 
for (let index = 0; index < numbers.length; index += 1) {
    Sum += numbers[index]
}
let arithmeticAverage = Sum / numbers.length;
console.log(arithmeticAverage);

/* Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.  */
if (arithmeticAverage > 20) {
    console.log('Valor maior que 20');
} else {console.log("Valor menor ou igual a 20");}
/* Utilizando for, descubra o maior valor contido no array e imprima-o. */
let highestNumber = numbers [0]
for( let index = 1; index < numbers.length; index += 1) { 
    if (highestNumber < numbers[index]) { highestNumber = numbers[index]}
}
console.log(highestNumber);
/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.  */
let oddValue = 0
for (index = 0; index < numbers.length; index +=1){
    if(numbers[index] % 2 !== 0) {
        oddValue += 1 } 
    }
    if ( oddValue === 0){
        console.log('Nenhum valor impar encontrado');}
        else { console.log(oddValue);}
    /* Utilizando for, descubra o menor valor contido no array e imprima-o.  */
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = 30
for (let index = 0; index < index.length; index += 1 ) {
    if ( numbers[index] < lowerValue) {
        lowerValue = numbers[index]
    }
}
console.log(lowerValue);
    
