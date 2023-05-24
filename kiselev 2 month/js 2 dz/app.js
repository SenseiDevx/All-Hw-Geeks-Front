let color = prompt("Введите цвет светофора (красный, желтый или зеленый)");

switch(color) {
  case "красный":
    console.log("Стой!");
    break;
  case "желтый":
    console.log("Жди!");
    break;
  case "зеленый":
    console.log("Иди!");
    break;
  default:
    console.log("Вы ввели некорректный цвет!");
}

//
// const num = prompt("Введите число от 1 до 9:");
// let romanNumeral;
//
// switch(num) {
//     case '1':
//         romanNumeral = "I";
//         break;
//     case '2':
//         romanNumeral = "II";
//         break;
//     case '3':
//         romanNumeral = "III";
//         break;
//     case '4':
//         romanNumeral = "IV";
//         break;
//     case '5':
//         romanNumeral = "V";
//         break;
//     case '6':
//         romanNumeral = "VI";
//         break;
//     case '7':
//         romanNumeral = "VII";
//         break;
//     case '8':
//         romanNumeral = "VIII";
//         break;
//     case '9':
//         romanNumeral = "IX";
//         break;
//     default:
//         romanNumeral = "Некорректный ввод!";
//         break;
// }
//
// console.log(romanNumeral);
//
// planets = [
//     "Меркурий",
//     "Венера",
//     "Земля",
//     "Марс",
//     "Юпитер",
//     "Сатурн",
//     "Уран",
//     "Нептун",
//     "Плутон"
// ]
//
// # Запрашиваем число у пользователя
// number = int(input("Введите порядковый номер планеты: "))
//
// # Проверяем, что число находится в диапазоне от 1 до 9
// if 1 <= number <= len(planets):
//     planet_name = planets[number - 1]
//     print(f"Планета под номером {number} - {planet_name}")
// else:
//     print("Некорректный порядковый номер планеты")

// let number = parseInt(prompt('Введите число от 1 до 9:'));
//
// // Проверка введенного числа на допустимый диапазон
// if (number < 1 || number > 9) {
//   alert('Ошибка: число должно быть от 1 до 9!');
// } else {
//   // Конвертирование числа в римскую систему
//   let romanNumeral = romanNumerals[number];
//   alert(`Римское число: ${romanNumeral}`);
// }