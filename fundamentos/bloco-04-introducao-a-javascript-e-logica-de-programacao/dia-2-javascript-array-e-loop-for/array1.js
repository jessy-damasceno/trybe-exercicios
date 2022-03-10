// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i+= 1){
//     console.log(numbers[i]);
// }

let valorInicial = 1;
let valorFinal = 125;
let contador = 0;

// for (let i = valorInicial; i < valorFinal; i+= 1)
for (valorInicial; valorInicial <= valorFinal; valorInicial += 1 )
    if (valorInicial % 3 === 0) {
        contador += 1;
        valorInicial += 1;      
    } else {
        valorInicial += 1;
    }

console.log(contador);