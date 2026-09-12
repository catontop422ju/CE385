const STUDENTS = [
  { id: "6501", name: "สมชาย", major: "CE", score: 78 },
  { id: "6502", name: "สมหญิง", major: "IT", score: 92 },
  { id: "6503", name: "สมปอง", major: "IT", score: 45 }
];

const calculateGrade = (score) => {
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
};


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
                reject(new Error(`ไม่พบข้อมูลนักศึกษา ID: ${id}`));
            }
        }, 300);
    });
}


function testStudentFetch(id) {
    console.log(`\n--- เริ่มค้นหา ID: ${id} ---`);
    
    fetchStudentByIdAsync(id)
        .then(student => {
            return { name: student.name, grade: calculateGrade(student.score) };
        })
        .then(data => {
            return `รายงานผล: นักศึกษา ${data.name} ได้รับเกรด ${data.grade}`;
        })
        .then(reportString => {
            console.log("สำเร็จ:", reportString);
        })
        .catch(error => {
            console.error("ล้มเหลว:", error.message);
        })
        .finally(() => {
            console.log("finally: จบการทำงาน");
        });
}

testStudentFetch("6501");    
testStudentFetch("9999");    
testStudentFetch(null);      



const promisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
};


function fakeReadFile(filename, callback) {
    setTimeout(() => {
        if (filename === "report.txt") {
            callback(null, "อ่านเนื้อหาไฟล์สำเร็จ");
        } else {
            callback(new Error("File not found"), null);
        }
    }, 400);
}

const readFileAsync = promisify(fakeReadFile);

setTimeout(() => {
    console.log("\n--- ทดสอบโบนัส: Promisify ---");
    readFileAsync("report.txt")
        .then(data => console.log("ผลการอ่าน:", data))
        .catch(err => console.error("เกิดข้อผิดพลาด:", err.message));
        
    readFileAsync("wrong.txt")
        .then(data => console.log("ผลการอ่าน:", data))
        .catch(err => console.error("เกิดข้อผิดพลาด:", err.message));
}, 1000);