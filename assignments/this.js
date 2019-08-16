/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object;  JavaScript has a global object (or execution context) that exists wherever JavaScript lives. In the browser this is called window and in node it’s called global/console.
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// Global (window) binding

function wins1() {
  console.log(this);
}

console.log(wins1());


// Principle 2

// code example for Implicit Binding

const sayHello = {
  greeting: 'Hello',
  speak: function(name) {
    console.log(`${this.greeting}, my name is ${name}`);
    //console.log(this);
  }
};

console.log(sayHello.speak('Ali'));

// Principle 3

// code example for New Binding

function Person(location) {
  this.name = 'Ali';
  this.location = location;
  this.talk = function() {
    console.log(`Hi! my name is ${this.name} and I am from ${this.location}`
    );
  };
};

const pakistan = new Person('Pakistan');
const usa = new Person('United States');

console.log(pakistan.talk());
console.log(usa.talk());


// Principle 4

// code example for Explicit Binding

let nameObj = {
  firstName:"Ali",
  lastName:"Sheikh"
};

let greeting = function(city, state, country){
    return "Welcome, "+ this.firstName + " " + this.lastName + ", to " + city + ", " + state + ", " + country;
};

console.log(greeting.call(nameObj,"Manama","Bahrain","BA"));
