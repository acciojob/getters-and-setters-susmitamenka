//complete this code
class Person {
	static count=0
	constructor(name,age){
		this._name = name
		this._age = age
		Person.count++
	}
	getName(){
		return this._name
	}
	setname(name){
		this._name = name
	}
	getage(){
		return this._age
	}
	setage(age){
		this._age = age
	}
}

class Student extends Person {

	study(){
		console.log(`${this._name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}

	teach(){
		console.log(`${this._name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
