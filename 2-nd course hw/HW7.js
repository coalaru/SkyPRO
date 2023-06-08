
//Задание 1

let start = (`I'll be back! сказал Терминатор`);  //ДАНО:
let finish = start.toUpperCase();
console.log(finish);



//Задание 2


const searchStart = function (array, srch) {
    let result = [];
    array.forEach((res) => {
        if (res.toLowerCase().includes(srch.toLowerCase())) {
            result.push(res);
        }
    })
    console.log(result);
};

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

//Задание 3
let num = 32.58884;  //ДАНО:

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));


//Задание 4

let array = [52, 53, 49, 77, 21, 32]; //ДАНО:
let result = array.sort();
console.log(result);
console.log(result[0]);
console.log(result[(result.length - 1)]);
// Магомедова
let numbers = [52, 53, 49, 77, 21, 32]; // Исходный массив
let min = Math.min(...numbers); // С помощью деструктуризации передаем числа как отдельные аргументы
let max = Math.max(...numbers); // Аналогично

//Задание 5

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 10));


//Задание 6
// максимальное использование своего кода
const min = 0;
const max = prompt('введите целое число');
let lenghtArray = ((Math.floor(max / 2)));
let numbs = new Array(lenghtArray);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}; //случайное число в заданном диапазоне

function getRandomArrNumbers(max) {

    for (let i = 0; i < lenghtArray; i++) {
        numbs.push(getRandomInt(min, max))
    };
    return numbs;
};

getRandomArrNumbers(max);
console.log(numbs);


//Задание 7

const min = prompt('введите целое число');
const max = prompt('введите целое число');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}; //случайное число в заданном диапазоне

console.log(getRandomInt(min, max));


/// Задание 8

let currentDate = new Date();
console.log(currentDate);

//Mon May 29 2023 23:18:59 GMT+0300 (Москва, стандартное время)


// Задание 9

let currentDate = new Date();
console.log(currentDate);
let calc = (+ currentDate);

let date73 = 73 * 24 * 60 * 60 * 1000; //73 дня перевести в миллисекунды
let searchDate = calc + date73;

let dayAfter73 = new Date(searchDate);
console.log(dayAfter73); // дата через 73


//Задание 10

// const currentDate = new Date();
// const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
// console.log(currentDate.toLocaleDateString('ru-RU', options));



const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // здесь мы получаем текущую дату
let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
    " " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
    " " + myDate.getFullYear() + // getFullYear возвращает год
    ", " + days[myDate.getDay()] + // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days
    " " + myDate.getHours() + " часов " + myDate.getMinutes() + " минут";


function daysWeek() {
    let date = prompt('введите день');
    let month = prompt('введите месяц') - 1;
    let year = prompt('введите год');

    let userDate = new Date(year, month, date);
    let dayWeek = userDate.getDay();

    alert('Дата ' + date + ' ' + months[month] + ' ' + year + ' года ' + ' -это ' + days[dayWeek] + '! А ' + fullDate);
};

daysWeek();


//Задание 11 работа с макетом

let game2 = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']; //Дано:

game2 = game2.sort(() => Math.random() - 0.5);
alert(game2);
let firstElement = game2[0];
let lastElement = game2[game2.length - 1];
let firstAnswer = prompt('Введите первый элемент массива');
let lastAnswer = prompt('Введите последний элемент массива');
if (firstAnswer.toLowerCase() === firstElement.toLowerCase() && lastAnswer.toLowerCase() === lastElement.toLowerCase()) {
    alert('Вы ответили правильно!');
} else
    if (firstAnswer.toLowerCase() === firstElement.toLowerCase() || lastAnswer.toLowerCase() === lastElement.toLowerCase()) {
        alert('Вы были близки к победе!');
    }
    else {
        alert('Вы ответили не правильно');
    }



  
