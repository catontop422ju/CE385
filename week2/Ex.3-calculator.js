const workshopRaw = "48";
const attendance = "9";
const project = "17";
const midterm = "15";
const final = "24";

const MAX_WORKSHOP_RAW = 60;      
const MAX_WORKSHOP_WEIGHTED = 20; 
const MAX_TOTAL_SCORE = 100;      
const TARGET_SCORE = 80;          


const workshopWeighted = (Number(workshopRaw) / MAX_WORKSHOP_RAW) * MAX_WORKSHOP_WEIGHTED;

const totalScore = workshopWeighted + Number(attendance) + Number(project) + Number(midterm) + Number(final);


const percentage = (totalScore / MAX_TOTAL_SCORE) * 100;


const calculatedFinalScore = TARGET_SCORE - totalScore;

console.log(`=== ใบสรุปคะแนนวิชา CE385 ===
1. คะแนน Workshop: ${workshopWeighted.toFixed(2)} / ${MAX_WORKSHOP_WEIGHTED}
2. คะแนนเข้าเรียน: ${Number(attendance).toFixed(2)}
3. คะแนนโปรเจกต์: ${Number(project).toFixed(2)}
4. คะแนนกลางภาค: ${Number(midterm).toFixed(2)}
5. คะแนนปลายภาค: ${Number(final).toFixed(2)}
---------------------------------------------
คะแนนรวมทั้งหมด: ${totalScore.toFixed(2)} / ${MAX_TOTAL_SCORE}
คิดเป็น: ${percentage.toFixed(2)}%
คะแนนที่ขาดจากเกณฑ์ 80: ${calculatedFinalScore.toFixed(2)} คะแนน`);