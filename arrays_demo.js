
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

const listaN = [1,2,3,4,5];

listaX3 = listaN.map(n => n * 3);
console.log(listaX3);


/** REDUCE 
 * recebe uma função com os seguintes parâmetros (acumulador, valorAtual, indice, array) 
 * pode ainda receber o valor inicial no segundo parâmetro
 * 
 * existe ainda o reduceRight que itera da direita para a esquerda ou seja do final do array ao início.
*/

const numeros = [2, 4, 6];

const soma = numeros.reduce( (acc, atual) => acc + atual);
//const soma = numeros.reduce( (acc, atual) => acc + atual, 8 ); // começando com 8 por exemplo retorna 20

console.log(soma);


const maiorValor = numeros.reduce( (prev, atual) => {
    return prev > atual? prev : atual;
});

console.log(maiorValor);


/** SOME
 * Se pelo menos um item da iteração retornar true, retorna true
 */
const cidades = ['Curitiba', 'Joinville', 'São Paulo'];

const temJoinville = cidades.some( item => item == 'Joinville');
console.log(temJoinville);

/** EVERY 
 * Todas as iterações devem retornar true para ser true
*/
const todosString = cidades.every( (cid) => {
    return isNaN(cid);
} );
console.log(todosString);


/** FIND
 * Retorna o elemento quando quando retornar true da função de callback
 */
const outrosNumeros = [2,4,8,9,20];
const primeiroMaiorQue7 = outrosNumeros.find( n => n > 7 );
console.log(primeiroMaiorQue7);

const primeiroIndexMaiorQue7 = outrosNumeros.findIndex( n => n > 7 );
console.log(primeiroIndexMaiorQue7);

/** FILTER 
 * Retorna array com todos que foram true
*/

const maioresQue7 = outrosNumeros.filter( n => n > 7 );
console.log(maioresQue7);

