###
Guide to JavaScript Prototypes, Scopes, and Performance
http://www.toptal.com/javascript/javascript-prototypes-scopes-and-performance-what-you-need-to-know

--- Point ---
Execution contexts are organized into a stack. At the bottom of the stack, 
there is always the global context, that is unique for each JavaScript program.
Each time a function is encountered, a new execution context is created and pushed onto the top of the stack.
Once the function has finished executing, its context is popped off the stack.
###

message = 'Hello World'

sayHello = (n) ->
  # local context 1 created and pushed onto context stack
  i = 0
  innerSayHello = ->
    # local context 2 created and pushed onto context stack
    console.log (i + 1) + ': ' + message
    # local context 2 popped off of context stack

  for e in [0...n]
    innerSayHello()
    i++
  # local context 1 popped off of context stack
  console.log e # 3

sayHello 3
# 1: Hello World script.js:22
# 2: Hello World script.js:22
# 3: Hello World 



###
performance
###

Parent = ->
  @delta = 10

ChildA = ->
ChildA:: = new Parent()
ChildB = ->
ChildB:: = new ChildA()
ChildC = ->
ChildC:: = new ChildB()
ChildD = ->
ChildD:: = new ChildC()
ChildE = ->
ChildE:: = new ChildD()

# example.1
start = new Date().getTime()
nestedFn = ->
  child = new ChildE()
  counter = 0
  for i in [0...1000]
    for j in [0...1000]
      for k in [0...1000]
        counter += child.delta
  console.log 'Final result: ' + counter

nestedFn()
end = new Date().getTime()
diff = end - start
console.log 'Total time: ' + diff + ' milliseconds'
# Final result: 10000000000 script.js:75
# Total time: 1960 milliseconds 

# example.2
start = new Date().getTime()
nestedFn = ->
  child = new ChildE()
  counter = 0
  delta = child.delta
  for i in [0...1000]
    for j in [0...1000]
      for k in [0...1000]
        counter += delta
  console.log 'Final result: ' + counter

nestedFn()
end = new Date().getTime()
diff = end - start
console.log 'Total time: ' + diff + ' milliseconds'
# Final result: 10000000000 script.js:100
# Total time: 1087 milliseconds 
