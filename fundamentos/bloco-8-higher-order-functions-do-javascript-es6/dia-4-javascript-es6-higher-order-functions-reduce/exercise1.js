// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((novoArray, element) => {
  element.forEach((arrayItem) => {
    novoArray.push(arrayItem);
  });
  return novoArray;
}, []);

console.log(flatten());