
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

const numerosAleatorios = [1,2,3,4,5,6];

numerosDobrados = numerosAleatorios.map( (num) => {
    return num * 2;
});

console.log(numerosDobrados);

/** Exemplo de gerador para números aleatórios sem repetição */
numerosMega = numerosAleatorios.map( (num, index, lista) => {
    let novoNum = (Math.random() * 60).toFixed();
    while(lista.find(item => item == novoNum) || novoNum == 0) {
        //console.log('ja tem', novoNum, lista);
        novoNum = (Math.random() * 60).toFixed();
    }
    lista[index] = novoNum;
    return novoNum;
});

// Ordena os números do array em ordem ascendente :)
numerosMega = numerosMega.sort((a, b) => (a-b));

console.log('Seus números da sorte são: ', numerosMega);

