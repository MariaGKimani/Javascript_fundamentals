// create an object named student with
//  keys name, rollNo, totalMarks.
// Give any values you prefer. 
// Also, create two functions:
// first function to print the information about the student 
// and a second function to check if the student passed the exam or not.
// If the totalMarks 6_ wnois less than 40, print 'You failed'.
// If the totalMarks is greater than or equal to 40, print 'You passed'.

const students ={
    name:'Maria',
    rollNO: 200,
    totalMarks:80
    
}
function info(){
    console.log(students);
}
function xxx(){
    if(students.marks  <40){
        console.log("You've failed us");
    }else{
        console.log("you need");
    }
} 
info()
xxx()


//Write a JavaScript program to list the properties of a JavaScript object
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 
};
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));

// Write a JavaScript program to delete the rollno property 
// from the following object. Also print the object
//  before or after deleting the property.
console.log(student);
let x = delete student.rollno
console.log(x);
console.log(student);

// Write a JavaScript program 
// to get the length of a JavaScript object.
let xs = Object.keys(student).length
console.log(xs);

// Write a JavaScript program to display the reading
//  status (i.e. display book name, author name and 
// reading status) of the following books
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
console.log(library);