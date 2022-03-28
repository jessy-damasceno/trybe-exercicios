function hydrate(string) {
    let soma = 0;
  
    for (let index of string.match(/(\d+)/g)) {
      soma += Number(index);
    }

    return `${soma} copo${soma > 1 ? 's ' : ' '}de água`
  }
  
//   console.log(hydrate('1 copo de cerveja, 0 vinho, 1 água'));

let string = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let phone = '(xx) xxxxx-xxxx';

for (i of string) {
phone = phone.replace('x', i)
}
console.log(phone);

let cpf = 'xxx.xxx.xxx-xx'
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (number of array) {
    cpf = cpf.replace('x', number)
}
console.log(`CPF: ${cpf}`);