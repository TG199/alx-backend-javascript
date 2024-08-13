export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filteredStudents = listOfStudents.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
  return updatedStudents;
}
