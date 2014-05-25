
/*
Guide to JavaScript Prototypes, Scopes, and Performance
http://www.toptal.com/javascript/javascript-prototypes-scopes-and-performance-what-you-need-to-know

--- Point ---
Execution contexts are organized into a stack. At the bottom of the stack, 
there is always the global context, that is unique for each JavaScript program.
Each time a function is encountered, a new execution context is created and pushed onto the top of the stack.
Once the function has finished executing, its context is popped off the stack.
 */

(function() {
  var ChildA, ChildB, ChildC, ChildD, ChildE, Parent, diff, end, message, nestedFn, sayHello, start;

  message = 'Hello World';

  sayHello = function(n) {
    var e, i, innerSayHello, _i;
    i = 0;
    innerSayHello = function() {
      return console.log((i + 1) + ': ' + message);
    };
    for (e = _i = 0; 0 <= n ? _i < n : _i > n; e = 0 <= n ? ++_i : --_i) {
      innerSayHello();
      i++;
    }
    return console.log(e);
  };

  sayHello(3);


  /*
  performance
   */

  Parent = function() {
    return this.delta = 10;
  };

  ChildA = function() {};

  ChildA.prototype = new Parent();

  ChildB = function() {};

  ChildB.prototype = new ChildA();

  ChildC = function() {};

  ChildC.prototype = new ChildB();

  ChildD = function() {};

  ChildD.prototype = new ChildC();

  ChildE = function() {};

  ChildE.prototype = new ChildD();

  start = new Date().getTime();

  nestedFn = function() {
    var child, counter, i, j, k, _i, _j, _k;
    child = new ChildE();
    counter = 0;
    for (i = _i = 0; _i < 1000; i = ++_i) {
      for (j = _j = 0; _j < 1000; j = ++_j) {
        for (k = _k = 0; _k < 1000; k = ++_k) {
          counter += child.delta;
        }
      }
    }
    return console.log('Final result: ' + counter);
  };

  nestedFn();

  end = new Date().getTime();

  diff = end - start;

  console.log('Total time: ' + diff + ' milliseconds');

  start = new Date().getTime();

  nestedFn = function() {
    var child, counter, delta, i, j, k, _i, _j, _k;
    child = new ChildE();
    counter = 0;
    delta = child.delta;
    for (i = _i = 0; _i < 1000; i = ++_i) {
      for (j = _j = 0; _j < 1000; j = ++_j) {
        for (k = _k = 0; _k < 1000; k = ++_k) {
          counter += delta;
        }
      }
    }
    return console.log('Final result: ' + counter);
  };

  nestedFn();

  end = new Date().getTime();

  diff = end - start;

  console.log('Total time: ' + diff + ' milliseconds');

}).call(this);
