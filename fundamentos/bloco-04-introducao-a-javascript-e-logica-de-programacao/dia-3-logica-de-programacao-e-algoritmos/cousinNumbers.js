// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// <----- CONSTRUÇÃO DO ARRAY ----->

let array = [];
let NumQtd = 50;

for (let i = 0; i <= NumQtd; i++) {
    array.push(i);  
}

console.log(array);
// <----- RETURN MAIOR NÚMERO PRIMO ----->
let count = 0;
let cousin = 0;

for (let i = array[array.length-1]; i > 1; i -= 1) {
    for (let j = 2; j < array.length -1; j +=1) {
        if (array[i] % j === 0){
            count += 1;
        }
        console.log('array[i]:',array[i] + ' j:', j + ' contador:',count);
    }

}