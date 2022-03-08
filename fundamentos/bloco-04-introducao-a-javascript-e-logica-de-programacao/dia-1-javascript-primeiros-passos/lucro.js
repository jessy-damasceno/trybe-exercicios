const valorCusto = 200;
const valorVenda = 500;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('ERRO. Valores inválidos.');

} else {
    const valorCustoTotal = valorCusto + (valorCusto*0.2);
    const lucro = (valorVenda - valorCustoTotal)*1000;
    console.log('Lucro total por mil peças vendidas: R$ ' + lucro);
    
}