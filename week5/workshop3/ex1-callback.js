const STUDENTS = [
    { id: "678901", name: "สมชาย", major: "CE", score: 78 },
    { id: "678902", name: "สมหญิง", major: "IT", score: 92 },
    { id: "678903", name: "สมปอง", major: "IT", score: 45 },
    { id: "678904", name: "สมศรี", major: "CE", score: 85 }
]

function fetchStudentById(id, callback) {
  if (typeof id !== 'string' || id.trim() === '') {
    return callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
  }

  setTimeout(() => {
    const student = STUDENTS.find((s) => s.id === id);

    if (!student) {
      return callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
    }

    
    callback(null, { ...student });
  }, 300);
}

fetchStudentById("678901", (error, student) => {
  if (error) return console.error("กรณี ก Error:", error.message);
  console.log("กรณี ก พบข้อมูล:", student);
});

fetchStudentById("999999", (error, student) => {
  if (error) return console.error("กรณี ข Error:", error.message);
  console.log("กรณี ข พบข้อมูล:", student);
});

fetchStudentById(42, (error, student) => {
  if (error) return console.error("กรณี ค Error:", error.message);
  console.log("กรณี ค พบข้อมูล:", student);
});