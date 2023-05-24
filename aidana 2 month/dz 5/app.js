//1 - задание
function filterBooks(books) {
    const booksWithU = [];
    const booksWithoutU = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].indexOf("у") !== -1) {
            booksWithU.push(books[i]);
        } else {
            booksWithoutU.push(books[i]);
        }
    }

    console.log("Книги с буквой «у»: ", booksWithU);
    console.log("Книги без буквы «у»: ", booksWithoutU);
}
//Этот код определяет функцию filterBooks, которая принимает массив книг books в качестве
// аргумента. Функция разделяет книги на два массива - booksWithU и booksWithoutU -
// в зависимости от того, содержат ли они букву "у". Книги, содержащие букву "у",
// добавляются в массив booksWithU, а книги без буквы "у" - в массив booksWithoutU.
// Затем функция выводит на консоль две строки: "Книги с буквой «у»:" и "Книги без буквы «у»:",
// сопровождаемые соответствующими массивами.
// Затем определяется массив books, содержащий названия нескольких книг, и функция
// filterBooks вызывается с этим массивом в качестве аргумента. Результаты выполнения
// функции выводятся на консоль.
// Обратите внимание, что в этом коде используется метод indexOf() для проверки,
// содержит ли каждая книга букву "у". Этот метод возвращает индекс первого вхождения заданного элемента в массиве или -1, если элемент не найден. Если буква "у" найдена в строке, условие возвращает значение true и книга добавляется в массив booksWithU. Если буква "у" не найдена, условие возвращает значение false и книга добавляется в массив booksWithoutU.

const books = ["Дюна", "1984", "Мастер и Маргарита", "Гарри Поттер и философский камень", "Колыбель для кошки", "утка"];
filterBooks(books);
//2 - задание
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

const str = "привет";
const reversed = reverseString(str);
console.log(reversed);
// Данный код содержит функцию reverseString, которая
// принимает на вход строку str, и возвращает ее в обратном порядке.
// Функция начинается с создания пустой строки reversed,
// которая будет хранить обратный порядок символов.
// Затем, функция проходит через исходную строку str в цикле for,
// начиная с последнего символа str[str.length - 1] и добавляет
// каждый символ в начало строки reversed, используя оператор +=
// для конкатенации.
// В конце функция возвращает получившуюся обратную строку reversed.
// В данном примере, функция вызывается на строке "привет",
// и результат ее работы выводится на консоль, путем вызова
// функции console.log. Консоль должна вывести строку "тевирп",
// которая является исходной строкой "привет" в обратном порядке.

