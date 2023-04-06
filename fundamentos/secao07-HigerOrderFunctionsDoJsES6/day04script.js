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