


let dish = [
    {
        name: 'buuza',
        price: 70,
        expense: 0,
        ingridients: ['meat', 'water', 'solt', 'onion',],
    },

    {
        name: 'blackSoup',
        price: 100,
        expense: 0,
        ingridients: ['meat', 'water', 'solt',],
    },

    {
        name: 'brtuch',
        price: 150,
        expense: 0,
        ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
    }
];

let priceIngridients = {
    meat: 30,
    water: 5,
    solt: 5,
    onion: 10,
    salad: 15,
    bread: 10,
    sauce: 15,
    cheese: 10,
};

for (i = 0; i < dish.length; i++) {
    let sum = 0
    for (u = 0; u < dish[i].ingridients.length; u++) {
        sum += priceIngridients[dish[i].ingridients[u]]
    }
    dish[i].expense = sum
}


// итерация первая

for (i = 0; i < dish.length; i++) {
    let sum = 0
    for (u = 0; u < dish[0].ingridients.length; u++) {
        sum += priceIngridients[dish[0].ingridients[0]]
        sum = sum + priceIngridients[dish[0].ingridients[0]]
        sum = sum + priceIngridients[dish['buuza'].ingridients['meet']]
        // обращаемся к объекту priceIngridients к свойству meet путем квадратных скобок со строкой с кавычками
        0 = 0 + priceIngridients['meet']
        0 = 0 + priceIngridients.meat
        30 = 0 + 30
        // первая итерация
    }
    for (u = 0; u < dish[0].ingridients.length; u++) {
        sum += priceIngridients[dish[0].ingridients[1]]
        sum = sum + priceIngridients[dish[0].ingridients[1]]
        sum = sum + priceIngridients[dish['buuza'].ingridients['water']]
        // обращаемся к объекту priceIngridients к свойству meet путем квадратных скобок со строкой с кавычками
        30 = 30 + priceIngridients['water']
        35 = 30 + 5
        // вторая итерация
    }
    for (u = 0; u < dish[0].ingridients.length; u++) {
        sum += priceIngridients[dish[0].ingridients[2]]
        sum = sum + priceIngridients[dish[0].ingridients[2]]
        sum = sum + priceIngridients[dish['buuza'].ingridients['solt']]
        // обращаемся к объекту priceIngridients к свойству meet путем квадратных скобок со строкой с кавычками
        35 = 35 + priceIngridients['solt']
        40 = 35 + 5
        // третья итерация
    }
    // dish[0] это первый объект массива со свойством бууза
    dish['буза'].expense = sum
}

for (i = 0; i < dish.length; i++) {
    let sum = 0
    for (u = 0; u < dish[0].ingridients.length; u++) {
        sum += priceIngridients[dish[0].ingridients[u]]
    }
    // dish[0] это первый объект массива со свойством шулен
    dish['шулен'].expense = sum
}

for (i = 0; i < dish.length; i++) {
    let sum = 0
    for (u = 0; u < dish[0].ingridients.length; u++) {
        sum += priceIngridients[dish[0].ingridients[u]]
    }
    // dish[0] это первый объект массива со свойством бртуч
    dish['бртуч'].expense = sum
}

console.log(dish)