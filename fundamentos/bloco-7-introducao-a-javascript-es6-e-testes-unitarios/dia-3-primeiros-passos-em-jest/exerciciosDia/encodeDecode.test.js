const {encode, decode} = require('./encodeDecode');

describe('Testando encode e decode', () => {
  it('1. Teste se encode e decode são funções;', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  })

  it('2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toEqual('12345');
  })

  it('3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toEqual('aeiou');
  })

  it('4. Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('aeiouDBz')).toEqual('12345DBz');
    expect(decode('qwt12345')).toEqual('qwtaeiou');
  })

  it('5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('abacate')).toHaveLength(7);
    expect(decode('irineu')).toHaveLength(6);
  })
})