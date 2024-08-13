export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const sumOfStudentsIds = students.reduce((accumalator, student) => accumalator + student.id, 0);

  return sumOfStudentsIds;
}
