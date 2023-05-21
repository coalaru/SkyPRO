
//Задание 1
let i = 1;
while (i <= 2) {
    console.log(`Привет!`);
    i++;
}

//Задание 2
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


//Задание 3;
let i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}

//Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let name in obj) {
    alert(`${name} -зарплата ${obj[name]}`);
}

//Задание 5
let num = 0;
let n = 1000;
do {
    n = n / 2;
    num++;
} while (n >= 50);
console.log(num);

//Задание 6
//Май 2023, 31 день в месяце
const firstFriday = 5;
const monthLenght = 31;

for (let dateFriday = firstFriday; dateFriday <= monthLenght; dateFriday = dateFriday + 7) {
    alert(`Сегодня пятница, ${dateFriday}-е число. Необходимо подготовить отчет.`)
};

//Задание 6.1
//для любого месяца без констант
let d = new Date();
let date = d.getDate();
let msg = d.getDay();

if (msg == 6) { alert(`Пятница! ${date}-е число! Подготовить отчёт`); }
else { alert(`Пока отчет не нужен`); }
