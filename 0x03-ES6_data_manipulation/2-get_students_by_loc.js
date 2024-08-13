export default function getStudentsByLocation(listOfStudents, city) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  const listOfCities = listOfStudents.filter((student) => student.location === city);

  return listOfCities;
}
