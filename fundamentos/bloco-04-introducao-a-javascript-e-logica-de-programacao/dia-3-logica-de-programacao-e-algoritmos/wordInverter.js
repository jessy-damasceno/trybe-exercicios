let word = 'banana';
let newWord = '';

for (i = word.length -1; i >= 0; i -= 1) {
    newWord = newWord + word[i];
}

console.log(newWord);