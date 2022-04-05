const allLessons = {
  lesson1: {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
  },
  lesson2: {
    materia: "História",
    numeroEstudantes: 20,
    professor: "Carlos",
  },
  lesson3: {
    materia: "Matemática",
    numeroEstudantes: 10,
    professor: "Maria Clara",
    turno: "noite",
  },
};

// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const totalStudents = (obj) =>
  Object.keys(obj).reduce((acc, cur) => acc + obj[cur].numeroEstudantes, 0);

const studentsForClasses = (key, value) => {
  const obj = {};
  for (index in allLessons) {
    if (allLessons[index][key] === value) {
      obj[index] = allLessons[index];
    }
  }
  console.log(totalStudents(obj));
};

studentsForClasses('materia', "Matemática");

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const createReport = (object, professor) => {
  const obj = {};
  for (index in object) {
    if (allLessons[index].professor === professor) {
      obj[index] = allLessons[index];
    }
  }

  const objRelatorio = {
    professor,
    aulas: [Object.keys(obj)],
    estudantes: totalStudents(object),
  };
  return objRelatorio
};

console.log(createReport(allLessons, 'Maria Clara'));