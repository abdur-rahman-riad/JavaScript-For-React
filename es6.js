const numbers = [23, 43, 45, 43, 76, 78];
const student = {
    name: "Riad Abdur Rahman",
    age: 21,
    subject: ["Algorithm", "Data Stucture", "Data Science", "Machine Learning"]
}
// Template String
const about = `My Name is ${student.name}, age ${student.age}, and number is ${numbers[5]} subject i study in ${student.subject[2]}`;
console.log(about);

// Arrow Function
const getFiftyFive = () => 55;
const addTen = number => number + 10;
const isEven = number => number % 2 == 0;
const addThreeNumber = (number1, number2, number3) => number1 + number2 + number3;
const multiLine = (number1, number2, number3) => {
    const firstCalculation = number1 + number2;
    const secondCalculation = number2 - number1;
    const finalCalculation = firstCalculation + secondCalculation;
    return finalCalculation;
}

// Spread Operator
const newNumbers = numbers;
numbers.push(85);
console.log(...newNumbers);