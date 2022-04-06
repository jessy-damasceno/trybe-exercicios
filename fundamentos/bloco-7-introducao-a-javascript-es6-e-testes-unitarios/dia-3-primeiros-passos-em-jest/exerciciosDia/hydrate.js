function hydrate(string) {
  let soma = 0;

  for (let index of string.match(/(\d+)/g)) {
    soma += Number(index);
  }

  return `${soma} cop${soma > 1 ? 'os' : 'o'} de água`
}

module.exports = hydrate;