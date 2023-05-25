
//Задание 1

function compare(a, b) {

    if (a <= b) {
        return a;
    } else {
        return b;
    }

}

//проверка
let a = prompt(`Введите число 1`);
let b = prompt(`Введите число 2`);
console.log(compare(a, b));

//Задание 2

function parity(x) {

    let module;
    if (isNaN(x) === false) { module = (x % 2) }
    else { return (`Вы ввели НЕ ЧИСЛО`) };
    if (module === 0) { return (`Число четное`) }
    if (module === 1) { return (`Число нечетное`) };
}

//проверка
let x = prompt(`Введите число`);
console.log(parity(x));


//Задание 3;
//задание 3.1

let squaring1 = (x) => {
    let result = x * x;
    console.log(result);
    return result;
}


//задание 3.2

let squaring2 = (x) => x * x;

//проверка:
let x = prompt(`Введите число`);
console.log(squaring2(x));
squaring1(x)

//Задание 4

function askAge(z) {
    if (z < 0 || isNaN(z)) { alert`Вы ввели неправильное значение` };
    if (z >= 0 && z <= 12) { alert`Привет, друг!` };
    if (z >= 13) { alert`Добро пожаловать` };
}
//проверка
let z = prompt(`Ведите Ваш возраст`);
askAge(z);


//Задание 5

function compare(x, y) {
    if (isNaN(x) || isNaN(y)) { return (`Одно или оба значения не являются числом`) }
    else { return x * y };
}

//проверка
let a = prompt(`Введите число 1`);
let b = prompt(`Введите число 2`);
console.log(compare(a, b));

//Задание 6

let n = prompt(`Ведите число`);
function cubing(n) {
    if (isNaN(n)) { return (`Переданный параметр не является числом`) }
    else result = n ** 3;
    return result
};

//console.log(cubing(n))
//быстрая проверка, если отключить строку prompt
for (i = 0; i <= 10; i++) {
    console.log(cubing(i));
};

//Задание 7

function Area() {
    return Math.PI * this.radius ** 2;
}
function Perimeter() {
    return this.radius * 2 * Math.PI;
}

const circle1 = {
    radius: 10,

    getArea: Area,
    getPerimeter: Perimeter,
};

const circle2 = {
    radius: 15,

    getArea: Area,
    getPerimeter: Perimeter,
};

//проверка
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
