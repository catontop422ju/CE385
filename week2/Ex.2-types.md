<!-- ส่วนที่ 1: ประกาศตัวแปร 6 ชนิดและแสดงผล -->
const myText = "สวัสดี"; — สร้างตัวแปรเก็บข้อความ (string)
const myNumber = 10; — สร้างตัวแปรเก็บตัวเลข (number)
const myBoolean = true; — สร้างตัวแปรเก็บค่าจริง/เท็จ (boolean)
let myUndefined; — สร้างตัวแปรโดยยังไม่ใส่ค่าลงไป (undefined)
const myNull = null; — สร้างตัวแปรและตั้งใจกำหนดให้เป็นค่าว่าง (null)
const myArray = [1, 2, 3]; — สร้างตัวแปรเก็บชุดข้อมูลหลายค่า (array)
console.log("ค่า:", ..., "| ชนิด:", typeof ...); — พิมพ์ค่าตัวแปรคู่กับใช้ typeof เพื่อดูชนิดข้อมูล

<!-- ส่วนที่ 2: ตอบคำถามโจทย์ -->
console.log("typeof null:", typeof null); — ดูชนิดของ null (พิมพ์ออกมาได้ "object")
let unassigned; — ประกาศตัวแปรเปล่าขึ้นมาเพื่อทดสอบ
console.log("ตัวแปรไม่ใส่ค่า:", typeof unassigned); — ดูชนิดตัวแปรที่ไม่มีค่า (พิมพ์ออกมาได้ "undefined")
const nanVal = Number("abc"); — ลองแปลงข้อความตัวหนังสือเป็นตัวเลข ซึ่งแปลงไม่ได้ จะได้ค่า NaN
console.log("typeof NaN:", typeof nanVal); — ดูชนิดของ NaN (พิมพ์ออกมาได้ "number")

<!-- ส่วนที่ 3: การแปลงชนิดข้อมูลและการเปรียบเทียบ -->
const inputAge = "20"; — เก็บตัวเลขในรูปแบบข้อความ (string)
const inputScore = "85.5"; — เก็บตัวเลขทศนิยมในรูปแบบข้อความ (string)
const ageNumber = Number(inputAge); — แปลงข้อความ "20" ให้กลายเป็นตัวเลข 20
console.log("อายุ + 5 =", ageNumber + 5); — เอาตัวเลขที่แปลงแล้วมาบวก 5 (ได้ผลลัพธ์ 25)
const scoreNumber = Number(inputScore); — แปลงข้อความ "85.5" ให้กลายเป็นตัวเลข 85.5
console.log("คะแนน =", scoreNumber.toFixed(1)); — จัดการตัวเลขให้แสดงทศนิยม 1 ตำแหน่ง
console.log("inputAge === 20 :", ...); — เช็คว่าข้อความ "20" เท่ากับตัวเลข 20 หรือไม่ (ได้ false เพราะชนิดต่างกัน)
console.log("Number(inputAge) === 20 :", ...); — เช็คว่าตัวเลข 20 เท่ากับตัวเลข 20 หรือไม่ (ได้ true เพราะเป็นตัวเลขเหมือนกัน)