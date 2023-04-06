// Var type boolean true | false

var isEnable = false;
var test = 'Tony';

console.log(isEnable)
console.log(test)

// array - index

var names = ['Azul', 'Verde', 'Amarelo'];
console.log(names)
console.log(names[3])

names.push('Branco') // adicionando item ao array
console.log(names[3])
console.log(names.length)

var teams = new Array();
teams.push('Brazil')
console.log(teams)

// IF - condicional

function testName(name){
  if(name.length > 10){
      return 'nome grande'
  } else {
    return 'nome pequeno'
  }
}

console.log(testName('Tony Lima dos Santos'))

function isEqual(name) {
  if(name === 'Tony'){
    return 'É igual a Tony'
  } else if (name === 'Azul'){
    return 'É igual a Azul'
  } else {
    return 'Não é igual a nenhum'
  }
  console.log('OLÁAA PESSOOOAAAAL') //não será renderizado
}

console.log(testName('Tony'))

console.log(isEqual('Azul'))
