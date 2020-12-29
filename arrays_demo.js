
const marcas = ["HP", "Lenovo", "Samsung", "Apple", "Accer"];

/** Função forEach */

marcas.forEach( (marca, index) => {
    console.log(index, marca);
});

// forEach recebe uma função com os seguintes parâmetros ( item, indice e referência ao array) retorna sempre undefined
let ret = marcas.forEach( (marca, index, array) => {
    console.log(index+1 + ' de ' + array.length, marca);
    array[index] = marca.toUpperCase();    
});

//itens uppercase da iteração anterior
marcas.forEach( (marca, index, array) => {
    console.log(index+1 + ' de ' + array.length, marca);
});

/** Função map 
 * recebe uma função com os seguintes parâmetros ( item, indice e referência ao array) retorna 
 * a array modificada */
const marcasLowerCase = marcas.map( (marca) => {
  return marca.toLowerCase();
});

console.log(marcasLowerCase);