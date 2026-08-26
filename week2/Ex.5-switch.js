function getMenuPrice(menu) {
    switch (menu) {
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 40;
        case "ผัดไทย":
            return 50;
        case "ต้มยำกุ้ง":
            return 60;
        default:
            return 0;
    }
}

function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;
        case "พิเศษ":
            return 1.5;
        case "จัมโบ้":
            return 2;
        default:
            return 1;
    }
}

const orders = [
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
  { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
  { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 3 },
  { menu: "ส้มตำ", size: "ธรรมดา", qty: 1 } 
];

let totalBill = 0;

for (const order of orders) {
  const price = getMenuPrice(order.menu);
  const multiplier = getSizeMultiplier(order.size);
  const itemTotal = price * multiplier * order.qty;
  
  totalBill += itemTotal;

  console.log(order.menu + " (" + order.size + ") x" + order.qty + " = " + itemTotal + " บาท");
}

console.log("---------------------------------------------");
console.log("ราคารวมทั้งสิ้น = " + totalBill + " บาท");