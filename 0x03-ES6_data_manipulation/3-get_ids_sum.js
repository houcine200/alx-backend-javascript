export default function getStudentIdsSum(students) {
  const idsSum = students.reduce((acc, curr) => acc + curr.id, 0);
  return idsSum;
}
