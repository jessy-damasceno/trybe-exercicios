const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNoite = (obj, key, value) => obj[key] = value;
addNoite(lesson2, 'turno', 'noite');
// console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keysOfObj = (obj) => console.log(Object.keys(obj));
// keysOfObj(lesson2);

// 3. Crie uma função para mostrar o tamanho de um objeto.

const lengthOfObj = (obj) => console.log(Object.keys(obj).length);
// lengthOfObj(lesson1);

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valuesOfObj = (obj) => console.log(Object.values(obj));
// valuesOfObj(lesson2);

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.

const allLessons = {lesson1, lesson2, lesson3};
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const totalStudents = (obj) => {
//   let total = 0;
//   for (key in obj) {
//     total += obj[key].numeroEstudantes;
//   }
//   console.log(`O total de estudantes é: ${total}`);
// }

// const totalStudents = (obj) =>
//   Object.keys(obj).reduce((acc, cur) => acc + obj[cur].numeroEstudantes, inicial);

// console.log(totalStudents(allLessons));

/* <--------------------------> */

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue);

// console.log(sumWithInitial);
// expected output: 10

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (lesson, position) => {
  const obj = Object.values(lesson)[position];
  console.log(obj);
  // const obj = lesson[Object.keys(lesson)[position]];
  // console.log(obj);
}

// getValueByNumber(lesson3, 3);

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (lesson, key, value) => lesson[key] === value;

console.log(verifyPair(lesson1, 'maluco'));