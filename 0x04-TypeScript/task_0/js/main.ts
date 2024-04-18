interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "ali",
  lastName: "moha",
  age: 1,
  location: "rabat",
};
let student2: Student = {
  firstName: "ali",
  lastName: "moha",
  age: 2,
  location: "rabat",
};

let studentList = [student1, student2];

// console.log(studentsList);
const createStudentsTable = (studentList: Student[]): void => {
  const table = document.createElement("table");
  // creating the table header
  const header = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";

  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  header.appendChild(headerRow);
  table.appendChild(header);

  // creating the table body and populating it with data:
  const tableBody = document.createElement("tbody");

  studentList.forEach((student) => {
    const trow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    trow.appendChild(firstNameCell);
    trow.appendChild(locationCell);
    tableBody.appendChild(trow);
  });

  // Append the table body to the table
  table.appendChild(tableBody);

  // Appending the table to the document Body
  document.body.appendChild(table);
};

createStudentsTable(studentList);
document.title = "Task 0";

