interface Teacher{
	readonly firstName : string;
	readonly lastName: string;
	fullTimeEmployee:boolean;
	yearsOfExperience?: Number;
	location: string;
	[key : string] : any

}

interface Directors extends Teacher{
	numberOfReports: Number


}

interface printTeacherFunction{
	(firstName:string, lastName:string):string
}

const printTeacher:printTeacherFunction= (firstName:string, lastName:string)=>{
	return `${firstName.charAt(0)}.${lastName}`

}
// console.log(printTeacher("Houcine", "walaq")); /*h.walaq*/
interface classInterface{
	firstName :string;
	lastName: string;
	workOnHomework ():string
	displayName(): string
}

class StudentClass implements classInterface{
	firstName:string
	lastName:string
	constructor(firstname:string, lastName:string){
		this.firstName= firstname
		this.lastName =lastName

	}
	workOnHomework():string{
		return `Currently working`
	}
	displayName():string{
		return this.firstName


	}

}

const student = new StudentClass("Houcine", "walaq");
console.log(student.displayName())
console.log(student.workOnHomework())
