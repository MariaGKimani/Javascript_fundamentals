// Create an object called "person" with properties for name, age, and occupation.


// Add a method to the "person" object called "introduce" 
// that prints out a message introducing the person with 
// their name, age, and occupation.
let person = {
    name: "Maria",
    age: 22,
    occupation: "Banker",
    introduce:function(){
        console.log(`Hi my name is ${this.name} and i am ${this.age} year old and  i am a ${this.occupation} `);
    }
}
person.introduce()

// Create another object called "car" with properties for make, model, and year.
let car = {
    make: "Toyota",
    model:"Isuzu",
    year:2008
}
// Access the value of the "make" property of the "car" object
console.log(car.make);

// Change the value of the "year" 
// property of the "car" object to 2022.
car.year = 2022
console.log(car.year);

// Create a new object called "book" with properties for title, author, and publication year.

// Check if the "book" object has a property called "pages". 
// If it does not, add a new property called "pages" and set it to 200.

// Create a function called "getBookInfo" that takes a book object as a parameter
//  and prints out the title, author, and publication year of the book.
let book = {
    title :"Born a crime",
    author: "Trevor Noah",
    publication_year: 2001
}
if( !book.hasOwnProperty("pages")){
    book.pages = 200
}
console.log(book.pages);
function getBookInfo(book){
    console.log(book.title);
    console.log(book.author);
    console.log(book.publication_year);
}
//Create an array called "library" 
//and add the "book" object to it
let library =[];
library.push(book)
console.log(library);

//Loop through the "library" array and 
//call the "getBookInfo" function for each book.


// Create a new object called "student" with properties
//  for name, age, and grades (an array of numbers)
let student ={
    name:"Maria",
    age: 22,
    grades:[23,34,12,11,22,24],
    calculateAverageGrade:function(){
        let sum = 0;
        for (const grade of this.grades) {
            sum += grade;
        }
        return sum / this.grades.length;
    }

}

// Add a method called "calculateAverageGrade" to the "student" 
// object that calculates and returns the average grade.
console.log(student.calculateAverageGrade());

// Create a constructor function called "Person" that takes parameters
//  for name, age, and occupation, and creates a new object with those properties.

function Person(name,age,occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation
}
// Create a new object using the "Person"
//  constructor and print out its properties.
const Person2 = new Person("John", 25, "Engineer");
console.log(Person2 );



