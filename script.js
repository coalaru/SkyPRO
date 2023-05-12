//Задание 1
let a
a = 10;
alert(`ответ равен ${a}`);
a = 20;
alert(`ответ равен ${a}`)

//Задание 2
const firstIphone = 2007;
alert(`год выпуска первого iPhone: ${firstIphone}`);

//Задание 3;
const jsCreator = `Brendan Eich`;
alert(`создатель языка Java Script: ${jsCreator}`);

//Задание 4
let c = 10;
let d = 2;
let sum = (c + d);
let different = (c - d);
let multiplay = (c * d);
let quotient = (c / d);
alert(`сумма: ${sum} разность: ${different} произведение: ${multiplay} частное: ${quotient}`);

//Задание 5
let exponentiation = (2 ** 5);
alert(`результат возведения 2 в пятую степень равен ${exponentiation}`);

//Задание 6
let e = 9;
let f = 2;
let result = (9 % 2);
alert(`модуль чисел ${e} и ${f} равен ${result}`)

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(`ответ равен ${num}`);

//Задание 8
let age = Number(prompt(`укажите Ваш возраст`));
alert(`вы ввели Ваш возраст: ${age}`);

//Задание 9.0
let user = {
    name: `Alex`,
    age: 52,
    isAdmin: true
};

//Задание 9.1
user[`city of residence`] = `Krasnodar`;

//Задание 9.2
user.age = 30;

//Задание 9.3
delete user[`city of residence`];

//Задание 9.4
let info = Number(prompt(`Какую информацию хотите узнать о пользователе? 1-имя, 2-возраст, 3-является ли он Админом`));
if (info == 1) { alert(user.name) };
if (info == 2) { alert(user.age) };
if (info == 3) { alert(user.isAdmin) };

//Задание 10
let boss = (prompt(`как твоё имя, о великий?`));
alert(`приветствую тебя, о великий ${boss}!`)

//прикольно :)