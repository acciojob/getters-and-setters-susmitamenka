//complete this code
class Person {
	static count=0
	constructor(name,age){
		this.name = name
		this.age = age
		Person.count++
	}
	getName(){
		return this.name
	}
	setname(name){
		this.name = name
	}
	getage(){
		return this.age
	}
	setage(age){
		this.age = age
	}
}

class Student extends Person {

	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}

	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
