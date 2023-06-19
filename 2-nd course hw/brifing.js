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

// Задача 10
function grow(x) {
    let result = 1;
    for (let i = 0; i < x.length; i++) {
        result *= x[i];
    }
    return result;
}

console.log(grow([1, 2, 3, 4])); // 24
console.log(grow([5, 10, 2])); // 100


// Задача 11
function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(5)); // 15
console.log(summation(10)); // 55

// Задача 12
// Мы используем метод replace() для замены всех восклицательных знаков в строке str
// на пустую строку. Для этого мы передаем регулярное выражение /!/g в качестве первого
// аргумента метода replace(), которое соответствует всем восклицательным знакам в строке,
// и строку '' в качестве второго аргумента, которая заменит все восклицательные знаки на
// пустую строку.
function removeExclamationMarks(str) {
    return str.replace(/!/g, '');
}

console.log(removeExclamationMarks('Hello! World!')); // 'Hello World'
console.log(removeExclamationMarks('This is a test!')); // 'This is a test'


// Задача 13
// Функция findMax() принимает на вход массив arr и возвращает наибольшее число в этом массиве.

// Мы объявляем переменную max и инициализируем ее значением первого элемента массива arr[0]
// Затем мы запускаем цикл for, который проходит по всем элементам массива arr начиная со
// второго элемента (i = 1). На каждой итерации мы сравниваем текущий элемент
// массива arr[i] с текущим значением переменной max
// Если текущий элемент массива больше, чем значение переменной max, то мы обновляем
// значение переменной max на значение текущего элемента массива.
// В конце цикла мы возвращаем значение переменной max, которое будет равно наибольшему
// числу в массиве arr.

// Функция findMin() работает аналогично, но находит наименьшее число в массиве arr,
// используя переменную min.

function findMax(list) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

function findMin(list) {
    let min = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }
    return min;
}

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMin([10, 5, 7, 3, 2])); // 2

// Задача 14
//   Функция isPalindrome() принимает на вход строку str и возвращает true, если эта строка является палиндромом, и false в противном случае.
// Сначала мы приводим строку к нижнему регистру и удаляем все символы, кроме букв и цифр, используя методы toLowerCase() и replace(). Затем мы создаем обратную копию строки str с помощью методов split(), reverse() и join(). Наконец, мы сравниваем исходную строку str с обратной копией reversedStr и возвращаем true, если они равны, и false в противном случае.

function isPalindrome(str) {
    // Приводим строку к нижнему регистру и удаляем все символы, кроме букв и цифр
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Создаем обратную копию строки
    const reversedStr = str.split('').reverse().join('');
    // Сравниваем исходную строку с обратной копией
    return str === reversedStr;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A man, a plan, a canal – Panama')); // true
console.log(isPalindrome('hello')); // false

// Задача 15
const getVolume = (arr) => arr.reduce((acc, val) => acc * val, 1);
const findDifference = (a, b) => Math.abs(getVolume(a) - getVolume(b));

console.log(findDifference([2, 2, 3], [5, 4, 1])); // 8
console.log(findDifference([1, 2, 1], [2, 1, 2])); // 2
console.log(findDifference([1, 1, 1], [1, 1, 2])); // 1

// Задача 16




// Задача 17

function getBmi(weight, height) {
    const bmi = (weight / height ** 2);
    console.log(`BMI= ${bmi}`);
    if (bmi <= 18.5) return ("Underweight");
    if (bmi <= 25.0) return ("Normal");
    if (bmi <= 30.0) return ("Overweight");
    if (bmi > 30) return ("Obese");
}
console.log(getBmi(110, 171))

// Задача 18
function numberToWord(num) {
    switch (num) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return 'Invalid input';
    }
}

console.log(numberToWord(1)); // 'One'
console.log(numberToWord(5)); // 'Five'
console.log(numberToWord(9)); // 'Nine'
console.log(numberToWord(11)); // 'Invalid input'

// Задача 19
//Функция areYouPlayingBanjo() принимает на вход имя name и возвращает строку, отвечающую на вопрос "Are you playing banjo?".
// Мы сравниваем первую букву имени name[0] с символом 'r', приведенным к нижнему регистру с помощью метода toLowerCase(). Если первая буква имени равна символу 'r', мы возвращаем строку ${name} plays banjo, иначе мы возвращаем строку ${name} does not play banjo.
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}

console.log(areYouPlayingBanjo('Robert')); // 'Robert plays banjo'
console.log(areYouPlayingBanjo('Sarah')); // 'Sarah does not play banjo'
console.log(areYouPlayingBanjo('ryan')); // 'ryan plays banjo'

// Задача 20
//Функция nameToInitials() принимает на вход имя name и возвращает его первые буквы в
// верхнем регистре, разделенные точкой.

// Мы используем метод split() для разделения имени на отдельные слова и сохранения их в массив
// words. Затем мы создаем новый массив initials, содержащий первые буквы каждого слова,
// приведенные к верхнему регистру с помощью метода toUpperCase().
// Наконец, мы объединяем элементы массива initials в строку, разделяя их точкой с
// помощью метода join().

function nameToInitials(name) {
    const words = name.split(' ');
    const initials = words.map(word => word[0].toUpperCase());
    return initials.join('.');
}

console.log(nameToInitials('Sam Harris')); // 'S.H'
console.log(nameToInitials('patrick feeney')); // 'P.F'
console.log(nameToInitials('John Doe')); // 'J.D'


function multiplyAndIncrease(value) {
    if (typeof value === 'string') {
        return 'Error';
    } else {
        return value * 50 + 6;
    }
}

console.log(multiplyAndIncrease(5)); // 256
console.log(multiplyAndIncrease(0)); // 6
console.log(multiplyAndIncrease(-1)); // -44
console.log(multiplyAndIncrease('text')); // 'Error'
