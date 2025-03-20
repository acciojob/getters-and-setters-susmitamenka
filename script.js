//complete this code
class Person {
  static count = 0;

  constructor(name, age) {
    this._name = name;
    this._age = age;
    Person.count++;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(${this._name} is studying);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(${this._name} is teaching);
  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
