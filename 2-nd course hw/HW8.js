//1
const fibonacci = [1, 1, 2, 3, 5, 8];
const multipleByTwoFib = fibonacci.map(item => (item * 2));
const plusTenFib = fibonacci.map(item => (item + 10));
const onlyBigFib = fibonacci.filter(item => item > 3);

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]

//2
function callbackWithArrayLength(arr, callback) {
    // console.log(arr);
    callback(arr.length);
}

callbackWithArrayLength([1], (length) => {
    console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
});

//3
function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// задание-1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];                              // Дано
const copy = people;
console.log(copy.sort(
    function (a, b) {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
        return 0;               // если a равно b
    }));

// задание-2
// вариант1

const isPositive = (num) => num > 0;

const isMale = (person) => person.gender === 'male';

const filter = (arr, callback) => arr.filter(callback);

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{"name":"Глеб","gender":"male"},{"name":"Олег","gender":"male"}]

// вариант 2

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]

// задание-3

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // здесь мы получаем текущую дату
let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
    " " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
    " " + myDate.getFullYear() + // getFullYear возвращает год
    ", " + days[myDate.getDay()] + // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days
    " " + myDate.getHours() + " часов " + myDate.getMinutes() + " минут";

const timer = (deadline) => {
    const interval = setInterval(() => {
        console.log(fullDate);
    }, 3000);


    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло!')
    }, deadline * 1000)
};

timer(30);

// задание-4

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}


delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// задание-5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:

setTimeout(() => { return sayHi('Глеб'); }, 1010); delayForSecond();