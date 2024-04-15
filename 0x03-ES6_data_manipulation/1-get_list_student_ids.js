export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const ids = arr.map((student) => student.id);
  return ids;
}
