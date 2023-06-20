// ТЕОРИЯ

// Чем отличаются const и let? Почему var не используется?
function example() {
    var x = 1;
    if (true) {
        var x = 2; // Неожиданное переназначение переменной x!
        console.log(x); // Выводит 2
    }
    console.log(x); // Выводит 2
}

//Как склеить массив в строку? Какие есть для этого способы, оптимальные и нет?
const arr = ['foo', 'bar', 'baz'];
const str = arr.join(', '); // результат: 'foo, bar, baz'

const arr = ['foo', 'bar', 'baz'];
let str = '';
for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i !== arr.length - 1) {
        str += ', ';
    }
}

const arr = ['foo', 'bar', 'baz'];
const str = arr.reduce((acc, curr) => acc + ', ' + curr);

//В чём отличие примитивных типов данных от ссылочных?
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
