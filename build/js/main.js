"use strict";
// let username = 'Giga'
// console.log(username)
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTransactions));
// todaysTransactions.Pizza = 40
console.log(todaysTransactions["Giga"]);
const student = {
    name: "Giga",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "GPA");
logStudentKey(student, "name");
logStudentKey(student, "classes");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
