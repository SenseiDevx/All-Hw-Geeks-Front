const starbucks = {
    coffee: {
        latte: "Эспрессо с молоком",
        americano: "Двойной эспрессо с водой",
        cappuccino: "Эспрессо с молоком и пенкой",
    },
    tea: {
        black: "Черный чай",
        green: "Зеленый чай",
        herbal: "Травяной чай",
    }
};

const drinkName = prompt("Что бы вы хотели заказать?");

if (starbucks.coffee[drinkName] !== undefined) {
    console.log(`Вы заказали ${drinkName} кофе. Вот описание: ${starbucks.coffee[drinkName]}`);
} else if (starbucks.tea[drinkName] !== undefined) {
    console.log(`Вы заказали ${drinkName} чай. Вот описание: ${starbucks.tea[drinkName]}`);
} else {
    console.log(`Извините, у нас нет ${drinkName} в нашем меню.`);
}

