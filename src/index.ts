type Student = {
  id: number;
  name: string;
  grade: number;
  isActive: boolean;
};
// Create at least 5 students as Sample Data
const students: Student[] = [
  { id: 1, name: "Ann", grade: 3.5, isActive: true },
  { id: 2, name: "Bob", grade: 2.7, isActive: false },
];
function getActiveStudents(students: Student[]): Student[] {
  return students.filter((s) => s.isActive);
}
function calculateAverageGrade(students: Student[]): number {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, s) => sum + s.grade, 0);
  return total / students.length;
}
console.log("All students:", students);
console.log("Active students:", getActiveStudents(students));
console.log("Average grade:", calculateAverageGrade(students));

//Checkpoint Questions
//a. In your own words, explain how filter is used in getActiveStudents.
// - The filter method is used in getActiveStudents to create a new array that only includes students who have their isActive property set to true. It goes through each student in the original array and checks the condition, 
// returning a new array with only the active students.
//b. In your own words, explain how reduce is used in calculateAverageGrade.
// - The reduce method in calculateAverageGrade is used to accumulate the total sum of the grades of all students in the array. 
// It starts with an initial value of 0 and adds each student's grade to this total as it iterates through the array.
// After obtaining the total sum of grades, the function divides this sum by the number of students to calculate the average grade.
//c. What TypeScript error do you get if you remove isActive from one of the students in the array?
// - If you remove the isActive property from one of the students in the array, TypeScript will give you an error indicating that the object is missing the required property 'isActive'.
// The error message would be similar to: "Property 'isActive' is missing in type '{ id: number; name: string; grade: number; }' but required in type 'Student'."
//i. Why is this error helpful before running the code?
// - This error is helpful because it catches potential issues at compile time rather than at runtime.
// It ensures that all student objects conform to the defined Student type, preventing unexpected behavior or bugs that could arise from missing properties when the code is executed.