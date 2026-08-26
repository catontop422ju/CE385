// ส่วนที่ 1 — สร้างตัวแปร 6 ชนิด และแสดงผล

const myText = "สวัสดี";
const myNumber = 10;
const myBoolean = true;
let myUndefined;
const myNull = null;
const myArray = [1, 2, 3];

console.log("ค่า:", myText, "| ชนิด:", typeof myText);
console.log("ค่า:", myNumber, "| ชนิด:", typeof myNumber);
console.log("ค่า:", myBoolean, "| ชนิด:", typeof myBoolean);
console.log("ค่า:", myUndefined, "| ชนิด:", typeof myUndefined);
console.log("ค่า:", myNull, "| ชนิด:", typeof myNull);
console.log("ค่า:", myArray, "| ชนิด:", typeof myArray);


// ส่วนที่ 2 — ตอบคำถามด้วยโค้ด


console.log("typeof null:", typeof null);


let unassigned;
console.log("ตัวแปรไม่ใส่ค่า:", typeof unassigned);


const nanVal = Number("abc");
console.log("typeof NaN:", typeof nanVal);


// ส่วนที่ 3 — การแปลงชนิดข้อมูล

const inputAge = "20";
const inputScore = "85.5";


const ageNumber = Number(inputAge);
console.log("อายุ + 5 =", ageNumber + 5);


const scoreNumber = Number(inputScore);
console.log("คะแนน =", scoreNumber.toFixed(1));


console.log("inputAge === 20 :", inputAge === 20);               
console.log("Number(inputAge) === 20 :", Number(inputAge) === 20); 