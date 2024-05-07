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
count.ef = 'fr'

console.log(count.odin)
console.log(count)
console.log('обращаемся к свойству:' + count.e)
console.log(`обращение к свойству через квадрат. скобки: ${count['likebirds']} `)
console.log('обращение к свойству через квадрат. скобки:' + count['likebirds'])



// добавление свойства по значению переменной
let dlya = 'awda';

let user = {
  name: [1, 2],
  age: 30,
  'aef': 'qwe'
};
user[dlya] = 'hi';
user.age = 123;

console.log(user)
console.log(user.awda)
console.log(user['awda'])

function prikin(a, b) {
  return a, b
}
console.log(prikin())

console.log('age' in user)

for (let ran in user) {
  console.log(user[ran])
} //получаем значения свойства
for (let ran in user) {
  console.log(ran)
}// получаем ключи свойства или имя свойства

let obj = {};
obj.age = 1;
obj['name'] = 'John';
let surname = 'surname';
obj.sur = 'prikin';
obj[surname] = surname

// obj.name = 'Pete';
// delete obj.name;

console.log(obj)
console.log(obj.age = 2)
console.log(obj)

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
let keyName = salaries.Ann
console.log(keyName)

for (let keyName in salaries) {
  //let keyName = Ann 
  sum = sum + salaries[keyName]
}

console.log(sum)

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    } else if (typeof obj[key] === 'string') {
      obj[key] += ' прикинь'
    }
  }
  return obj
}

console.log(multiplyNumeric(menu))

function declaration1() {
  (() => { console.log('arrow') })();
  (function () { console.log('noarrow') })()
  console.log('я живой')
}
declaration1()

let expretion2 = function () {
  let arrow = () => { console.log('exp arrow') }
  console.log('hi')
  return arrow()
}
expretion2()

// получение значения через переменные

const twoLevel = {
  qwe: 1,
  qwer: 2,
  qwerty: {
    qwertyu: 33333
  }
}

let asdf = 'qwerty'
let asdfg = 'qwertyu'

console.log(twoLevel.qwerty.qwertyu)
console.log(twoLevel[asdf][asdfg])