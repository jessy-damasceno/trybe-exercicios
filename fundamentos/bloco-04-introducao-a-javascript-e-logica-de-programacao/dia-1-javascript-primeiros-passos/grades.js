const grade = 71;

if (grade < 0 || grade > 100) {
    console.log('ERRO. Nota inválida');

}   else if (grade >= 90) {
    console.log('A');

}   else if (grade >= 80 && grade < 90) {
    console.log('B');

}   else if (grade >= 70 && grade < 80) {
    console.log('C');

}   else if (grade >= 60 && grade < 70) {
    console.log('D');
    
}   else if (grade >= 50 && grade < 60) {
    console.log('E');
    
}   else
    console.log('F');