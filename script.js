function getNumber(message) {
    let value;
    while (true) {
        let input = prompt(message);
        value = Number(input);

        
        if (input !== null && input.trim() !== "" && !isNaN(value)) {
            return value;
        }
        alert("Це не число! Спробуйте ще раз.");
    }
}


const number1 = getNumber("Введіть перше число:");
const number2 = getNumber("Введіть друге число:");


if (number1 % number2 === 0) {
    console.log("Числа кратні!");
    alert("Числа кратні!");
} else {
    console.log(false);
    alert(false);
}