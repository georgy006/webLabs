  $(document).ready(function() {
    // Анимация появления подменю при наведении
    $(".animated-menu li").hover(function() {
      $(this).find("ul").stop(true, true).slideDown(300); // Показываем подменю
    }, function() {
      $(this).find("ul").stop(true, true).slideUp(300); // Скрываем подменю
    });
  
    // Обработчик клика по пунктам меню
    $(".animated-menu a").click(function(event) {
      // Убираем выделение с предыдущих активных разделов
      $("section").removeClass("active-section");
  
      // Получаем ID из href ссылки
      var targetSection = $(this).attr("href");
  
      // Добавляем класс active-section к соответствующему разделу
      $(targetSection).addClass("active-section");
    });
  
    // Обработчик клика по заголовкам столбцов таблицы
    $("th").click(function() {
      var columnIndex = $(this).index(); // Получаем индекс выбранного столбца
  
      // Если столбец уже выделен, то снимаем выделение
      if ($(this).hasClass("selected-column")) {
        $("td, th").removeClass("selected-column");
      } else {
        // Снимаем выделение с других столбцов
        $("td, th").removeClass("selected-column");
  
        // Добавляем выделение выбранному столбцу
        $("td:nth-child(" + (columnIndex + 1) + "), th:nth-child(" + (columnIndex + 1) + ")").addClass("selected-column");
      }
    });

    $('aside').click(function() {
        $(this).toggleCenter(); // Включаем плагин для элемента
      });


      let blinking; // Переменная для хранения анимации

    $(".logo-img").hover(
        function() {
            // Начинаем мигание
            function blink() {
                blinking = $(this).animate({ opacity: 0.5 }, 300)
                                 .animate({ opacity: 1.0 }, 300, blink.bind(this));
            }
            blink.call(this); // Запускаем мигание
        },
        function() {
            // Останавливаем мигание и возвращаем прозрачность
            $(this).stop(true).css("opacity", 1.0);
        }
    );
});
  
(function($) {
    $.fn.toggleCenter = function () {
      const isExpanded = $(this).hasClass("expanded");
      if (isExpanded) {
          $(this).animate({marginLeft: "0",fontSize: "1em" }, 500);
          $(this).find("a").animate({ fontSize: "16px" 
            
          }, 500);
      } else {
          $(this).animate({ marginLeft: "20%",fontSize: "2em" }, 500);
          $(this).find("a").animate({ fontSize: "24px" }, 500);
      }
      $(this).toggleClass("expanded");
  };

  })(jQuery);
  

//1
//   $(window).on('load', function() {
//     // Код выполнится после полной загрузки страницы
// });
//3
// $('ol li a').on('click', function(event) {
//   event.preventDefault(); // Предотвращаем стандартное действие
//   let text = $(this).text(); // Получаем текст ссылки
//   console.log('Вы кликнули по ссылке с текстом: ' + text);
// });