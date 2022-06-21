let { getRandomNumber } = require('./service');

describe('Crie uma função que gere um número aleatório', () => {

  getRandomNumber = jest.fn().mockReturnValue(10);
  
  it('Teste se a função foi chamada.', () => {
    getRandomNumber();
    expect(getRandomNumber).toHaveBeenCalled();
  })

  it('Teste o retorno da função.', () => {
    expect(getRandomNumber()).toBe(10);
  })

  it('Teste se a função foi chamada duas vezes.', () => {
    expect(getRandomNumber).toHaveBeenCalledTimes(2);
  })
});

describe('Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.', () => {
  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    getRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    const atual = getRandomNumber(10, 2);
    expect(atual).toBe(5);
  });

  it('Verifique se a aplicação da nova implementação acontece apenas uma vez.', () => {
    const atual = getRandomNumber(10, 2);
    expect(atual).not.toBe(5);
  })
})