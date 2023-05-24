// переменная в которой хранится наше матем действие
let op;
// функция для результата

function func() {
    // переменная для результата
    let result;
    // получаем первое и второе число
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    // смотрим, что было в переменной
    // с действием, и действуем исходя из этого
    switch (op) {
        case '+':
        result = num1 + num2
        break;
        case '-':
        result = num1 - num2
        break;
        case '*':
        result = num1 * num2
        break;
        case '/':
        if (num2 === 0) {
            document.getElementById("result").textContent ='Ошибка!';
            return;
        }
        result = (num1 / num2).toFixed(3)
        break;
        default:
            document.getElementById("result")
                .textContent ='Ошибка, выберите действие';
    }
    // отправляем рузультат на страницу
    document.getElementById("result").innerText = result;
}