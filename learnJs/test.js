let test = 1
console.log(test)//1
let test2 = ++test//префиксный инкрементирует и отдает значение(1+1 и отдал значение)
console.log(test2)//2

let test3 = test++//постфиксный отдает значение и инкрементирует(отдал значение и 1+1) после инкрементирования хранит это значение которое надо будет отдать, уже не в пользу производительности и поэтому лучше его не использовать
console.log(test3)//2

console.log(test)//3

console.log(5 == 5)//true 5 равно 5 правда
console.log(5 != 5)//false 5 не равно 5 ложь
console.log(5 != 4)//true 5 не равно 4 правда

const arr1 = [1, 2, 3]
console.log(arr1)

const arrs = [arr1]
console.log(arrs)


const arr2 = ['q', 'w', 'q']
console.log(arr2[0], arr2[1], arr2[2])
console.log(...arr2)

const arr3 = [...arr1]
console.log(arr3)

const arr4 = [...arr1, 4]
console.log(arr4)

