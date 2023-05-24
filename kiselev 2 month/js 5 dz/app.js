function generateNumbers() {
    // Определяем переменную, которая будет хранить сгенерированные числа
    let numbers = [];

    // Генерируем 6 случайных чисел в диапазоне от 1 до 99
    for (let i = 0; i < 6; i++) {
        numbers.push(Math.floor(Math.random() * 99) + 1);
    }

    // Обновляем содержимое элемента <div> с идентификатором "numbers"
    document.querySelector("#numbers").innerHTML = numbers.join();
}