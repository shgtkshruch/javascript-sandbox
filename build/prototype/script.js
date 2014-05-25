
/*
Guide to JavaScript Prototypes, Scopes, and Performance
http://www.toptal.com/javascript/javascript-prototypes-scopes-and-performance-what-you-need-to-know
 */

(function() {
  var Child, Parent, Person, child, p1, p2;

  Person = function(firstName, lastName) {
    this.firstName = firstName;
    return this.lastName = lastName;
  };

  p1 = new Person('John', 'Doe');

  p2 = new Person('Robert', 'Doe');

  console.log(p1 instanceof Person);

  console.log(p2 instanceof Person);

  console.log(p1 === p2);

  Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  };

  console.log(p1.getFullName());

  console.log(p1.prototype);

  p1.getFullName = function() {
    return 'I am anonymous';
  };

  console.log(p1.getFullName());

  console.log(p2.getFullName());


  /* 
  dynamically change an object’s prototype
   */

  Parent = function() {
    return this.someVar = 'someValue';
  };

  Parent.prototype.sayHello = function() {
    return console.log('Hello');
  };

  Child = function() {
    return Parent.call(this);
  };

  Child.prototype.otherVar = 'otherValue';

  child = new Child();

  console.log(child.someVar);

  console.log(child.otherVar);

  Parent = function() {
    return this.someVar = 'someValue';
  };

  Parent.prototype.sayHello = function() {
    return console.log('Hello');
  };

  Child = function() {
    return Parent.call(this);
  };

  Child.prototype.otherVar = 'otherValue';

  Child.prototype = Object.create(Parent.prototype);

  child = new Child();

  console.log(child.someVar);

  console.log(child.otherVar);

  Parent = function() {
    return this.someVar = 'someValue';
  };

  Parent.prototype.sayHello = function() {
    return console.log('Hello');
  };

  Parent.prototype.otherVar = 'parentValue';

  Child = function() {
    return Parent.call(this);
  };

  Child.prototype.otherVar = 'otherValue';

  Child.prototype = Object.create(Parent.prototype);

  child = new Child();

  console.log(child.someVar);

  console.log(child.otherVar);

}).call(this);
