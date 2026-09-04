// 1. Khai báo các biến số (Có thể thay đổi theo dữ liệu đầu vào)
let baseSalary = 5000;
let overTimeHours = 10;

// 2. Khai báo các hằng số (Chính sách/Quy định không đổi)
const bonusRate = 1.5;    // Thuế 10%
const taxRate = 0.1;      // Hệ số lương tăng ca

// 3. Tính toán theo công thức toán học rõ ràng
const overTimePay = overTimeHours * bonusRate;   //Tiền tăng ca
const totalTax = taxRate * baseSalary;           //Tiền thuế
const finalSalary = baseSalary + (overTimeHours * bonusRate) - taxRate;   //Tổng tiền lương

console.log("Lương thực nhận: " + finalSalary);