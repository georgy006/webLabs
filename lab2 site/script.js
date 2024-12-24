// Функция для предупреждения о недоступности раздела
function showAlert(sectionName) {
        alert(`Раздел "${sectionName}" недоступен!`);
    }
    
    // Привязка событий к кнопкам навигации
    document.addEventListener("DOMContentLoaded", function() {
        const navButtons = document.querySelectorAll("nav button");

        navButtons.forEach(button => {
            button.addEventListener("click", function() {
                const sectionName = button.textContent;
                showAlert(sectionName);
            });
        });
    
        // Обработка отправки формы поиска
        const searchForm = document.getElementById("searchForm");
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Отменяем отправку формы
            alert("Функция поиска на данный момент недоступна!");
        });
    });
    