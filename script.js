
//Задание 1
let password = `юзер`;
let userPass = prompt(`Введите пароль`);
if (password === userPass) {
    alert(`Пароль введён верно`);
} else {
    alert(`Пароль введён неверно`);
}


//Задание 2
let x = prompt(`Введите число`);
if (0 < x && x < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}


//Задание 3;
let d = prompt(`Введите число 1`);
let e = prompt(`Введите число 2`);
if (d > 100 || e > 100) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

//Задание 4
let a = `2`;
let b = `3`;
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = prompt(`Введите номер месяца`);
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        alert(`Зима`);
        break;
    case '3':
    case '4':
    case '5':
        alert(`Весна`);
        break;
    case '6':
    case '7':
    case '8':
        alert(`Лето`);
        break;
    case '9':
    case '10':
    case '11':
        alert(`Осень`);
        break;
    default:
        break;
}


//Задание 7
let module;
let z = prompt(`Введите число`);
if (isNaN(z) === false) { module = (z % 2) }
else { alert(`Вы ввели НЕ ЧИСЛО`) };
if (module === 0) { alert(`Число четное`) }
if (module === 1) { alert(`Число нечетное`) };

//Задание 8
let clientOS = (Number(prompt(`Выберете вариант 0-iOS, 1-Android`)));
if (clientOS == 0) { alert(`Установите версию приложения для iOS по ссылке`); }
if (clientOS == 1) { alert(`Установите версию приложения для Android по ссылке`); }



//Задание 9
const deadLineYear = 2015;
let clientDeviceYear = (Number(prompt(`введите год производства Вашего телефона`)));
switch (clientOS) {
    case 0:
        if (clientDeviceYear >= deadLineYear) {
            alert(`Установите обычную версию приложения для iOS по ссылке`);
        } else { alert(`Установите облегчённую версию приложения для iOS по ссылке`); }
        break;
    case 1:
        if (clientDeviceYear >= deadLineYear) {
            alert(`Установите обычную версию приложения для Android по ссылке`);
        } else { alert(`Установите облегчённую версию приложения для Android по ссылке`); }
        break;
    default:
        alert(`ошибка ввода`);

}

//Задание 9 иной вариант
if (clientDeviceYear >= deadLineYear && clientOS == 0) { alert(`Установите обычную версию приложения для iOS по ссылке`); }
if (clientDeviceYear >= deadLineYear && clientOS == 1) { alert(`Установите обычную версию приложения для Android по ссылке`); }
if (clientDeviceYear < deadLineYear && clientOS == 0) { alert(`Установите облегчённую версию приложения для iOS по ссылке`); }
if (clientDeviceYear < deadLineYear && clientOS == 1) { alert(`Установите облегчённую версию приложения для Android по ссылке`); }