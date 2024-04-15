export default function updateStudentGradeByCity(students, city, newGrades) {
  const objsByCity = students.filter((students) => students.location === city);

  const updateStd = objsByCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    const std = { ...student };
    if (gradeObj) {
      std.grade = gradeObj.grade;
    } else {
      std.grade = 'N/A';
    }
    return std;
  });
  return updateStd;
}
