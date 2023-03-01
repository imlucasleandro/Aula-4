//Criando array com colchetes
var marcas = ["Prada", "Louis Vuitton", "Valentino"];
//Criando array com construtor 
//Aqui esta importando o construtor Array
var marcas = new Array("Prada", "Louis Vuitton", "Valentino");

console.log(typeof marcas) // revela o tipo de elementos dentro de um A

var frutas = new Array("Maçã", "Pêra", "Laranja", "Uva", "Manga");
console.log(frutas)
console.log(frutas[2])
console.log(frutas[4])

frutas[2] = "Banana";
console.log(frutas)

frutas.push("Maracujá") // adiciona elementos no final do Array
console.log(frutas)

frutas.unshift("Maracujá") // adiciona elementos a primeira posilção do Array
console.log(frutas)

frutas.pop() // remove o ultimo elemento do Array

frutas.shift() // remove elementos do Array
console.log(frutas)
console.log(frutas.length) // retorna a quantidade de elementos no array
console.log(frutas.reverse()) // inverte a ordem o Array
console.log(frutas.toString()) // transfora o array numa string
console.log(frutas.join(" - ")) // transforma o array numa string e permite adicionar texto entre os elementos

let vetor = [1,2,3,4,5,6,7,8,9,10]
vetor[vetor.length - 5] = undefined // pode remover numeros dependendo do comando
console.log(vetor)




