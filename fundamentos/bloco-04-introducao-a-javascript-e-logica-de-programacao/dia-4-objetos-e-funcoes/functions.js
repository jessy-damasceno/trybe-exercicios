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

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaiorValor(array) {
  let maior = 0;

  for (i = 0; i < array.length -1; i += 1) {
    if (array[i] > array[maior]) {
      maior = i;
    }
  }
  
  return maior;
}

console.log(indiceDoMaiorValor([2000, 3000, 6, 200, 10, 1]));

