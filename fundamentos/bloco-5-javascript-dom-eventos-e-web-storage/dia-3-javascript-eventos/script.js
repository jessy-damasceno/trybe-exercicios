function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
createDaysOfTheWeek();

function createDaysOfTheMonth(tag, array) {
  for (let number of array) {
    let day = document.createElement(tag);
    day.classList = "day";
    day.innerText = number;
    document.getElementById("days").appendChild(day);

    if (number === 24 || number === 25 || number === 31) {
      day.classList.add("holiday");
    }
    if (number === 4 || number === 11 || number === 18 || number === 25) {
      day.classList.add("friday");
    }
  }
}

createDaysOfTheMonth("li", dezDaysList);

function button(id, string) {
  let button = document.createElement("button");
  button.id = id;
  button.innerText = string;
  document.getElementsByClassName("buttons-container")[0].appendChild(button);
}

button("btn-holiday", "Feriados");

function holidayClick() {
  document.getElementById("btn-holiday").addEventListener("click", function () {
    let element = document.getElementsByClassName("holiday");
    for (i of element) {
      if (i.style.backgroundColor === "#94c4f7") {
        i.style.backgroundColor = "rgb(238,238,238";
      } else {
        i.style.backgroundColor = "#94c4f7";
      }
    }
  });
}

holidayClick();
button("btn-friday", "Sexta-feira");

function Sextou() {
  document.getElementById("btn-friday").addEventListener("click", function () {
    let element = document.getElementsByClassName("friday");
    let sextas = [4, 11, 18, 25];
    for (let i = 0; i < element.length; i += 1) {
      if (element[i].innerText !== "Sextou!") {
        element[i].innerText = "Sextou!";
      } else {
        element[i].innerText = sextas[i];
      }
    }
  });
}

Sextou();

function diaGrande() {
  document
    .getElementById("days")
    .addEventListener("mouseover", function (event) {
      event.target.style.color = "rgba(226, 73, 101, 0.79)";
    });
}

function diaGrandeOut() {
  document
    .getElementById("days")
    .addEventListener("mouseout", function (event) {
      event.target.style.color = "#777777";
    });
}

diaGrande();
diaGrandeOut();

function createTag(tag, string) {
  let element = document.createElement(tag);
  element.innerText = string + "\n";
  document.getElementsByClassName("my-tasks")[0].appendChild(element);
}

createTag("span", "Entender a Ana");

function newTaskDiv(color) {
  let tasksContainer = document.querySelector(".my-tasks");
  let newTask = document.createElement("div");

  newTask.className = "task";
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
}

newTaskDiv("rgb(226, 73, 101)");

function taskSelected() {
  let tasks = document.getElementsByClassName("task");
  let selectedTasks = document.getElementsByClassName('task selected');

  tasks.addEventListener("click", function (event) {
      if (selectedTasks.length === 0) {
        event.target.classList = 'task selected'
      } else {
        event.target.classList = 'task';
      }
    }
  );
}

taskSelected();
