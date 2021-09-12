// 1. JSON
const student = {
    name: "Riad Abdur Rahman",
    age: 21,
    subject: ["Algorithm", "Data Science", "Machine Learning"]
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// 2. Fetch
fetch('url')
    .then(response => response.JSON())
    .then(data => console.log(data))

// 3. Keays, Values
const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);

// Loop
const numbers = [23, 45, 34, 67, 32];
numbers.forEach(number => console.log(number));