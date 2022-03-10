let numero = 10;
let fatorial = 1;

for (i = numero; i > 0; i -= 1) {
    fatorial = fatorial * i;
}

console.log(numero + '! = ' + fatorial);