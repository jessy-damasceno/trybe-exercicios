// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// <----- CONSTRUÇÃO DO ARRAY ----->

let array = [];
let NumQtd = 50;

for (let i = 1; i <= NumQtd; i++) {
    array.push(Math.floor(Math.random()*1000));
}

console.log(array);

// <----- RETURN PRIMOS E MAIOR NÚMERO PRIMO ----->

let cousinNumbers = [];
let maiorPrimo = 0;

for (let i = 0; i < array.length -1; i += 1) {
    let count = 0;
    // console.log(array[i]);
    for (let j = 1; j <= array[i]; j +=1) {
       if (array[i] % j == 0) {
           count ++;
       }
    }
    if (count == 2) {
        cousinNumbers.push(array[i]); }

    if (count == 2 && maiorPrimo < array[i])
        maiorPrimo = array[i];
}

console.log(cousinNumbers);
console.log("Maior Primo: " + maiorPrimo);