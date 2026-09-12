const STUDENTS = [
  { id: "6501", name: "สมชาย", major: "CE", score: 78 },
  { id: "6502", name: "สมหญิง", major: "IT", score: 92 },
  { id: "6503", name: "สมปอง", major: "IT", score: 45 }
];

function getGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}

// คัดลอกจากข้อ 2
function fetchStudentByIdAsync(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id || typeof id !== "string") {
        return reject(new Error("รูปแบบ ID ไม่ถูกต้อง"));
      }
      const student = STUDENTS.find(s => s.id === id);
      if (student) {
        resolve({ ...student });
      } else {
        reject(new Error(`ไม่พบนักศึกษา ID: ${id}`));
      }
    }, 300);
  });
}

async function reportSequential() {
  console.log("--- 1. reportSequential ---");
  const ids = ["6501", "6502", "6503"];
  const start = Date.now();

  for (const id of ids) {
    const student = await fetchStudentByIdAsync(id);
    console.log(`ดึงข้อมูล: ${student.name}`);
  }

  const end = Date.now();
  const timeSpent = end - start;
  console.log(`เวลาที่ใช้: ${timeSpent} ms`);
  return timeSpent;
}

async function reportParallel(seqTime) {
  console.log("\n--- 2. reportParallel ---");
  const ids = ["6501", "6502", "6503"];
  const start = Date.now();

  const students = await Promise.all(
    ids.map(id => fetchStudentByIdAsync(id))
  );

  students.forEach(s => console.log(`ดึงข้อมูล: ${s.name}`));

  const end = Date.now();
  const timeSpent = end - start;
  const speedUp = (seqTime / timeSpent).toFixed(1);

  console.log(`เวลาที่ใช้: ${timeSpent} ms`);
  console.log(`เร็วขึ้นกว่าแบบแรกประมาณ ${speedUp} เท่า`);
}

async function safeReport(id) {
  try {
    const student = await fetchStudentByIdAsync(id);
    const grade = getGrade(student.score);
    console.log(`พบข้อมูล: ${student.name} (เกรด ${grade})`);
  } catch (error) {
    console.log(`ตรวจไม่พบ: ${error.message}`);
  } finally {
    console.log(`-- จบการตรวจสอบ ${id} --`);
  }
}

async function main() {
  const seqTime = await reportSequential();
  await reportParallel(seqTime);

  console.log("\n--- 3. safeReport ---");
  await safeReport("6501");
  await safeReport("9999");
}

main();
