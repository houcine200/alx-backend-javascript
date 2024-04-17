interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Peter",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Ali",
    lastName: "Rami",
    age: 22,
    location: "Rabat"
};

const studentsList: Student[] = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
