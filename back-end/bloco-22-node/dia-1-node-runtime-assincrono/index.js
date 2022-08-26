const brlValue = require('./brlValue');

console.log(brlValue);

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7

const usd = 10;
const brl = brlValue.usdToBrl(usd);

console.log(brl);