let arr = [
    [11, 12, 13],
    ['one', 'two', 'three', 'fore'],
    [31, 32, 33],
];
for (let arrIn1 of arr) {
    console.log(arrIn1);
    for (let arrIn2 of arrIn1) {
        console.log(arrIn2);
        // for (let element of arrIn2) {
        //     console.log(element);
        // }
    }
}

let arrSum = [3, 4, 5, 6];
const sum = (a, b, ...rest) => {
    let result = a + b;
    console.log(result);
    console.log(rest);
}
console.log(sum(...arrSum)); //не работает пример из лекции


//Задание 1

let array = [1, 5, 4, 10, 0, 3];  //ДАНО:
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === 10) break;
}


//Задание 2

let array = [1, 5, 4, 10, 0, 3];  //ДАНО:
for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) { console.log(`позиция числа 4 в массиве равна ${i}`) };

}

//Задание 3
let array = [1, 3, 5, 10, 20];  //ДАНО:
console.log(array.join(' '));

//Задание 4

let array = [];

for (let i = 0; i < 3; i++) {
    array[i] = []; // создаем подмассивы

    for (let j = 0; j < 3; j++) {
        array[i].push(1); // заполняем подмассивы числами
    }
}

console.log(array);

//Задание 5

let array = [1, 1, 1]; //ДАНО:

for (let i = 0; i < 3; i++) {
    array.push(2); // заполняем массив числами
}

console.log(array);

//Задание 6

let array = [9, 8, 7, 'a', 6, 5]; //ДАНО:

const numbers = array.filter(el => !isNaN(el)); //проверка "на число"
const result = numbers.sort(); //сортировка

console.log(result);

//Задание 7

let array = [9, 8, 7, 6, 5]; //ДАНО:

const userNum = prompt(`введите любое число`); //ввод любого числа

array.forEach((el) => {
    if (el == userNum) { alert('число есть в массиве') };
}); //просмотр массива на наличие совпадения

//или так:
let search = array.includes(userNum);
if (search) { alert('число есть в массиве') };

// Задание 8

let test = 'abcdef'; //ДАНО:

let arrayTest = test.split('');
console.log(arrayTest);//для понимания, что происходит
let arrayResult = arrayTest.reverse();
console.log(arrayResult);//для понимания, что происходит
let result = arrayTest.join('');

console.log(result);

// Задание 9

let array = [
    [1, 2, 3],
    [4, 5, 6]
];//ДАНО:

let result = []; //новый пустой массив

for (let arrIn1 of array) {
    for (let arrIn2 of arrIn1) {
        result.push(arrIn2);// заполняем массив числами
    }
}
console.log(result);

//Задание 10

let random = [4, 7, 1, 3, 6, 9, 3, 0]; //ДАНО

for (let i = 0; i < (random.length - 1); i++) {
    console.log(random[i] + random[i + 1]) //число итераций на 2 меньше длинны массива
};
console.log(random[(random.length - 1)]); //потому что у последнего элемента нет следующего

//Задание 11

let random = [4, 7, 1, 3, 6, 9, 3, 0]; //ДАНО

let result = random.map(item => (item ** 2)); //новый массив квадратов этих чисел
console.log(result);

//Задание 12

const getLengthWords = source => source.map(str => str.length); //подсчет количества знаков в элементах массива 
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Задание 13

function filterPositive(array) {
    const result = array.filter(item => item < 0); //применяем метод filter
    console.log(result)
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

