const generateButton = document.getElementById("button")
generateButton.onclick = () => {
    function generateRandomNumbers() {
        let numbers = [];
        while (numbers.length < 5) {
            let random = Math.floor(Math.random() * 99) + 1;
            if (numbers.indexOf(random) === -1) {
                numbers.push(random);
            }
        }
        document.getElementById("num1").innerHTML = numbers[0];
        document.getElementById("num2").innerHTML = numbers[1];
        document.getElementById("num3").innerHTML = numbers[2];
        document.getElementById("num4").innerHTML = numbers[3];
        document.getElementById("num5").innerHTML = numbers[4];
    }
    generateRandomNumbers()
}


