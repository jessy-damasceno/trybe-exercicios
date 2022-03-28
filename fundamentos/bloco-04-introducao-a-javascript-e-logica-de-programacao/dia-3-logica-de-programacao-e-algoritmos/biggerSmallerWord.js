// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggerWord = '';
let smallerWord = array[0];

for (let i = 0; i < array.length; i++) {
    if (biggerWord.length < array[i].length) {
        biggerWord = array[i];
    }

    if (smallerWord.length > array[i].length) {
        smallerWord = array[i];
    }
}

console.log('MAIOR PALAVRA:', biggerWord);
console.log('MENOR PALAVRA:', smallerWord);