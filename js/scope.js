//Question No: 1
String.prototype.filter = function(param){
    const arrayStr = this.split(" ");
    const filteredWord = arrayStr.filter(word => !param.includes(word));
    return filteredWord.join(' ');
}

console.log("This house is not nice!".filter("not"));

//Question No: 2
Array.prototype.bubbleSort = function () {
    const array = this.slice(); 
    const length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
      }
    }
    return array;
  };

  console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//Question No: 3
function Person(name) {
    this.name = name;
  }
  
  function Teacher(name) {
    Person.call(this, name);
  }
  
  Teacher.prototype = Object.create(Person.prototype);
  
  Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject + ".");
  };
  
  const teacherObj = new Teacher("Sami Taha");
  teacherObj.teach("WAP");
  console.log("================= Prototype Approach =================")  
//Question No: 4 Object prototype approach 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = function () {
  console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function () {
  console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
};

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
  Person.call(this, name, age);
  this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greeting = function () {
  console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const professorObj = new Professor("Premchand Nair", 62, "Algorithm");
const studentObj = new Student("Sandip Mahato", 28, "WAP");
professorObj.greeting();
professorObj.salute();

studentObj.greeting();
studentObj.salute();
console.log("================= Constructor Approach =================")
//constructor approach
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
  };

  this.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
  };
}

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;

  this.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
  };
}

function Professor(name, age, department) {
  Person.call(this, name, age);
  this.department = department;

  this.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
  };
}

const profObj = new Professor("Paymen Salek", 52, "Computer Science");
const stdObj = new Student("Kevin Smith", 26, "Software Architecture");

profObj.greeting();
profObj.salute();

stdObj.greeting();
stdObj.salute();