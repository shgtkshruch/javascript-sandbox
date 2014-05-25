###
Guide to JavaScript Prototypes, Scopes, and Performance
http://www.toptal.com/javascript/javascript-prototypes-scopes-and-performance-what-you-need-to-know
###

Person = (firstName, lastName) ->
  @firstName = firstName
  @lastName = lastName

p1 = new Person 'John', 'Doe'
p2 = new Person 'Robert', 'Doe'

console.log p1 instanceof Person # ture
console.log p2 instanceof Person # true
console.log p1 == p2 # false



# Extending the Person prototype from our earlier example to
# also include a 'getFullName' method:

Person::getFullName = ->
  @firstName + ' ' + @lastName

console.log p1.getFullName() # Jone doe
console.log p1:: # undefined
# console.log p1::getFullName() # Uncaught TypeError: Cannot read property 'getFullName' of undefined 



# We reference p1.getFullName, *NOT* p1.prototype.getFullName,
# since p1.prototype does not exist:

p1.getFullName = ->
  'I am anonymous'

console.log p1.getFullName() # I am anonymous
console.log p2.getFullName() # Robert Doe


### 
dynamically change an object’s prototype
###

# example.1
Parent = ->
  @someVar = 'someValue'

Parent::sayHello = ->
  console.log 'Hello'

Child = ->
  Parent.call(@)

Child::otherVar = 'otherValue'

child = new Child()
console.log child.someVar # someValue
console.log child.otherVar # othervalue

# example.2
Parent = ->
  @someVar = 'someValue'

Parent::sayHello = ->
  console.log 'Hello'

Child = ->
  Parent.call(@)

Child::otherVar = 'otherValue'
Child:: = Object.create Parent::

child = new Child()
console.log child.someVar # someValue
console.log child.otherVar # undefined


# example.3
Parent = ->
  @someVar = 'someValue'

Parent::sayHello = ->
  console.log 'Hello'

Parent::otherVar = 'parentValue'

Child = ->
  Parent.call(@)

Child::otherVar = 'otherValue'
Child:: = Object.create Parent::

child = new Child()
console.log child.someVar # someValue
console.log child.otherVar # parentValue
