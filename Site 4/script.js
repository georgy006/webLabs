// Получаем элементы для навигации и отображения
const monthYearDisplay = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

// Получаем текущую дату
let currentDate = new Date();
let selectedDate = null;

// Функция для отображения календаря
function renderCalendar(date) {
  // Устанавливаем месяц и год в заголовке
  const month = date.getMonth();
  const year = date.getFullYear();
  monthYearDisplay.textContent = date.toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric"
  });

  // Очищаем старые дни
  calendarDays.innerHTML = "";

  // Получаем первый и последний день месяца
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  
  // Определяем день недели первого дня месяца
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  // Создаем первую строку таблицы
  let weekRow = document.createElement("tr");

  // Заполняем пустые ячейки перед первым днем месяца
  for (let i = 0; i < startDay; i++) {
    const emptyCell = document.createElement("td");
    weekRow.appendChild(emptyCell);
  }

  // Добавляем дни месяца
  for (let day = 1; day <= daysInMonth; day++) {
  const cell = document.createElement("td");
  cell.textContent = day;
  cell.dataset.date = `${year}-${month + 1}-${day}`;

  // Проверка, является ли день текущей датой
  const today = new Date(); // Получаем текущую системную дату
  if (
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
  ) {
    cell.classList.add("today");
  }

  // Добавляем событие клика для открытия задач на эту дату
  cell.addEventListener("click", () => openTaskModal(cell.dataset.date));

  // Добавляем ячейку в текущую строку недели
  weekRow.appendChild(cell);

  // Если текущий день завершает неделю (воскресенье), добавляем строку в таблицу и создаем новую строку для следующей недели
  if ((startDay + day) % 7 === 0) {
    calendarDays.appendChild(weekRow);
    weekRow = document.createElement("tr");
  }
}
  // Добавляем последнюю строку недели, если она не завершена
  if (weekRow.children.length > 0) {
    calendarDays.appendChild(weekRow);
  }
}

// Инициализация календаря
renderCalendar(currentDate);

// Обработчики событий для кнопок переключения месяцев
prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});


// Модальное окно и задачи
const taskModal = document.getElementById("task-modal");
const closeModalButton = document.getElementById("close-modal");
const taskDateDisplay = document.getElementById("task-date");
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

// Хранилище задач
let tasks = {};

// Функция для открытия модального окна и отображения задач
function openTaskModal(date) {
  selectedDate = date;
  taskDateDisplay.textContent = `Дела на ${date}`;
  taskList.innerHTML = "";

  // Если для даты нет задач, выводим "Планов нет"
  if (!tasks[date] || tasks[date].length === 0) {
    const noTasksItem = document.createElement("li");
    noTasksItem.textContent = "Планов нет";
    taskList.appendChild(noTasksItem);
  } else {
    // Отображаем задачи
    tasks[date].forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    });
  }

  taskModal.style.display = "block";
}

// Функция для закрытия модального окна
closeModalButton.addEventListener("click", () => {
  taskModal.style.display = "none";
});

// Функция для добавления задачи
addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    if (!tasks[selectedDate]) tasks[selectedDate] = [];
    tasks[selectedDate].push(taskText);
    newTaskInput.value = "";
    openTaskModal(selectedDate);
    markTaskDate(selectedDate);
  }
});

// Функция для добавления синей рамки вокруг даты с задачами
function markTaskDate(date) {
  const dateCell = document.querySelector(`td[data-date="${date}"]`);
  if (dateCell) {
    dateCell.classList.add("has-tasks");
  }
}

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
  if (event.target === taskModal) {
    taskModal.style.display = "none";
  }
});
