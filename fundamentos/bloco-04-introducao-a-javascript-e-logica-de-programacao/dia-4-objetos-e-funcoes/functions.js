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

  for (i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[maior]) {
      maior = i;
    }
  }

  return maior;
}

console.log(indiceDoMaiorValor([2000, 3000, 6, 200, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMenorValor(array) {
  let menor = 0;

  for (i in array) {
    if (array[menor] > array[i]) {
      menor = i;
    }
  }
  return menor;
}

console.log(indiceDoMenorValor([2, 4, 6, -70000000, -10000, 0, -300]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function nomeMaiorCaracteres(nomes) {
  let maiorPalavra = nomes[0];
  
  for (i in nomes) {
    if (nomes[i].length > maiorPalavra.length) {
      maiorPalavra = nomes[i];
  }
}
  return maiorPalavra;
}

console.log(nomeMaiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));