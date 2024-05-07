console.log('ts2 tut')

//enam

enum EnumRoles {
    ADMIN, GUEST, USER
}
interface IUsers {
    role: EnumRoles
}
const Roles: IUsers = {
    role: EnumRoles.ADMIN
}


const enum EnamColors {
    blue, green
}
interface IUsersColor {
    color: EnamColors
}
const Colors: IUsersColor = {
    color: EnamColors.blue
}

// утверждение

const inputElement2 = (document.querySelector('.tut') as HTMLInputElement).value;
// const value = (inputElement2 as HTMLInputElement);
// const value2 = (<HTMLInputElement>inputElement).value;
console.log(inputElement2)

// generic

function entity<T>(args: T): T {
    return args
}
const arowEntity = <T>(args: T): T => { return args }

entity<number>(1)
entity<string>('qwe')

interface IPair<K, V> {
    key: K
    value: V
}

const pair1: IPair<number, string> = {
    key: 1,
    value: 'qwe'
}
const pair2: IPair<number, number> = {
    key: 1,
    value: 2
}
const pair3: IPair<string, string> = {
    key: '1',
    value: 'qwe'
}

//утилиты типов

interface ICar {
    id: number
    name: string
    price: number
}

interface ICarNotId extends Omit<ICar, 'id'> { }// omit
const car: ICarNotId = {
    name: 'asdas',
    price: 9
}

interface ICarOnlyName extends Pick<ICar, 'name'> { }//pick
const carName: ICarOnlyName = {
    name: 'asd'
}

interface ICarChain extends Partial<ICar>{}
const carChair: ICarChain = {
    
}

