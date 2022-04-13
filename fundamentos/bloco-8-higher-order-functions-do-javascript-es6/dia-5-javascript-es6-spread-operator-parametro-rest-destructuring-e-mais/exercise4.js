// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
// const filterPeople = (array) => {
//   return array.reduce((acc, { name, bornIn, nationality }) => {
//     if (bornIn < 2000 && nationality.includes('Aust')) {
//       acc += `${name}, `
//     }
//     return acc;
//   }, 'Nome de pessoas australianas nascidas no século 20: ')
// }

const filterPeople = (array) => array.filter(({ bornIn, nationality }) => bornIn < 2000 && nationality.includes('Aust'));

console.log(filterPeople(people));