const cards = [
    {
        cardNo: "4215789646487894",
        cvcCode: 123,
        ownerName: "Harry Born",
        expiryDate: "01/2023",
    },
    {
        cardNo: "5465456894648948",
        cvcCode: 954,
        ownerName: "John Doe",
        expiryDate: "05/2025",
    },
    // создать около 7-10 разных карт
];

// Задание №1
const maskedCards = cards.map((card) => ({
    cardNo: card.cardNo.replace(/\d{12}/, "******"),
    ownerName: card.ownerName.toUpperCase(),
    expiryDate: card.expiryDate,
    cardType:
        card.cardNo.startsWith("4")
            ? "VISA"
            : card.cardNo.startsWith("5")
                ? "MasterCard"
                : card.cardNo.startsWith("9")
                    ? "ElCard"
                    : null,
}));

// Задание №2
const visaCards = cards.filter((card) => card.cardNo.startsWith("4"));

// Задание №3
const expiredCards = cards.filter((card) => {
    const [month, year] = card.expiryDate.split("/");
    const currentDate = new Date();
    const cardExpirationDate = new Date(Number(`20${year}`), month - 1, 1);
    return cardExpirationDate < currentDate;
});

console.log(maskedCards);
console.log(visaCards);
console.log(expiredCards);
