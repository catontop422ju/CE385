const studemts = [
    {id: "1", name: "สมชาย", major: "CE", score: 85},
    {id: "2", name: "สมหญิง", major: "IT", score: 45},
    {id: "3", name: "วิชัย", major: "CE", score: 72},

];

const toGrade = (score) => {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
};
const getNames = (arr) => arr.map(s => s.name);
const PassedStudents = (arr) => arr.filter(s => s.score >= 50);
const getTotalScore = (arr) => arr.reduce((total, s) => total + s.score, 0);

const getAverageScore = (arr) => {
    if (arr.length === 0) return 0;
    return getTotalScore(arr) / arr.length;
};

const countByGrade = (arr) => arr.reduce((acc, student) => {
    const grade = toGrade(student.score);
    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
}, {});

const getTopStudent = (arr) => arr.reduce((top, student) => {
    return student.score > top.score ? student : top;
}, arr[0] || null);

const getCEPassedAverage = (arr) => arr
  .filter(student => student.major === "CE" && student.score >= 50) 
  .map(student => student.score) 
  .reduce((sum, score, index, filteredArr) => sum + (score / filteredArr.length), 0);

console.log("ดึงรายชชื่อ:", getNames(studemts));
console.log("นักศึกษาที่สอบผ่าน:", PassedStudents(studemts));
console.log("ผลรวมคะแนน:", getTotalScore(studemts));
console.log("คะแนนเฉลี่ย:", getAverageScore(studemts));
console.log("นับจำนวนตามเกรด:", countByGrade(studemts));
console.log("นักศึกษาที่ได้คะแนนสูงสุด:", getTopStudent(studemts));
console.log("คะแนนเฉลี่ยของนักศึกษา CE ที่สอบผ่าน:", getCEPassedAverage(studemts));