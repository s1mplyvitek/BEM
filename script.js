// массив

let test = ['odin', 'dva', '3', 4];

// объект
let count = {
  likebirds: 'я значение этого свойства',
  'like birds': 1
};
// добавление свойства
count[test[0]] = 'через массив'
count['e'] = test[1];

console.log(count.odin)
console.log(count)
console.log('обращаемся к свойству:' + count.e)
console.log(`обращение к свойству через квадрат. 
скобки: ${count['likebirds']} `)
console.log('обращение к свойству через квадрат. скобки:' + count['likebirds'])



// добавление свойства по значению переменной
let dlya = 'awda';

let user = {
  name,
  age: 30,
  'aef': 'qwe'
};
user[dlya] = 'hi';
user.age = 123;

console.log(user)
console.log(user.awda)
console.log(user['awda'])




