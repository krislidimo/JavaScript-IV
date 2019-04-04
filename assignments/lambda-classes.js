// CODE here for your Lambda Classes

//Person
class Person {
	constructor(obj) {
		this.name = obj.name;
		this.age = obj.age;
		this.location = obj.location;
		this.gender = obj.gender;
	}

	speak() {
		console.log(`Hello my ${this.name} is Fred, I am from ${this.location}`);
	}
}//Person

//Instructor
class Instructor extends Person {
	constructor(obj) {
		super(obj);
		this.specialty = obj.specialty;
		this.favLanguage = obj.favLanguage;
		this.catchPhrase = obj.catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}.`);
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`)
	}

	changeGrade(student) {
		student.grade += Math.floor(Math.random()*20)-10;
		console.log(`${this.name} changed ${student.name}'s grade to ${student.grade}`);
	}
}//Instructor

//Student
class Student extends Person {
	constructor(obj) {
		super(obj);
		this.previousBackground = obj.previousBackground;
		this.className = obj.className;
		this.favSubjects = obj.favSubjects;
		this.grade = obj.grade;
	}

	listsSubjects() {
		console.log(this.favSubjects);
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}.`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}

	graduate() {
		if (this.student > 70) {
			console.log(`Congratulations ${this.student}! You've Graduated!`);
		} else {
			console.log(`Ready, you are not. Keep trying, ${this.student} must.`)
		}
	}
}//Student

//ProjectManager
class ProjectManager extends Instructor {
	constructor(obj) {
		super(obj);
		this.gradClassName = obj.gradClassName;
		this.favInstructor = obj.favInstructor;
	}

	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
	}

	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
	}
}//ProjectManager


//Students
const chris = new Student({
  name: 'Chris',
  location: 'japan',
  age: 26,
  gender: 'male',
  previousBackground: "carpenter",
  className:"web17",
  favSubjects: "HTML, CSS, JavaScript",
  grade: 90
});

chris.listsSubjects();

const alex = new Student({
  name: 'Alex',
  location: 'San Francisco',
  age: 29,
  gender: 'male',
  previousBackground: "cashier",
  className:"web15",
  favSubjects: "css",
  grade: 100
});

alex.PRAssignment("Javascript-I");
alex.sprintChallenge("Javascript-I");


//Instructors
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

fred.demo("css");

const josh = new Instructor({
  name: 'Josh',
  location: 'Utah',
  age: 40,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Banjo time!`
});

josh.grade(alex, "html");



//ProjectManagers
const raine = new ProjectManager({
  name: 'Raine',
  location: 'Hogwarts',
  age: 21,
  gender: 'Female',
  favLanguage: 'MagicScript',
  specialty: 'Front-end',
  catchPhrase: 'Expecto Patronum!',
  gradClassName: '',
  favInstructor: 'Dumbledore',
});

raine.standUp("web19_raine");

const jack = new ProjectManager({
  name: 'Jack',
  location: 'The Moon',
  age: 29,
  gender: 'male',
  favLanguage: 'ruby',
  specialty: 'Back-end',
  catchPhrase: 'Hey! It compiles! Ship it!',
  gradClassName: 'web12',
  favInstructor:'Jim'
});

jack.debugsCode(chris, "Preprocessing-I");

jack.changeGrade(alex);
jack.changeGrade(alex);
jack.changeGrade(alex);
jack.changeGrade(alex);
jack.changeGrade(alex);
jack.changeGrade(alex);