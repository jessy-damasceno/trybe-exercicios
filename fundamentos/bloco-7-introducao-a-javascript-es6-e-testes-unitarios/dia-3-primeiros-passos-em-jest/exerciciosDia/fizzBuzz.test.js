const myFizzBuzz = require('./fizzBuzz');

describe('Testando a função myFizzBuzz()', () => {
  it('1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  it('3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  })

  it('4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(11)).toBe(11);
  })

  it('5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('11')).toBe(false);
  })
})