var student1 = {
    firstName: "Peter",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Ali",
    lastName: "Rami",
    age: 22,
    location: "Rabat"
};
var studentsList = [student1, student2];
var table = document.getElementById('studentTable');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
