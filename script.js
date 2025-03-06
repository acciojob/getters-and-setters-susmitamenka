//complete this code
class Person {
	constructor(name,age){
		this.name = name
		this.age = age
	}
	getName(){
		return this.name
	}
	setage(){
		console.log("age")
	}
}

class Student extends Person {
	super(name,age)
	study(){
		console.log(`${this.name}is studying`)
	}
}

class Teacher extends Person {
	super(name,age)
	teach(){
		console.log(`${this.name}is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
