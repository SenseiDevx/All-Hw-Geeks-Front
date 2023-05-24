const button = document.querySelector('button')
button.addEventListener('click', function() {
    const validateCardOwnerName = function() {
        let cardOwnerName = document.getElementById('cardOwnerName').value
        let nameParts = cardOwnerName.trim().split(' ')

        if (nameParts.length === 2) {
            // Имя и фамилия указаны корректно
            alert('Имя владельца карты введено корректно!')
        } else if (nameParts.length === 3) {
            // Если введено ФИО
            alert('На имя владельца карты надо ввести только Фамилия и имя!')
        } else {
            // Ошибка
            alert('Ошибка! Пожалуйста, введите имя и фамилию через пробел.')
        }
    }

    validateCardOwnerName()
    console.log(button)
})

//
// const str = 'Hello, World!';
// const parts = str.split(', ');
//
// console.log(parts);
//
//
// const str = 'Hello';
// const characters = str.split('');
//
// console.log(characters);
