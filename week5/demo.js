// ตัวอย่างการทำงานแบบ Asynchronous (Callback)//
// "ฐานข้อมูล" จำลอง: ตอบช้า 400ms เหมือนงาน I/O จริง
const STUDENTS = [
  { id: "6501", name: "สมชาย", score: 78 },
  { id: "6502", name: "สมหญิง", score: 92 },
];

function fetchStudentById(id, callback) {
  setTimeout(() => {
    const student = STUDENTS.find((s) => s.id === id);
    callback(student);            // งานเสร็จค่อยเรียก "โทรกลับ"
  }, 400);
}

fetchStudentById("6501", (student) => {
  console.log("ได้ข้อมูล:", student.name);
});
console.log("บรรทัดนี้พิมพ์ก่อนได้ข้อมูล!");   // ระบบไม่เคยหยุดรอ

function fetchStudentByIdAsync(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(STUDENTS.find((s) => s.id === id)), 400);
  });
}

fetchStudentByIdAsync("6501")
  .then((student) => {
    console.log("ขั้น 1: ได้นักศึกษา =", student.name);
    return student.score;                 // สิ่งที่ return = input ของขั้นหน้า
  })
  .then((score) => {
    console.log("ขั้น 2: ได้คะแนน   =", score);
    return score >= 60 ? "B" : "F";
  })
  .then((grade) => {
    console.log("ขั้น 3: ได้เกรด     =", grade);
  });