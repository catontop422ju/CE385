const isValidScore = (score) => typeof score === 'number' && score >= 0 && score <= 100;


const toGrade = (score) => {
  
  if (!isValidScore(score)) return "คะแนนไม่ถูกต้อง";

  const gradeRules = [
    { min: 80, grade: "A" },
    { min: 75, grade: "B+" },
    { min: 70, grade: "B" },
    { min: 65, grade: "C+" },
    { min: 60, grade: "C" },
    { min: 55, grade: "D+" },
    { min: 50, grade: "D" },
    { min: 0, grade: "F" }
  ];
  

  return gradeRules.find(rule => score >= rule.min).grade;
};


const calculateWorkshopScore = (raw, full = 60, weight = 20) => (raw / full) * weight;


const calculateTotal = (workshop, attendance, project, midterm, final) => {
  return workshop + attendance + project + midterm + final;
};


const students = [
  { name: "นร. A", raw: 48, att: 9, proj: 17, mid: 15, fin: 24 },
  { name: "นร. B", raw: 60, att: 10, proj: 20, mid: 30, fin: 20 },
  { name: "นร. C", raw: 25, att: 5, proj: 10, mid: 12, fin: 15 }
];

const results = students.map(std => {
  const workshopScore = calculateWorkshopScore(std.raw);
  const totalScore = calculateTotal(workshopScore, std.att, std.proj, std.mid, std.fin);
  return {
    "ชื่อ": std.name,
    "คะแนนรวม": totalScore,
    "เกรด": toGrade(totalScore)
  };
});

console.log("=== ผลการเรียนนักศึกษา ===");
console.table(results); 


console.log("\n=== พิสูจน์ค่าเริ่มต้น (Default Parameters) ===");

const test1 = calculateWorkshopScore(48);
const test2 = calculateWorkshopScore(48, 60, 20);

console.log(`calculateWorkshopScore(48) ได้ผลลัพธ์: ${test1}`);
console.log(`calculateWorkshopScore(48, 60, 20) ได้ผลลัพธ์: ${test2}`);
console.log(`เท่ากันหรือไม่: ${test1 === test2}`);

const test3 = calculateWorkshopScore(48, undefined, 25);
console.log(`calculateWorkshopScore(48, undefined, 25) ได้ผลลัพธ์: ${test3}`);

