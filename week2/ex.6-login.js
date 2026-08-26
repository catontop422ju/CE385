function login(inputUser, inputPass, role, isActive, age) {
  
  if (inputUser !== "admin" || inputPass !== "ce385pass") {
    return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
  
  if (isActive === false) {
    return "บัญชีนี้ถูกระงับการใช้งาน";
  }
  
  if (age < 18) {
    return "อายุไม่ถึงเกณฑ์";
  }
  
  if (role === "อาจารย์") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
  } else if (role === "นักศึกษา") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
  }
}

console.log(login("admin", "ce385pass", "อาจารย์", true, 25)); 
console.log(login("admin", "ce385pass", "นักศึกษา", true, 20)); 
console.log(login("admin", "wrongpass", "อาจารย์", true, 25)); 
console.log(login("wronguser", "ce385pass", "อาจารย์", true, 25)); 
console.log(login("admin", "ce385pass", "อาจารย์", false, 25)); 
console.log(login("admin", "ce385pass", "นักศึกษา", true, 16)); 