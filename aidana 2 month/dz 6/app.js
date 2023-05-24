
//3 - задание
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counterInput = document.getElementById("counter");

incrementBtn.addEventListener("click", function() {
    let counterValue = parseInt(counterInput.value);
    if (counterValue < 10) {
        counterValue++;
    }
    counterInput.value = counterValue;
});

decrementBtn.addEventListener("click", function() {
    let counterValue = parseInt(counterInput.value);
    if (counterValue > -10) {
        counterValue--;
    }
    counterInput.value = counterValue;
});
//Данный код содержит обработчики событий, которые реагируют на нажатия кнопок
// "increment" и "decrement". При нажатии на кнопку "increment", значение, отображаемое
// в элементе counterInput увеличивается на единицу, а при нажатии на кнопку "decrement" - уменьшается на единицу.

// Переменные incrementBtn, decrementBtn и counterInput представляют соответствующие
// HTML элементы, которые были получены при помощи метода getElementById.
//
// Обработчик события для кнопки "increment" добавлен методом addEventListener,
// который вызывает анонимную функцию при событии "click". Внутри этой функции выполняются
// следующие шаги:
//
// Получаем текущее значение счетчика из элемента counterInput,
// используя свойство value.
// Преобразуем значение в число, используя функцию parseInt.
// Если значение меньше 10, увеличиваем его на единицу.
// Устанавливаем новое значение счетчика в элементе counterInput,
// используя свойство value.
// Аналогично, обработчик события для кнопки "decrement" также
// вызывает анонимную функцию при событии "click". Внутри этой функции выполняются следующие шаги:
//
// Получаем текущее значение счетчика из элемента counterInput,
// используя свойство value.
// Преобразуем значение в число, используя функцию parseInt.
// Если значение больше -10, уменьшаем его на единицу.
// Устанавливаем новое значение счетчика в элементе counterInput,
// используя свойство value.
// Таким образом, при каждом нажатии на кнопку "increment" или
// "decrement" значение счетчика в элементе counterInput изменяется соответствующим образом.