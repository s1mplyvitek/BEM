console.log('Hello TypeScript');

//тип число

let chislo: number = 123;
console.log(chislo);

chislo = +'1';
chislo = Number('321');
console.log(chislo)

let n1: number;
n1 = 12;
console.log(n1);

//тип строка

const stroka: string = 'im string';
console.log(stroka);
let stroka3: any;
const stroka1 = String(stroka3);
console.log(stroka1);

// тип булевый 

const bool: boolean = true;
console.log(bool, typeof bool);


document.querySelector('.ts').textContent = stroka // запрос к селектору с классом 'ts' и изменить контент на stroka
const getContent: number = +document.querySelector('.ts').textContent;
console.log(getContent, typeof getContent)
const getContent1: string = document.querySelector('.ts').textContent = 'qwertyu';

// получуит value из input

const input = (<HTMLInputElement>document.querySelector('.input')).value;
console.log(input);
const input1 = <HTMLInputElement>document.querySelector('.input');
console.log(input1.value);
const input2 = document.querySelector('.input') as HTMLInputElement;
console.log(input1.value = 'asdf')


//Функции

// возвращаемый тип
function ts(): number {
    const qwe = 135
    return qwe
}

console.log(ts())

// процедура

function proc(): void {
    document.querySelector('.ts').textContent = 'procedura'
}

proc()

// Аргументы

function arg(a: number, b: number): number {
    return a + b
}

console.log(arg(2, 2))

function arg1(a: number, b?: number): number {
    if (b) { return a + b }
    else { return a }

}

console.log(arg1(3));

// несколько типов значений

function moreType(email: string): string | boolean {
    if (email.indexOf('@') !== -1)
        return email.toLowerCase();
    return false
}

console.log(moreType('afefefefFFFFF'))

// стрелочные функции

const strelka = (a: number, b: number): number => {
    return a + b
}

const strelkaSimple = (a: number, b: number): number => a + b


console.log(strelka(1, 2))
console.log(strelkaSimple(2, 2))


const sS = (a: number = 4, b: number = 1): number => a + b

console.log(sS())

type TypeFunc = {
    arg: number
}

function funcT(arg: number): TypeFunc {
    return { arg }
}


// массивы 

const arr01: number[] = [1, 2];
arr01.push(123)
console.log(arr01)

const arr2: readonly number[] = [1, 2, 3];
// arr2.push(11)
console.log(arr2)

//декомпозиция, деструктуризация

const arr3: number[] = [2, 3, 4, 5];
const [a, b, ...c] = arr3;
console.log(a, b, c)

const arr4: number[][] = [[1, 2], [1, 2]];
const arr5: number[][] = [];
arr5[0] = [11, 22];
console.log(arr5);
arr5.push([11, 33])
console.log(arr5)
console.log(arr5[1][1])//33

//несколько типов в массиве 

const arr6: (number | string)[] = [2, '2', 3, 'a'];
console.log(arr6);
const arr7: Array<number | string> = [3, 'qwe'];
console.log(arr7);

const arr11: (number | number[])[] = [1, 2, [1, 2, 3, 4]];
console.log(arr11)


// кортежи

const cort1: [string, number] = ['qwwe', 55];//первые значения должны совпадать с указаными типами и справа должно быть ровно столько сколько есть типов но при пуше не возникает ошибок
console.log(cort1);
cort1.push(22);
cort1.push('zxc');
console.log(cort1)

const cort2: [string, number, boolean?] = ['qwe', 2];
console.log(cort2);

const cort3: [number, ...string[]] = [12, 'qwe', 'qwee'];
console.log(cort3)

const arr12: [number, number[]] = [1, [1, 2, 3]];
console.log(arr12)

//объекты

const obj: { name: string, age: number, lastName: string, firstName?: string } = {
    name: 'qwe',
    age: 19,
    lastName: 'asf'
};
console.log(obj);

// объект как аргумент функции

function user(peremenaya: { name: string, age: number, lastName?: string }) {
    console.log(peremenaya.age)
}

const obj2 = { name: 'asd', age: 11, 'test': false };

user(obj2);

// декомпозиция

function adg({ name, age }: { name: string, age: number }) {
    console.log(name, age)
}

adg(obj)

// тоже объекты

type TypeUser = {
    name: string
    age: number
}

type TypeMore = {
    qwe: string
}

let userT: TypeUser

userT = {
    age: 1,
    name: 'awd'
}

const more: TypeMore = {
    qwe: 'awddd'
}

const all: TypeMore & TypeUser = {
    ...userT, ...more
}
console.log(all)

// интерфейс

interface IUser extends IUser2 {
    name: string
    age: number
}
interface IUser2 {
    lasd: string

}

const asd: IUser = {
    age: 2,
    lasd: 'asd',
    name: 'wdw'
}




type TypeU = {
    name: string
    age: number
} & TypeU2

type TypeU2 = {
    lastN: string
} | TypeU3
type TypeU3 = {
    lastNa: string
}

const us: TypeU = {
    age: 2,
    name: 'awdd',
    lastN: 'kh'
}








