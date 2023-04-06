const names = ['Tony', 'Joao', 'Maria', 'Mara'];

console.log(names);

const personObj = {
  age: 33,
  withBonus: true,
  movies: [
    'Interestellar',
    'Matrix',
    'Ghost'
  ]
}

console.log(personObj.movies) 
console.log(names[1])

// navegando entre as chaves no objeto >>> console.log(personObj.name Tony, 
// outra forma seria personObj.movies ['Interestellar', 'Matrix', 'Ghost'])

// navegando entre os itens no array >>> names[1] Joao

// findNmae / findIndex

const findName = names.findIndex(name => name === 'Tony')

if(findName > -1){
  console.log('Tony foi a aula.')
}else{
  console.log('Tony faltou!')
}

console.log(findName);

// alterando nome do obj

personObj.name = 'Azulyno'

console.log(personObj);

// adicionando itens e pessoas ao objeto

personMara = {
  ...personObj,
  name: 'Mara',
  genre: 'female'
}

personTony = {
  ...personObj,
  name: 'Tony',
  genre: 'male'
}

console.log(personMara);
console.log(personTony)


//obs.: conceitos importantes no JavaScript ヽ(♡‿♡)ノ