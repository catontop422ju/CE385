// 1). Function Declartion --ประกาศแบบตั้งชื่อ
function add(a,b) {
    return a + b;
}

//2. Function Expression --เก็บฟังก์ชันไว้ในตัวแปล
const subtract = function(a, b) {
    return a - b;
};

//3. Arrow Function -- รูปแบบสั้นของ ใช้ย่อยที่สุดในดค้ดสมันใหม่
const multiply = (a, b) => a * b;

console.log("add(10, 3)         =", add(10, 3));
console.log("subtract(10, 3)    =", subtract(10, 3));
console.log("multiply(10, 3)    =", multiply(10, 3));

function createStudent(name, year = 1, isActive = true) {
    return {name: name,year: year,isActive: isActive }; //ชื่อ property ตรงกัยชื่อตัวแปล เขียนย่อได้
}

console.log("ไม่ส่ง year     =", createStudent("สมชาย"));
console.log("ส่งครบ        =", createStudent("สมหญิง", 3, false));
console.log("ส่ง Undefind  =", createStudent("มานี", undefined, undefined));
console.log("ส่ง null       =", createStudent("ปิติ", null, null));
console.log("ส่ง 0          =", createStudent("น้ำฝน", 0,));

//--Reset Parameter: รับพารามิเตอร์ที่เหลือทั้งหมดเป็น Array ---
function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log("\nsumAll(10,20,30) =", sumAll(10, 20, 30));
console.log("sumAll() =", sumAll());

// rest ต้องอยู่ท้ายสุดเสมอ
function formatScores(studentName, ...scores) {
  return `${studentName}: ${scores.join(", ")}`;
}
console.log(formatScores("สมชาย", 78, 91, 45));

const course = {
  code: "CE385",
  instructor: { name: "สนายุ", email: "sanayu.jin@dpu.ac.th" },
  schedule: { day: "จันทร์", room: "5-701" },
};

console.log("course.code   =", course.code);
console.log("course.instructor =", course.instructor);
console.log("course.schedule =", course.schedule);

try {
    console.log(course.assistant.name); //เข้าถึงต่อจาก Undefind 
} catch (error) {
    console.log("course.assistant.name    =", error.name + ": " + error.message);
}

// Optional chaining กันพัง
console.log("\ncourse.assistant?.name  =", course.assistant?.name, " <-- ไม่ error");
console.log('?. กับ ?? ใช้คู่กัน       =', course.assistant?.name ?? "ยังไม่มีผู้ช่วยสอน");

// ความต่างของ ?? กับ || — สำคัญมากเมื่อค่าที่ถูกต้องคือ 0 หรือ ""
const settings = { retryCount: 0, prefix: "" };
console.log("\nretryCount ?? 3 =", settings.retryCount ?? 3, " <-- ถูก: 0 เป็นค่าที่ตั้งใจ");
console.log("retryCount || 3 =", settings.retryCount || 3, " <-- ผิด: 0 เป็น falsy เลยถูกแทนที่");
console.log('prefix ?? "CE"  =', JSON.stringify(settings.prefix ?? "CE"));
console.log('prefix || "CE"  =', JSON.stringify(settings.prefix || "CE"), " <-- ผิดเช่นกัน");

const students = [
  { id: "6501", name: "สมชาย",  score: 78 },
  { id: "6502", name: "สมหญิง", score: 91 },
  { id: "6503", name: "มานี",   score: 45 },
  { id: "6504", name: "ปิติ",   score: 66 },
];

function toGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
}

const scores = [78, 91, 45, 66];
const grades = scores.map((score) => toGrade(score));
console.log("scores  =", scores);
console.log("grades  =", grades);
console.log("ต้นฉบับ  =", scores, " <-- map ไม่แก้ต้นฉบับ");

// ใช้กับ array ของ object — รูปแบบที่เจอบ่อยที่สุดในงาน Backend
const summary = students.map((student) => ({
  id: student.id,
  name: student.name,
  grade: toGrade(student.score),
}));
console.log("\nแปลงเป็นรูปแบบที่จะส่งออกทาง API:");
console.log(summary);

// ข้อผิดพลาดที่พบบ่อย: ลืม return ในฟังก์ชันที่มีปีกกา
const forgot = scores.map((score) => { toGrade(score); });
console.log("\nลืม return =", forgot, " <-- ได้ undefined ทั้งหมด");