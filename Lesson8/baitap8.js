// Câu1
console.log('Câu 1:Tổng các số từ 1 đến 100')
let sum=0;
for ( let i = 0; i <= 100; i++) {
    sum += i
}
console.log('Là:',sum)    

// // Câu 2

console.log('Câu 2: Các số chia hết cho 3 và 5')
let cau2 = 0;
for( let i = 0; i <= 100; i++) {
    cau2 = i;
    if(cau2 %3 === 0 && cau2 %5 === 0){
    console.log (cau2);}
}

// Câu 3 
console.log('Câu 3: Tính giai thừa 01 số nguyên');
console.log('Số nguyên =5')
let result = 1;
    for (let i = 2; i <= 5; i++) {
      result *= i;
    }
  console.log('giai thừa 1-5='+ result);

//   Câu 4
console.log('Câu 4 Bảng cửu chương');
for (let i = 2; i <= 9; i++) {
    console.log('Bảng cửu chương ' + i + ' :');
    for (let j = 1; j <= 10; j++) {
      console.log(i + ' x ' + j + ' = ' + i * j);
    }
    console.log('');
  };

//   Câu 5
console.log('Câu 5 ');
let binary = '';
let number = 35;

while (number > 0) {
  binary = (number % 2) + binary;
  number = Math.floor(number / 2);
}

console.log(binary);

// Câu6
console.log('Câu 6')
n = 5;
let cau6 = 0;
for (let i=1; i<=n; i++) {
    cau6 = Math.sqrt(i + cau6);
    console.log(cau6);
}
console.log(cau6);
//  Câu 7
console.log('Câu 7');
n = 5;
let cau7 = 0;
for (let i=0; i<=n; i++) {
    cau7 = Math.sqrt(n - i + cau7);
    console.log(cau7);
}
console.log(cau7);
