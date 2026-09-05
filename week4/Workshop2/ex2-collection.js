const students = [
  { id: "1", name: "สมชาย", major: "CE", score: 85, contact: { email: "somchai@mail.com", phone: "081" } },
  { id: "2", name: "สมหญิง", major: "IT", score: 45, contact: { email: "somying@mail.com", phone: "082" } },
  { id: "3", name: "วิชัย", major: "CE", score: 72, contact: { email: "wichai@mail.com", phone: "083" } },
  { id: "4", name: "มาลี", major: "IT", score: 90, contact: { email: "malee@mail.com", phone: "084" } },
  { id: "5", name: "ปิติ", major: "CE", score: 65, contact: { email: "piti@mail.com", phone: "085" } },
  { id: "6", name: "ชูใจ", major: "IT", score: 49, contact: { email: "choojai@mail.com", phone: "086" } }
];


const findById = (arr, id) => arr.find(s => s.id === id);

const findByMajor = (arr, major) => arr.filter(s => s.major === major);

const hasFailingStudent = (arr) => arr.some(s => s.score < 50);

const getEmail = (arr, id) => {
  const student = findById(arr, id);
  return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};

console.log("ผลการหา ID 9999:", findById(students, "9999"));
console.log("ผลการหา Email ID 9999:", getEmail(students, "9999"));

const newStudent = { id: "7", name: "จอน", major: "CE", score: 80 }; 
const newList = [...students, newStudent]; 

console.log("ผลการหา Email ของจอน (ID 7):", getEmail(newList, "7"));