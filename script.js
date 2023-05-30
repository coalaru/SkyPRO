
function seazons() {
    let monthNumber = prompt(`Введите номер месяца`);
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) { alert(`значение некорректно`) }
    switch (monthNumber) {
        case '12':
        case '1':
        case '2':
            alert(`${monthNumber} месяц- это Зима`);
            break;
        case '3':
        case '4':
        case '5':
            alert(`${monthNumber} месяц- это Весна`);
            break;
        case '6':
        case '7':
        case '8':
            alert(`${monthNumber} месяц- это Лето`);
            break;
        case '9':
        case '10':
        case '11':
            alert(`${monthNumber} месяц- это Осень`);
            break;
        default:
            break;
    }
}


let game2 = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']; //Дано:

function memory() {
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
}