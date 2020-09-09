# Uncaught TypeError: Cannot read properly
**Example code**

```javascript
var someVal = null;
console.log(someVal.foo);
```

# TypeError: Undefined is not an object
**Example code**

```javascript
try {
  null.f() 
} catch (e) {
  console.log(e instanceof TypeError)  // true
  console.log(e.message)               // "null has no properties"
  console.log(e.name)                  // "TypeError"
  console.log(e.fileName)              // "Scratchpad/1"
  console.log(e.lineNumber)            // 2
  console.log(e.columnNumber)          // 2
  console.log(e.stack)                 // "@Scratchpad/2:2:3\n"
}
```

# Script error
Script errors are mostly likely to be caused by an error within a script that’s hosted on a different domain
**Example code**
```javascript
<!--- File: https://another-domain.com/index.js -->
const a = {};
console.log(a.b.c); 

<!-- File: origin-domain.com/index.html -->
<script src="http://another-domain.com/index.js"></script>
```

# RangeError
**Example code**
```javascript
const l = console.log
const arr = [90,88]
arr.length=90**99
```

# ReferenceError
**Example code**
```javascript
const l=console.log
const cat = "cat"
cat
dog

$ node errors
errors.js:3
dog
^
ReferenceError: dog is not defined
```

# SyntaxError
**Example code**
```javascript
const l = console.log
let cat h = "cat"

$ node errors
errors.js:3
let cat h = "cat"
 ^
SyntaxError: Unexpected identifier
```

# InternalError
This error occurs internally in the JS engine, especially when it has too much data to handle and the stack grows way over its critical limit.
Too much recursion,
**Example code**
```javascript
function foo() {
 foo()
}
foo()
```