const dadosDoRafa = {
  nome: 'Rafael',
  sobreNome: 'Martins',
  temFilho: false,
  anoTrybe: 2022,
};

const propriedadeObj = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  }
  if (type === 'values') {
    return Object.values(object);
  }
  if (type === 'entries') {
    return Object.entries(object);
  }
};

console.log(propriedadeObj('entries' , dadosDoRafa));

console.log(propriedadeObj('values', dadosDoRafa));
