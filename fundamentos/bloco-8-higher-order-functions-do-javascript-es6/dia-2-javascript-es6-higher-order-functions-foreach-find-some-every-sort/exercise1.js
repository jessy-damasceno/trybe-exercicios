const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// const firstBirth1947 = books.find((obj) => obj.author.birthYear === 1947);

// console.log(firstBirth1947.author.name);

// 2 - Retorne o nome do livro de menor nome.

const smallerName = () => {
  let smallerBook = books[0].name;
  books.forEach((book) => {
    if (smallerBook.length > book['name'].length) smallerBook = book.name;
  });
  return smallerBook;
};

console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = (array) =>
  array.find((element) => element.name.length === 26);

// console.log(getNamedBook(books));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const booksOrderedByReleaseYearDesc = (array) =>
  array.sort((a, b) => {
    return b.releaseYear - a.releaseYear;
  });
const sortedBooks = booksOrderedByReleaseYearDesc(books);
// console.log(sortedBooks);
sortedBooks.forEach((element) => console.log(element.releaseYear));

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. séc. XX ... entre 1901 a 2000

const everyoneWasBornOnSecXX = () =>
  books.every(
    (element) =>
      element.author.birthYear >= 1901 || element.author.birthYear <= 2000
  );

const every =
  everyoneWasBornOnSecXX() === false
    ? `Nem todas as pessoas autoras nasceram no século XX.`
    : `Todas as pessoas autoras nasceram no século XX.`;

console.log(every);

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const someBookWasReleaseOnThe80s = () =>
  books.some(
    (element) => element.releaseYear >= 1980 || element.releaseYear <= 1989
  ) === true
    ? `Algum livro foi lançado na década de 80.`
    : `Nenhum livro foi lançado na década de 80.`;

console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const authorUnique = () => {
  return books.every((element) =>
    books.some((elementSome) => 
    (element.author.birthYear === elementSome.author.birthYear) && (element.author.name !== elementSome.author.name)
    )
  );
};

console.log(authorUnique());
