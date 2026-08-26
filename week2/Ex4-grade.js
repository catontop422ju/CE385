const scores = [95,80,75,70,65,60,55,50,49,0,-5,120];

for (const score of scores) {
  if (score < 0 || score > 100) {
    console.log("คะแนน " + score + " -> คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100");
  } else if (score >= 80) {
    console.log("คะแนน " + score + " -> เกรด A");
  } else if (score >= 75) {
    console.log("คะแนน " + score + " -> เกรด B+");
  } else if (score >= 70) {
    console.log("คะแนน " + score + " -> เกรด B");
  } else if (score >= 65) {
    console.log("คะแนน " + score + " -> เกรด C+");
  } else if (score >= 60) {
    console.log("คะแนน " + score + " -> เกรด C");
  } else if (score >= 55) {
    console.log("คะแนน " + score + " -> เกรด D+");
  } else if (score >= 50) {
    console.log("คะแนน " + score + " -> เกรด D");
  } else {
    console.log("คะแนน " + score + " -> เกรด F");
  }
}