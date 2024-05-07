"use strict";
console.log('Hello TypeScript');
//тип число
let chislo = 123;
console.log(chislo);
chislo = +'1';
chislo = Number('321');
console.log(chislo);
let n1;
n1 = 12;
console.log(n1);
//тип строка
const stroka = 'im string';
console.log(stroka);
let stroka3;
const stroka1 = String(stroka3);
console.log(stroka1);
// тип булевый 
const bool = true;
console.log(bool, typeof bool);
document.querySelector('.ts').textContent = stroka; // запрос к селектору с классом 'ts' и изменить контент на stroka
const getContent = +document.querySelector('.ts').textContent;
console.log(getContent, typeof getContent);
const getContent1 = document.querySelector('.ts').textContent = 'qwertyu';
// получуит value из input
const input = document.querySelector('.input').value;
console.log(input);
const input1 = document.querySelector('.input');
console.log(input1.value);
const input2 = document.querySelector('.input');
console.log(input1.value = 'asdf');
//Функции
// возвращаемый тип
function ts() {
    const qwe = 135;
    return qwe;
}
console.log(ts());
// процедура
function proc() {
    document.querySelector('.ts').textContent = 'procedura';
}
proc();
// Аргументы
function arg(a, b) {
    return a + b;
}
console.log(arg(2, 2));
function arg1(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(arg1(3));
// несколько типов значений
function moreType(email) {
    if (email.indexOf('@') !== -1)
        return email.toLowerCase();
    return false;
}
console.log(moreType('afefefefFFFFF'));
// стрелочные функции
const strelka = (a, b) => {
    return a + b;
};
const strelkaSimple = (a, b) => a + b;
console.log(strelka(1, 2));
console.log(strelkaSimple(2, 2));
const sS = (a = 4, b = 1) => a + b;
console.log(sS());
function funcT(arg) {
    return { arg };
}
// массивы 
const arr01 = [1, 2];
arr01.push(123);
console.log(arr01);
const arr2 = [1, 2, 3];
// arr2.push(11)
console.log(arr2);
//декомпозиция, деструктуризация
const arr3 = [2, 3, 4, 5];
const [a, b, ...c] = arr3;
console.log(a, b, c);
const arr4 = [[1, 2], [1, 2]];
const arr5 = [];
arr5[0] = [11, 22];
console.log(arr5);
arr5.push([11, 33]);
console.log(arr5);
console.log(arr5[1][1]); //33
//несколько типов в массиве 
const arr6 = [2, '2', 3, 'a'];
console.log(arr6);
const arr7 = [3, 'qwe'];
console.log(arr7);
const arr11 = [1, 2, [1, 2, 3, 4]];
console.log(arr11);
// кортежи
const cort1 = ['qwwe', 55]; //первые значения должны совпадать с указаными типами и справа должно быть ровно столько сколько есть типов но при пуше не возникает ошибок
console.log(cort1);
cort1.push(22);
cort1.push('zxc');
console.log(cort1);
const cort2 = ['qwe', 2];
console.log(cort2);
const cort3 = [12, 'qwe', 'qwee'];
console.log(cort3);
const arr12 = [1, [1, 2, 3]];
console.log(arr12);
//объекты
const obj = {
    name: 'qwe',
    age: 19,
    lastName: 'asf'
};
console.log(obj);
// объект как аргумент функции
function user(peremenaya) {
    console.log(peremenaya.age);
}
const obj2 = { name: 'asd', age: 11, 'test': false };
user(obj2);
// декомпозиция
function adg({ name, age }) {
    console.log(name, age);
}
adg(obj);
let userT;
userT = {
    age: 1,
    name: 'awd'
};
const more = {
    qwe: 'awddd'
};
const all = {
    ...userT, ...more
};
console.log(all);
const asd = {
    age: 2,
    lasd: 'asd',
    name: 'wdw'
};
const us = {
    age: 2,
    name: 'awdd',
    lastN: 'kh'
};
//# sourceMappingURL=script.js.map