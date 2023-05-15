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

//Задание 8

//Задание 9