let baseSalary = 5000;
let overTimeHours = 10;
const bonusRate = 1.5;

const taxRate = 0.1 * baseSalary;

const finalSalary = baseSalary + (overTimeHours * bonusRate) - taxRate;

console.log("Lương thực nhận: " + finalSalary);