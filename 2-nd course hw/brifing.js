// Задача 1
//Можно использовать метод split(), метод filter() и свойство length для решения этой задачи.
//Метод split() разделит строку на массив символов, метод filter() отфильтрует массив по заданному символу,
// а свойство length вернет длину отфильтрованного массива
function strCount(str, letter) {
    const arr = str.split('');
    const filteredArr = arr.filter((c) => c === letter);
    return filteredArr.length;
}
console.log(countOccurrences('hello world', 'l')); // Output: 3
console.log(countOccurrences('foo bar baz', 'x')); // Output: 0

// Задача 2
//Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число,
// а затем суммировала результаты.
function squareSum(numbers) {
    const squaredNumbers = numbers.map((num) => num ** 2);
    const sum = squaredNumbers.reduce((total, num) => total + num, 0);
    return sum;
}

console.log(squareSum([1, 2, 3, 4, 5])); // Output: 55
console.log(squareSum([-1, 0, 1])); // Output: 2

// Задача 3

//задача состоит в том, чтобы найти ближайшее квадратное число,ближайшего_квадрата(n)или ближайшего Sq(n), для положительного целого числа n.
//Например, если n = 111, то ближайший\_sq(n) (nearestSq(n)) равен 121, так как 111 ближе к 121, квадрату 11, чем 100, квадрату 10.
//Если n уже является идеальным квадратом (например, n = 144, n = 81 и т. д.), вам нужно просто вернуть n.

// Найти квадратный корень из входного числа n.
// Округлить квадратный корень до ближайшего целого числа.
// Возвести полученное целое число в квадрат.
// Сравнить значения полученного квадрата и квадрата следующего целого числа.
// Вернуть наименьшее из двух значений.
function nearestSq(n) {
    const root = Math.sqrt(n);
    const nearestInt = Math.round(root);
    const nearestSq = nearestInt ** 2;
    const nextSq = (nearestInt + 1) ** 2;
    return (n - nearestSq) < (nextSq - n) ? nearestSq : nextSq;
}

console.log(nearestSq(111)); // Output: 121
console.log(nearestSq(144)); // Output: 144
console.log(nearestSq(7)); // Output: 9

// Задача 4
//Для решения этой задачи можно использовать метод split(), метод reverse() и метод join() 
//для преобразования строки в массив, разворота массива и обратного преобразования массива в строку.
function solution(str) {
    const arr = str.split('');
    arr.reverse();
    const reversedStr = arr.join('');
    return reversedStr;
}

console.log(reverseString('world')); // Output: 'dlrow'
console.log(reverseString('word')); // Output: 'drow'

// Задача 5
//Для решения этой задачи можно использовать метод split(), метод map() и метод join() 
//для преобразования строки в массив слов, нахождения длины каждого слова и объединения
//длины слова и самого слова обратно в строку
function addLength(str) {
    const words = str.split(' ');
    const result = words.map((word) => `${word} ${word.length}`);
    return result;
}

console.log(addLength('apple ban')); // Output: ['apple 5', 'ban 3']
console.log(addLength('you will win')); // Output: ['you 3', 'will 4', 'win 3']


// Задача 6
//Есть предложение «3 по цене 2» (или «2+1», если хотите) на манго.
//Для данного количества и цены (за манго) рассчитайте общую стоимость манго.

// Если количество манго кратно 3, то мы можем разделить количество манго на 3 и 
// с помощью округления до ближайшего целого https://doka.guide/js/math-floor/ мы можем
// определить количество бесплатных манго
// затем, отнять от общего количества количество бесплатных манго, оставшиеся умножить на стоимость .

function mango(quantity, price) {
    const freeMango = Math.floor(quantity / 3);
    console.log('freeMango ', freeMango);
    const totalQuantity = quantity - freeMango;
    const totalCost = totalQuantity * price;
    return totalCost;
}

console.log(mango(2, 3)); // Output: 6
console.log(mango(3, 3)); // Output: 6
console.log(mango(5, 3)); // Output: 12
console.log(mango(9, 5)); // Output: 30

// Задача 7
//Учитывая набор чисел, верните добавку, обратную каждому из них.
//Каждое положительное становится отрицательным, а отрицательное становится положительным.
//Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.

//функция invert() принимает один аргумент (arr) и использует метод map() для создания нового массива,
//в котором каждый элемент инвертированной версии исходного элемента.
//Затем функция возвращает этот новый массив

function invert(arr) {
    return arr.map((num) => -num);
}

console.log(invert([1, 2, 3, 4, 5])); // Output: [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])); // Output: [-1, 2, -3, 4, -5]
console.log(invert([])); // Output: []

// Задача 8
// Завершите функцию, которая принимает неотрицательное целое число n в качестве входных данных и 
//возвращает список всех степеней числа 2 с показателем степени от 0 до n (включительно).

//можно использовать цикл for для генерации всех степеней двойки от 0 до n. 
//В каждой итерации цикла мы будем возводить 2 в степень, равную индексу текущей итерации

function powersOfTwo(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }
    return result;
}

console.log(powersOfTwo(0)); // Output: [1]
console.log(powersOfTwo(1)); // Output: [1, 2]
console.log(powersOfTwo(2)); // Output: [1, 2, 4]
console.log(powersOfTwo(3)); // Output: [1, 2, 4, 8]

// Задача 9
// Получить непустой массив целых чисел, вернуть результат умножения чисел друг-на-друга

//функция multiply() принимает один аргумент (arr) и использует метод reduce() для перемножения
// всех элементов массива в порядке их следования.
//Затем функция возвращает результат перемножения.

function grow(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

console.log(grow([1, 2, 3, 4])); // Output: 24
console.log(grow([2, 4, 6, 8])); // Output: 384
console.log(grow([5])); // Output: 5

