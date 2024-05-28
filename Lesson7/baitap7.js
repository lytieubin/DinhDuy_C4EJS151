// cau 1
let length = "5";
let width = "10";

let area = length * width;
let perimeter = 2 * (Number(length) + Number(width));

console.log("Diện tích hình chữ nhật là: " + area);
console.log("Chu vi hình chữ nhật là: " + perimeter);

//cau 2
let S = 12345;
S = parseInt(S, 10);

let gio = Math.floor(S / 3600);
let phut = Math.floor((S % 3600) / 60);
let giay = S % 60;

console.log(gio + "h " + phut + "m " + giay + "s");
//cau 3
let coSo = 5;
let luyThua = 3;
let ketQua = Math.pow(coSo, luyThua);

console.log(coSo + "^" + luyThua + " = " + ketQua);
//cau 4
let so1 = 7;
let so2 = 13;
let so3 = 21;

let trungBinh = (so1 + so2 + so3) / 3;

console.log("Trung bình của ba số " + so1 + ", " + so2 + ", " + so3 + " là: " + trungBinh);
//cau 5
let x1 = 2;
let y1 = 3;
let x2 = 5;
let y2 = 7;

let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log("Khoảng cách giữa hai điểm (" + x1 + ", " + y1 + ") và (" + x2 + ", " + y2 + ") là: " + distance);
//cau 6
// Cố định ba số
let so1bai6 = 15;
let so2bai6 = 8;
let so3bai6 = 22;

let ketQuabai6 = (so1bai6 > so2bai6 && so1bai6 > so3bai6);

console.log("Kết quả so sánh: " + ketQuabai6);

//cau 7
let chuoi1 = "Tôi là ai?";
let chuoi2 = "Tôi là ai?";

let ketQuabai7 = (chuoi1 === chuoi2);

// Hiển thị kết quả
console.log("Kết quả so sánh: " + ketQuabai7);
// cau 8 
let soDuong = 10;

if (soDuong > 0) {
    console.log(soDuong + " true");
} else {
    console.log(soDuong + " false");
}
// cau 9
let nam = 2024;

if ((nam % 400 === 0) || ((nam % 4 === 0) && (nam % 100 !== 0))) {
    console.log(nam + " true");
} else {
    console.log(nam + " false");
}
// cau 10
let gio1 = 23;
let phut1 = 30;
let gio2 = 19;
let phut2 = 50;

if (gio1 < gio2 || (gio1 === gio2 && phut1 < phut2)) {
    console.log("Thời gian " + gio1 + "h:" + phut1 + "m nhỏ hơn " + gio2 + "h:" + phut2 + "m");
} else if (gio1 === gio2 && phut1 === phut2) {
    console.log("Thời gian " + gio1 + "h:" + phut1 + "m bằng " + gio2 + "h:" + phut2 + "m");
} else {
    console.log("Thời gian " + gio1 + "h:" + phut1 + "m lớn hơn " + gio2 + "h:" + phut2 + "m");
}








