//1 - task
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// объяснение
// 1 строка) Цикл for используется для повторения блока кода заданное количество раз.
// В этом случае мы задаем переменную i равной 1 и говорим, что цикл будет повторяться,
// пока i меньше или равно 100. При каждой итерации цикла значение i будет увеличиваться на 1.
// остальное все то есть весь код)
// В этой части кода мы проверяем, делится ли текущее значение i на 3 и/или на 5.
// Если значение i делится на 3 и на 5, то мы выводим "FizzBuzz". Если значение i
// делится только на 3, то мы выводим "Fizz". Если значение i делится только на 5, то мы выводим "Buzz".
// Иначе, если значение i не делится ни на 3, ни на 5, мы просто выводим значение i.
//
// Итак, в результате выполнения этого кода на экране будут выводиться числа от 1 до 100,
// причем числа, которые делятся на 3, будут заменены на "Fizz", числа, которые делятся на 5,
// будут заменены на "Buzz", а числа, которые делятся и на 3, и на 5, будут заменены на "FizzBuzz".


// Мы используем цикл for, чтобы перебрать все числа от 1 до 100.
// В каждой итерации цикла мы проверяем, делится ли число i на 3, на 5,
// или на оба числа одновременно. Если число делится на 3, мы выводим "Fizz".
// Если число делится на 5, мы выводим "Buzz". Если число делится и на 3, и на 5,
// мы выводим "FizzBuzz". Если число не делится ни на 3, ни на 5, мы просто
// выводим его значение.

//2 - task
const arr = ['milk', 'beer', 'beer', 'milk', 'milk', 'beer'];
//Мы создаем переменную "arr" и присваиваем ей массив строк, содержащий различные элементы: "milk" и "beer".


for (let i = 0; i < arr.length; i++) {
    //Здесь мы начинаем цикл "for", где переменная "i" инициализируется с 0,
    // а условие для продолжения цикла - "i" должно быть меньше длины массива "arr".
    // Таким образом, цикл будет выполняться столько раз, сколько элементов в массиве "arr".
    if (arr[i] === 'milk') {
        console.log('good');
    } else if (arr[i] === 'beer') {
        console.log('bad');
    }
}
//Внутри цикла "for" мы используем условное выражение "if...else if", чтобы проверить
// значение каждого элемента массива "arr". Если значение элемента равно строке "milk",
// то мы выводим сообщение "good" в консоль. Если значение элемента равно строке "beer",
// мы выводим сообщение "bad". Если же значение элемента не соответствует ни одному из этих
// двух условий, ничего не происходит.
//
// Таким образом, в результате выполнения кода в консоль будет выведено сообщение "good"
// для каждого элемента массива, который содержит строку "milk", и сообщение "bad" для каждого
// элемента массива, который содержит строку "beer". В данном примере это будет так:
// "good","bad", "bad", "good", "good", "bad".


//Данный код перебирает каждый элемент в массиве arr при помощи цикла for.
// Для каждого элемента проверяется его значение: если это "milk", то в
// консоль выводится "good", если это "beer", то в консоль выводится "bad".