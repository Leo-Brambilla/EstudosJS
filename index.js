// criando um array

var frutas = ['Maçã', 'Banana'];
console.log(frutas.length);

//acessar um item (index) do Array
var primeiro = frutas[0];
console.log(primeiro);
var ultimo = frutas[frutas.length -1];
console.log(ultimo);

//Iterar um Array
frutas.forEach(function(item, indice, array){
    console.log(item, indice)
});

//Adicionar um item ao final do Array
var adicionar = frutas.push('Laranja')
console.log(frutas);

//Remover um item do final do Array
var ultimo = frutas.pop();
console.log(frutas);

//Adiocionar ao inicio do array
var adicionar = frutas.unshift('Morango')
console.log(frutas);

//Procurar o indice de um item no Array
frutas.push('Manga');

var pos = frutas.indexOf('Banana');
console.log(pos)

//remover um item pela posição do indice
var removerItem = frutas.splice(pos, 1);
console.log(removerItem);

//Remover itens de uma posição de indice
var vegetais = [ 'Repolho', 'Nabo', 'Rabanete', 'Cenoura']
console.log(vegetais);

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n)
//Isso é como se faz para remover itens, n define o número de itens a se remover
// a partir da posição (po) em direção ao fim da array.
console.log(vegetais)
console.log(itensRemovidos)

//copiar um array
var copiar = frutas.slice(); // é assim que se copia




