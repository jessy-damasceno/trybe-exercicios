const readline = require('readline-sync');

const bmi = () => {
  const w = readline.questionInt('What\'s your weight? (kg) ');
  const h = readline.questionInt('What\'s your height? (cm) ');
  return (w / ((h / 100) ** 2)).toFixed(2);
}

console.log(bmi(70, 1.72));