function techList(tecnologias, nome) {
  tecnologias.sort();

  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tecnologias.length; i += 1) {
    tecnologias[i] = { tech: tecnologias[i], name: nome };
  }

  return tecnologias;
}

module.exports = techList;
