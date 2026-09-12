const wait = (ms, value, willfiall = false) => 
    new Promise((resolve, reject) => {
        setTimeout(() => (willfiall ? reject(new Error("เกิดข้อผิดพลาด")) : resolve(value)), ms);
    });
const timeoutPromise = (ms)=>
    new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms));

async function main() {
    try {
        const result = await Promise.all([
            wait(300, "โปร์ไฟล์"),
            wait(400, "ตารางเรียน"),
            wait(500, "ประกาศ"),
        ]);
        console.log(`เปิดหน้าแรก: ${result.join(", ")}`);
    } catch (error) {
        console.log(`เปิดหน้าแรกไม่ได้: ${error.message}`);
    }

    console.log("\n--- สถานการณ์ที่ 1 โหลดข้อมูลหน้าแรก ---");
    try {
        const result = await Promise.all([
            wait(300, "โปร์ไฟล์"),
            wait(400, "ตารางเรียน"),
            wait(500, "ประกาศ", true),
        ]);
        console.log(`เปิดหน้าแรก: ${result.join(", ")}`);
    }
    catch (error) {
        console.log(`เปิดหน้าแรกไม่ได้: ${error.message}`);
    }  

    console.log("\n--- สถานการณ์ที่ 2 แจ้งเตือนผลสอบ ---");
    const notiResult = await Promise.allSettled([
        wait(300, "อีเมล"),
        wait(500, "SMS", true),
        wait(400, "แอป")
    ]);
    notiResult.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log(`ส่งสำเร็จ: ${result.value}`);
        } else {
            console.log(`ส่งไม่สำเร็จ: ${result.reason.message}`);
        }
    });

    console.log("\n--- สถานการณ์ที่ 3 mirror server ---");
    try {
        const result = await Promise.any([
            wait(300, "mirror-A", true),
            wait(600, "mirror-B", ),
        ]);
        console.log("ใช้ข้อมูลจาก: ${mirrorData}");
    } catch (error) {
        console.log("เซิร์ฟล่มทั้งหมด");
    }

    console.log("\n--- สถานการณ์ที่ 4 ค้นหาข้อมูล Timelimit ---");
    try {
        const searchResult = await Promise.race([
            wait(1200, "ฐานข้อมูล"),
            timeoutPromise(800)
        ]);
        console.log("ข้อมูลที่ค้นหา: ${searchResult}");
    } catch (error) {
        if (error.message === "Timeout") {
            console.log("การค้นหาหมดเวลา");
        } else {
            console.log("เกิดข้อผิดพลาด: ${error.message}");
        }
    }
}
main();