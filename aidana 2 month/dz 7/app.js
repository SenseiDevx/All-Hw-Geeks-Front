//1 - задание
const form = document.getElementById("calculator");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    // получаем значения полей ввода и оператора
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    // выполняем выбранную операцию
    let answer;
    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break
        default:
            answer = "Ошибка: неизвестный оператор";
    }

    // выводим результат
    result.textContent = `Результат: ${answer}`;
});


//2 - задание (доп задание)
// Получаем все кнопки "показать ответ"
const showAnswerButtons = document.querySelectorAll('.show-answer-button');

// Для каждой кнопки добавляем обработчик события "click"
showAnswerButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем элемент с ответом
        const answer = button.nextElementSibling;

        // Переключаем класс "hidden" у элемента с ответом
        answer.classList.toggle('hidden');

        // Меняем текст на кнопке
        if (button.textContent === 'Показать ответ') {
            button.textContent = 'Скрыть ответ';
        } else {
            button.textContent = 'Показать ответ';
        }
    });
});
//Мы используем метод querySelectorAll для получения всех кнопок "показать ответ",
// и метод forEach для добавления обработчика событий "click" на каждую из них.
// В обработчике события мы получаем элемент с ответом с помощью метода
// nextElementSibling, и используем метод classList.toggle для переключения класса
// "hidden" и скрытия или показа ответа. Затем мы меняем текст на кнопке в зависимости
// от того, был ли ответ скрыт или показан.
