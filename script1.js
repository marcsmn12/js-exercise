// Question 1: You are given a list of students (list of objects). Each student has:
// a name
// an array of numeric scores

// Write a function generateReports(students) that returns with these calculated fields:
// average
// grade (A if avg ≥ 90, B if 80–89, C if 70–79, D if 60–69, F otherwise)
// You should use at least 2 array methods (lookup array methods in JavaScript)
// Sample Input:
// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [70, 68, 72] },
//   { name: "Charlie", scores: [100, 100, 100] }
// ];

// Output:
// [
//   { name: "Alice", average: 89, grade: "B" },
//   { name: "Bob", average: 70, grade: "C" },
//   { name: "Charlie", average: 100, grade: "A" }
// ]

function generateReports(students) {
  return students.map((student) => {
    //n => numer of students
    const total = student.scores.reduce((sum, score) => sum + score, 0); //m => it will run m time for each student
    const average = Math.round(total / student.scores.length); //O(1)

    let grade;
    if (average >= 90) {
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else if (average >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
    //O(1)

    return {
      name: student.name,
      average: average,
      grade: grade,
    };
  });
}
// O(n * m) => time complexity
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [70, 68, 72] },
  { name: "Charlie", scores: [100, 100, 100] },
];

console.log(generateReports(students));
