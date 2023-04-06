// var nomeDaVariavel = 'Olá Tony';

// function testVariables() {
//   console.log(nomeDaVariavel);
// }

// testVariables();

// var é uma palavra reservada GLOBAL, é usada poucas vezes, raramente! no lugar de var vamos utilizar const ou let

// ###############################################################################

// var nomeDaVariavel = 'Olá Tony';

// function testVariables() {
//   console.log('Estou dentro da testVariables');

//   function testGlobal() {
//     console.log(nomeDaVariave);
//   }

//   testGlobal();
// }

// testVariables();

// ###############################################################################

// function testVariables(){
//   let name = 'Joãozinho';
//   console.log(name);
// }

// function testGlobal(){
//   let name = 'Mariazinha';
//   console.log(name);
// }

// testVariables();
// testGlobal();

// ###############################################################################

// function imprimeNome(nome) {
//   console.log(nome);
// }

// imprimeNome('Tony');

const imprimeNome = (nome) => console.log(nome); //mesma função escrita de forma menos verbosa

imprimeNome('Tonyzin');
