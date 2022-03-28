const salarioBruto = 3000;

let aliquotaINSS;
let aliquotaIR;

// <----- CÁLCULO DA ALÍQUOTA INSS ----->

if (salarioBruto <= 1556.95) {
    aliquotaINSS = salarioBruto * 0.08;

} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;

} else if (salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;

} else {
    aliquotaINSS = 570.88;
}

// <----- CÁLCULO DO SALÁRIO BASE ----->

const salarioBase = salarioBruto - aliquotaINSS;

console.log("Salário-base (bruto - INSS): R$ " + salarioBase);

// <----- CÁLCULO DA ALÍQUOTA IR ----->

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;

} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.8;

} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.8;

} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
    
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log('IR: R$ ' + aliquotaIR);

// <----- Salário Líquido ----->

const salarioLiquido = salarioBase - aliquotaIR;

console.log('Salário Líquido: R$ ' + salarioLiquido);