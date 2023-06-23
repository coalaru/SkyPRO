
const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");
const studentElements = document.querySelectorAll(".student");

const students = [
    {
        name: "Глеб",
        color: "#ff2600"
    },
    {
        name: "Иван",
        color: "#00f900"
    },
    {
        name: "Люси",
        color: "#0432ff"
    }
];

const renderStudents = () => {
    const studentsHtml = students.map((student, index) => {
        return `<li class="student" data-color="${student.color}">
            <p class="student-name">
                ${student.name}, любимый цвет
                <span style="color: ${student.color};">${student.color}</span>
            </p>
            <button data-index="${index}" class="del-button">Удалить</button>
        </li>`;
    }).join("");
    listElement.innerHTML = studentsHtml;

};
renderStudents();



// добавляет обработчик кликов ко всем элементам класса "student"
const initEventListener = () => {
    const studentElements = document.querySelectorAll(".student");
    // находит все  элементы класса "student"
    console.log(studentElements);
    // цикл for проходит по всем элементам списка
    for (const studentElement of studentElements) {
        // добавляет обработчик клика к каждому новому элементу списка
        studentElement.addEventListener("click", () => {
            console.log(studentElement.dataset.color);
        })
    }
}

const initDeleteButtonsListeners = () => {
    const deleteButtons = document.querySelectorAll(".del-button");
    // цикл for проходит по всем элементам списка
    for (const deleteButton of deleteButtons) {
        // добавляет обработчик клика к каждому новому элементу списка
        deleteButton.addEventListener("click", () => {
            // console.log("Deleted");
            // план удаления:
            // 1. храним список студентов в массиве js
            // 2. при клике удаляем нужный элемент из массива
            // 3. на основе нового массива формируем новый список в HTML
            const index = deleteButton.dataset.index;
            students.splice(index, 1);
            renderStudents();
            initDeleteButtonsListeners();
        });
    }
};

// renderStudents();
initEventListener();
// initDeleteButtonsListeners();

buttonElement.addEventListener("click", () => {
    nameInputElement.classList.remove("input-error");

    if (nameInputElement.value === "") {
        nameInputElement.classList.add("input-error");
        return;
    }
    // т.к. список генерируется функцией
    // добавляем студента сразу в массив
    students.push({
        name: nameInputElement.value,
        color: colorInputElement.value
    });
    // listElement.innerHTML =
    //     listElement.innerHTML +
    //     `<li class="student" data-color="${colorInputElement.value}">
    //     <p class="student-name">
    //       ${nameInputElement.value}, любимый цвет
    //       <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
    //     </p>
    //     <button class="del-button">Удалить</button>
    //   </li>`;
    renderStudents();
    initEventListener();
    initDeleteButtonsListeners();

    nameInputElement.value = "";
});

// удаление элементов списка
// 1. добавить кнопку УДАЛИТЬ в разметку
// 2. добавить обработчик клика на кнопку УДАЛИТЬ
// 3. реализовать в обработчике удаление элемента