// 1. Выделение разделов при выборе пунктов меню
document.querySelectorAll('.main-menu a').forEach(link => {
    link.addEventListener('click', function() {
        // Убираем выделение у всех разделов
        document.querySelectorAll('main section').forEach(section => {
            section.style.backgroundColor = '';
        });
        // Выделяем выбранный раздел
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.style.backgroundColor = '#2c8797';
    });
});

// 2. Выделение тенью содержимого столбца таблицы
document.querySelectorAll('th').forEach(header => {
    header.addEventListener('click', function() {
        const index = Array.from(this.parentNode.children).indexOf(this);
        const table = this.closest('table');
        
        // Снимаем выделение с других столбцов
        table.querySelectorAll('td').forEach(cell => {
            cell.style.boxShadow = '';
        });

        // Если уже выделено - снимаем выделение, иначе выделяем
        if (this.classList.contains('highlighted')) {
            this.classList.remove('highlighted');
        } else {
            // Убираем выделение с других заголовков
            table.querySelectorAll('th').forEach(th => th.classList.remove('highlighted'));
            this.classList.add('highlighted');
            table.querySelectorAll(`td:nth-child(${index + 1})`).forEach(cell => {
                cell.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.5)';
            });
        }
    });
});

// 3. Отображение содержимого <aside> во всплывающем окне
document.querySelectorAll('aside').forEach(aside => {
    aside.addEventListener('click', function() {
        alert(this.textContent.trim());
    });
});

// 4. Обработка нажатий кнопок сброса и отправки данных формы
const form = document.querySelector('form');
const resetBtn = form.querySelector('input[type = "reset"]');

resetBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное действие

    if (confirm('Вы уверены, что хотите сбросить форму?')) {
        form.reset(); // Сбрасываем форму
        highlightFields('red'); // Изменяем фон полей на красный
    } else {
        highlightFields('green'); // Изменяем фон полей на зеленый
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем реальную отправку данных

    highlightFields('blue'); // Изменяем фон полей на синий
    setTimeout(() => {
        alert('Данные отправлены.');
    }, 1000);
});

function highlightFields(color) {
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(field => {
        field.style.backgroundColor = color;
    });
    setTimeout(() => {
        fields.forEach(field => {
            field.style.backgroundColor = '';
        });
    }, 1000);
}