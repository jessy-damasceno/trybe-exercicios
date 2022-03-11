// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function ifPalindromo(word) {
  let wordReverse = word.split("").reverse().join(""); // Valeu MDN \o/ !!!!!!!!!

  if (wordReverse === word) {
    return true;
  } else {
    return false;
  }
}

console.log(ifPalindromo("ananana"));