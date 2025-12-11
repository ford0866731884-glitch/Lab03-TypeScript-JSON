type Student = {
  id: number;
  name: string;
  grade: number;
  isActive: boolean;
};
const studentsJson = `[
{ "id": 1, "name": "Ann", "grade": 3.5, "isActive": true },
{ "id": 2, "name": "Bob", "isActive": false },
{ "id": 3, "name": "Chen", "grade": 3.9, "isActive": true },
{ "id": 4, "name": "Dai", "grade": 1.9, "isActive": true },
{ "id": 5, "name": "Eve", "grade": 2.0, "isActive": false }
]`;
// Parse JSON to Object
const students: Student[] = JSON.parse(studentsJson);
function getActiveStudents(students: Student[]): Student[] {
  return students.filter((s) => s.isActive);
}
function calculateAverageGrade(students: Student[]): number {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, s) => sum + s.grade, 0);
  return total / students.length;
}
console.log("Students from JSON:", students);
console.log("Active students:", getActiveStudents(students));
console.log("Average grade:", calculateAverageGrade(students));
// Convert Object to JSON
const activeStudentsJson = JSON.stringify(getActiveStudents(students), null, 2);
console.log("Active students JSON:\n", activeStudentsJson);

export {};

// 4. Checkpoint Questions
// 1. In JSON.stringify(getActiveStudents(students), null, 2), what does each argumentmean?
// - The first argument is the value to convert to a JSON string, which is the array of active students returned by getActiveStudents(students).
// - The second argument is a replacer function or array that can be used to filter or modify the properties included in the JSON string. Here, it is set to null, meaning all properties will be included.
// - The third argument is the number of spaces to use for indentation in the resulting JSON string, making it more readable. Here, it is set to 2 spaces.
// 2. If the JSON string is missing the grade field for one student, what could happenwhen you parse and use it in TypeScript?
// - If the JSON string is missing the grade field for one student, when you parse it in TypeScript, that student's grade property will be undefined. This could lead to issues when performing calculations, such as calculating
// the average grade, since adding undefined to a number results in NaN (Not a Number). To handle this, you may need to implement checks or provide default values for missing fields.
