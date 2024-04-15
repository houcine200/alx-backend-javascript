export default function getStudentsByLocation(students, city) {
  const objs = students.filter((student) => student.location === city);
  return objs;
}
