// Câu 1
console.log('CÂU 1');
var numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
var targetCounting = 2;

let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === targetCounting) {
        count++;
    }
}
console.log(count); 

//Câu 2
console.log('CÂU 2');
var numbers = [5, 2, 9, 3, 7, 11, 8];
let maxNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber)

//CÂu 3
console.log('CÂU 3');
var array = [1, 2, 3, 4, 5];

var reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray);

// câu 4
console.log('CÂU 4');
var duplicatesArray = [1, 2, 2, 3, 4, 4, 5];

var uniqueArray = [];
for (let i = 0; i < duplicatesArray.length; i++) {
    if (uniqueArray.indexOf(duplicatesArray[i]) === -1) {
        uniqueArray.push(duplicatesArray[i]);
    }
}

console.log(uniqueArray);

// câu 5
console.log('CÂU 5');
const students = [
    { name: "Duy", age: 20, grades: [80, 85, 90] },
    { name: "Huy", age: 21, grades: [75, 88, 95] }
];

function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

const averageGrades = students.map(student => calculateAverage(student.grades));
const overallAverage = calculateAverage(averageGrades);

console.log(overallAverage);

// câu 6
console.log('CÂU 6');
const products = [
    { name: "Áo", price: 20 },
    { name: "Quần", price: 30 },
    { name: "Giày", price: 50 }
];

let cheapestProduct = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price < cheapestProduct.price) {
        cheapestProduct = products[i];
    }
}

console.log(cheapestProduct);

// câu 7
console.log('CÂU 7');
var students2 = [
    { name: "Alice", age: 20, grades: { math: 90, english: 85, science: 88 } },
    { name: "Bob", age: 21, grades: { math: 80, english: 75, science: 78 } }
];

var groupedGrades = {};

students2.forEach(student => {
    for (let subject in student.grades) {
        if (!groupedGrades[subject]) {
            groupedGrades[subject] = [];
        }
        groupedGrades[subject].push(student.grades[subject]);
    }
});
console.log(groupedGrades);
