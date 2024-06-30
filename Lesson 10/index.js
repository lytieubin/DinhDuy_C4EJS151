// Câu 1
console.log('CÂU 1');
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
const myArray = [12, 33, 45, 7, 89];
const sortedArray = sortArray(myArray);

console.log(sortedArray); 

// Câu 2
console.log('CÂU 2');
function findKthLargestUnique(arr, k) {
    const uniqueArray = [...new Set(arr)];
    uniqueArray.sort((a, b) => b - a);
    
    if (k <= uniqueArray.length) {
        return uniqueArray[k - 1];
    } else {
        return null; 
    }
}

var myArray2 = [2, 5, 2, 7, 9, 10];
let k = 3;
const result2 = findKthLargestUnique(myArray2, k);

console.log(result2);

// Câu 3
console.log('CÂu 3')
function findMostFrequentNumber(arr) {
    const count = {};

    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    let maxCount = 0;
    let mostFrequentNumber = null;

    for (let num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostFrequentNumber = Number(num);
        } else if (count[num] === maxCount) {
            mostFrequentNumber = Math.max(mostFrequentNumber, Number(num));
        }
    }

    return mostFrequentNumber;
}

var myArray3 = [1, 2, 3, 2, 2, 1, 4, 5, 10];
var result3 = findMostFrequentNumber(myArray3);

console.log(result3);

// Câu 4
console.log('CÂu 4')
function splitWords(str) {
    return str.split(" ");
}

const inputString = "This is a test";
const wordsArray = splitWords(inputString);
console.log(wordsArray);

// Câu 5
console.log('CÂu 5')
function sumNumericValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

const data = { a: 1, b: 'hello', c: 3, d: 'world' };
const totalSum = sumNumericValues(data);

console.log(totalSum);