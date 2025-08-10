# Cheatsheet of Java Script Learning

## Table of Contents
* [Introduction to JavaScript Development](#introduction-to-java-script-development)
* [Introduction to addEventListener](#introduction-to-addeventlistener)
* [Arrays and Objects in JavaScript](#arrays-and-objects-in-javaScript)
* [DOM Manipulation Methods](#dom-manipulation-methods)
* [Working with DOM in JavaScript](#working-with-dom-in-javaScript)
* [JavaScript Async](javascript-async)

## Introduction to JavaScript Development

### script

Used to include the required JavaScript code in your HTML document.

```html
<body>
    <p id="showname"></p>
    <script>
        document.getElementById('showname').innerHTML='Peter';
    </script>
</body>
```

### script src

Used to link the required JavaScript files in your HTML document.
```html
<script src="script.js"></script>
```

### var

var is a keyword used to declare variables.

```js
var num1=10;
var num2=11;
```

### let

let is a keyword used to declare variables.

```js
let num1=20;
let num2=21;
```

### const

const is a keyword used to declare variables.
```js
const employeeId=120;
const employeeId=121;
```

### var & Scope

var has functional scope, allowing variable to be accessed within function only.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p id="showname"></p>
    <script>
        function show() {
            var name = 'Peter';
            document.getElementById('showname').innerHTML = name;
        }
    </script>
</body>

</html>
```

### let & Scope

let has block scope, allowing the variable to be limited to the block, statement, or expression in which it is defined, preventing redeclaration within the same scope.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p id="showemail"></p>
    <script>
       {
            let emailId = 'test@example.com';
            document.getElementById('showemail').innerHTML = emailId;
        }
    </script>
</body>

</html>
```

### const & Scope

It creates a constant whose value cannot be reassigned or redeclared.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p id="showeEId"></p>
    <script>
       {
            const employeeId = 120';
            document.getElementById('showeEId').innerHTML = employeeId;
        }
    </script>
</body>

</html>
```

### Arithmetic Operators

Arithmetic operators perform mathematical calculations like addition, subtraction, multiplication, division and modulus.

```js
let x = 15;
let y = 3;
let sum = x + y; // Addition
console.log(sum)  //the answer is 8
let difference = x - y; // Subtraction
console.log(difference)  //the answer is 2
let product = x * y; // Multiplication
console.log(product)  //the answer is 8
let quotient = x / y; // Division
console.log(quotient)  //the answer is 8
let remainder = x % y; // Modulus
console.log(remainder)  //the answer is 0
```

### Comparison Operators

Comparison operators compare values and return true/false based on the comparison.

```js
let a = 5;
let b = 7;
let isEqual = a == b; // Equality
let isNotEqual = a != b; // Inequality
let isStrictEqual = a === b; // Strict equality
let isGreaterThan = a > b; // Greater than
```

### Logical Operators

Logical operators combine multiple conditions and return a boolean result.

```js
let hasPermission = true;
let isMember = false;
let canAccessResource = hasPermission && isMember; // Logical AND
let canViewPage = hasPermission || isMember; // Logical OR
let isDenied = !hasPermission; // Logical NOT
```

### Assignment Operators

Assignment operators assign values to variables. For example, =, +=, -=.

```js
let x = 10; // Assigns the value 10 to the variable x
x += 5; // Equivalent to x = x + 5
x -= 5; //Equivalent to x = x + 5
```

### Unary Operators

Unary operators act on a single operand, performing operations like negation or incrementing.    

```js
let count = 5;
count++; // Increment count by 1 (count is now 6)
count--; // Decrement count by 1 (count is now 5 again)
```

### typeof Operator
typeof operator returns the data type of a variable or expression as a string.    

```js
console.log(typeof(num1)); //the awnswer is Number
let name = 'John';
console.log(typeof(name)); //the awnswer is String
```

### if Statement
The if statement is used to execute a piece of block code if the given condition is true.    

```js
let age = 25;
if (age >= 18) {
console.log("You are an adult.");
} else {
console.log("You are a minor.");
}
```

### else if Statement

It allows you to test multiple conditions sequentially.If the condition is true then it will execute if statement block otherwise execute else statement block.    

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="seasonmessage"></p>
    <script>
        let Seasonmonth = 'March to May';

        if (Seasonmonth == 'March to May') {
            document.getElementById("seasonmessage") = 'It is spring season';
        }
        else if (Seasonmonth == 'June to August') {
            document.getElementById("seasonmessage") ='It is summer season';
        } 
        else if (Seasonmonth =='September to November') {
            document.getElementById("seasonmessage") = 'It is autumn season';
        } 
        else {
            document.getElementById("seasonmessage") = 'It is winter season';
        }
    </script>
</body>
</html>
```

### Nested if else Statement

This statement allows you to test multiple conditions and execute different blocks of code based on the results of those conditions.    

```js
const temperature = 30;
const isRaining = true;
if (temperature > 30) {
  if (isRaining) {
    console.log("It's hot and raining. Stay inside.");
  } else {
    console.log("It's hot, but not raining. Enjoy the sunshine.");
  }
} else {
  if (isRaining) {
    console.log("It's not so hot, but it's raining. Take an umbrella.");
  } else {
    console.log("It's not hot, and it's not raining. Have a nice day.");
  }
}
```

### switch Statement

The switch statement is used for multiple conditional branches, allowing the execution of different code blocks based on the value of an expression.    

```js
let month = "December";
switch (day) {
    case "December":
        console.log("It's Christmas month.");
        break;
    case "November":
        console.log("It's Thanksgiving month");
        break;
    default:
        console.log("It's a regular month.");
}
```

### Ternary Operator

The ternary operator is the simplest way to write conditional statements such as if else condition.    

```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
```

### for loop

A for loop is a control structure that allows to execute a block of code repeatedly for a specified number of times until a particular condition is met.    

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### While loop

A while loop is a control structure that allows to execute a block of code repeatedly as long as a specified condition is true.    

```js
let limit = 50;
let a = 0;
let b = 1;
while (a <= limit) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}
```

### do while loop

A "do...while" loop in allows you to execute a block of code repeatedly as long as a specified condition is true and guarantees that the code block will execute at least once, even if the condition is initially wrong.    

```js
let roll = 1;
do {
    console.log("Rolled a " + roll);
    roll++;
} while (roll < 7);
```

### Function Declaration and Call

Function is a reusable block of code that can be defined and executed as many times as needed.    

```js
function sayHello() {
  console.log("Hello!");
} //function declaration
sayHello();  //function call
```

### Non-Parameterized Functions

The functions that do not require any parameters to operate.    

```js
function greet() {
  const greeting = "Hello, World!";
  console.log(greeting);
}
// Call the non-parameterized function
greet(); // This will print "Hello, World!" to the console
```

### Parameterized Functions

The function that accepts one or more values that provide input data for the function to work with. These values in the function's declaration called parameters, and during calling of the function called arguments.    

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="functiondata1"></p>
    <script>
        function add(a, b) {
            return a + b;
        }
        document.getElementById('functiondata1').innerHTML = add(3, 4);
    </script>
</body>
</html>
```

### Named Function

The functions with a specific name that can be called by that name.    

```js
const add = function(a, b) { 
        console.log(a+b); 
    }  

    //name of the function is add
    add(2, 3); 
```

### IIFE

Immediately Invoked Function Expression is a function in JavaScript that's defined and executed immediately after its creation.    

```js
(function sayWelcome() {
  console.log("Welcome!");
})();
```

### Arrow Function

Arrow functions in JavaScript are a concise way to write function expressions, using the => syntax.    

```js
const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(5, 3));
```

### return

The return statement in JavaScript is used to end the execution of a function and specify the value that the function should return to the caller.    

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="showmessage"></p>
    <script>
        function multiply(message) {
            return message; // Returns the product of a and b
        }
        document.getElementById('showmessage').innerHTML = multiply('Hard work is the key');
    </script>
</body>
</html>
```

### Function Closure

A function closure in JavaScript allows a function to access and remember variables from its outer scope even after that scope has finished executing.    

```js
function outerFunction() {
  const outerVar = "I am from the outer function";
  function innerFunction() {
    console.log(outerVar); // innerFunction can access outerVar
  }
  return innerFunction;
}
const closure = outerFunction();
closure(); // This will log "I am from the outer function"
```

### Function Hoisting

Function hoisting means that function declarations are moved to the top of their containing scope during the compile phase, allowing them to be used before they are declared in the code.    

```js
sayHello(); // This works even though the function is called before it's declared
function sayHello() {
  console.log("Hello!");
}
```

### Function Hoisting for function expression

Function expressions where a function is assigned to a variable do not exhibit hoisting behaviour.    

```js
greet(); // This will result in an error
const greet = function() {
  console.log("Greetings!");
};
```

### addEventListener

addEventListener is a JavaScript method used to assign a function to execute when a specific event occurs on an element in the DOM.    

```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="btnclick"></p>
    <button id="btn">Click Me</button>
    <script>
        // Get the element by its ID
        const button = document.getElementById('btn');
        // Add an event listener for the 'click' event
        button.addEventListener('click', () => {
            document.getElementById('btnclick').innerHTML = 'Button clicked!';
        });
    </script>
</body>
</html>
```

### onclick Event

A way of assigning a function directly to an HTML element to execute when it's clicked.    

```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="myFunction()">Click me</button>
    <script>
    function myFunction() {
      alert('Button clicked!');
    }
    </script>
</body>
</html>
```

### Mouseover Event

The mouseover event is triggered when the mouse cursor enters an element.    

```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="myDiv" style="width: 200px; height: 200px; background-color: lightblue;"></div>
    <script>
      const myDiv = document.getElementById('myDiv');
      // Adding a mouseover event listener
      myDiv.addEventListener('mouseover', () => {
        myDiv.style.backgroundColor = 'lightgreen';
      });
    </script>
</body>
</html>
```

### mouseout Event

The mouseout event in JavaScript is triggered when the mouse pointer moves out of an element, indicating that the mouse is no longer over that specific element.    
```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="myDiv" style="width: 200px; height: 200px; background-color: lightblue;"></div>
    <script>
      const myDiv = document.getElementById('myDiv');
      // Adding a mouseover event listener
      myDiv.addEventListener('mouseover', () => {
        myDiv.style.backgroundColor = 'lightgreen';
      });
      myDiv.addEventListener('mouseout', () => {
      myDiv.style.backgroundColor = 'lightcoral';
    });
    </script>
</body>
</html>
```

### Keydown Event

The keydown event is triggered when a key on the keyboard is pressed down.    
```html
<!DOCTYPE html>

<html>
<head>
    <title>Keydown Event Handling</title>
</head>
<body>
    <input type="text" id="myInput">
    <p id="output"></p>
    <script>
        const input = document.getElementById("myInput");
        const output = document.getElementById("output");
        input.onkeydown = function(event) {
            output.textContent = `Key pressed: ${event.key}`;
        };
    </script>
</body>
</html>
```

### Change Event

The change event is triggered when the value of an input element changes. Typically, it's used for form elements like text fields or dropdowns.    

```html
<!DOCTYPE html>

<html>
<head>
    <title>Change Event Handling</title>
</head>
<body>
    <input type="text" id="myInput">
    <p id="output"></p>
    <script>
        const input = document.getElementById("myInput");
        const output = document.getElementById("output");
        input.onchange = function() {
            output.textContent = `Value changed to: ${input.value}`;
        };
    </script>
</body>
</html>
```

### onsubmit Event

The onsubmit event in HTML occurs when a form is submitted, either by clicking a submit button or by calling the submit().    

```html
<!DOCTYPE html>

<html>
<head>
  <title>Form Submission Example</title>
</head>
<body>
  <form id="myForm" onsubmit="validateForm()">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <input type="submit" value="Submit">
  </form>
  <script>
    function validateForm() {
      // Prevent the default form submission
      event.preventDefault();
      // Retrieve form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      // Perform validation (for example, checking if fields are filled)
      if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return false; // Prevent form submission if validation fails
      }
      // If validation passes, continue with form submission
      alert('Form submitted successfully!');
    }
  </script>
</body>
</html>
```

## Introduction to addEventListener

1. Without addEventListener

```html
// <button id="myButton" onclick="handleButtonClick()">Click me</button>
<script>
  function handleButtonClick() {
    console.log('Button clicked!');
  }
</script>
```

2. With addEventListener

```html
// <button id="myButton">Click me</button>
<script>
  // Get the button element
  const button = document.getElementById('myButton');

  // Add event listener for 'click' event
  button.addEventListener('click', handleButtonClick);

  // Function to handle button click
  function handleButtonClick() {
    console.log('Button clicked!');
  }
</script>
```

3. Mouse events

3.1 Click event
```html
// <button id="clickButton">Click Me!</button>
<script>
  document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
  });
</script>
```

3.2 Mouseover

```html
// <div id="moveArea" style="width: 200px; height: 200px; background-color: lightcoral;"></div>

<script>
  const moveArea = document.getElementById('moveArea');

  moveArea.addEventListener('mousemove', function(event) {
    console.log(`Mouse coordinates - X: ${event.clientX}, Y: ${event.clientY}`);
  });
</script>
>
```

4. Keyboard events

**4.1 Keyup and Keydown**
```html
// input type="text" id="keyInput">
<script>
  const keyInput = document.getElementById('keyInput');

  keyInput.addEventListener('keydown', function() {
    console.log('Key pressed down!');
  });
  keyInput.addEventListener('keyup', function() {
    console.log('Key released!');
  });
</script>
>
>
```

4.2 Keypress

```html
// input type="text" id="pressInput">
<script>
  const pressInput = document.getElementById('pressInput');
  pressInput.addEventListener('keypress', function() {
    console.log('Key pressed!');
  });
</script>
```

5. Submit events

**5.1 Submit event**

```html
// form id="myForm">
  <input type="text" id="textInput">
  <input type="submit" value="Submit">
</form>
<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Form submitted!');
  });
</script>
```

**5.2 Change event**
Used when the value of an input element within the form changes. It applies to various form elements such as text inputs, checkboxes, radio buttons, and dropdowns. This event enables real-time validation, updates, or actions based on user input changes.

**5.3 Focus event**

```html
// <input type="text" id="textInput" placeholder="Click here">
<script>
  const textInput = document.getElementById('textInput');

  textInput.addEventListener('focus', function() {
    console.log('Input focused');
  });
  textInput.addEventListener('blur', function() {
    console.log('Input blurred');
  });
</script>
```

6. Window events

6.1 Load event
```html
// <script>
  <script>
  window.addEventListener('load', function() {
    console.log('Page and all resources loaded');
  });
</script>
```

6.2 Resize event

```html
// <script>
  window.addEventListener('resize', function() {
    console.log('Window resized');
  });
</script>
```

4.3 Scroll event

```html
// <div style="height: 2000px; background-color: lightblue;">
  Scroll down
</div>
<script>
  window.addEventListener('scroll', function() {
    console.log('Document scrolled');
  });
</script>
```

## Arrays and Objects in JavaScript

### Array declaration
Arrays in JavaScript are ordered, meaning that the elements are stored in a specific sequence.	

```js
const fruits = ["apple", "banana", "cherry"];
```

### Array Indexing	
Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.	

```js
const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits[0]; // "apple"
const secondFruit = fruits[1]; // "banana"
```

### Array Length
The length property is used to determine the number of items present in an array.	

```js
const fruits = ["apple", "banana", "cherry"];
const numFruits = fruits.length; // 3
console.log(numFruits);
```

### Array Mutability
Arrays in JavaScript are mutable, meaning you can change, add, or remove elements after the array is created.	

```js
const fruits = ["apple", "banana", "cherry"];
fruits[2] = "strawberry"; // Modifying an element
fruits[3] = "Kiwi"; // Adding an element
```

### push method
Adds one or more elements to the end of an array.	

```js
const fruits = ["apple", "banana"];
fruits.push("orange", "strawberry");
console.log(fruits)
```

### pop method
Removes the last element from an array and returns it.	

```js
const fruits = ["apple", "banana", "orange"];
const removedFruit = fruits.pop();
console.log('Fruits are',fruits)
console.log('Removed fruits are',removedFruit)
```

### shift methods	
Removes the first element from an array and returns it.	

### unshift method	
Adds one or more elements to the beginning of an array and returns it.	

```js
const fruits = ["banana", "orange"];
fruits.unshift("apple", "strawberry");
console.log(fruits);
```

### splice method	
Changes the contents of an array by removing, replacing, or adding elements at a specified position.	

```js
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "grape"); // Replace the second element with "grape"
console.log(fruits)
```

### concat method	
The concat method in JavaScript arrays combines arrays in sequence, creating a new array containing the elements of the original arrays in the order they were concatenated.	

```js
const fruits = ["apple", "banana"];
const additionalFruits = ["orange", "strawberry"];
const combinedFruits = fruits.concat(additionalFruits);
console.log(‘combinedFruits are’, combinedFruits)
```

### slice method	
Returns a shallow copy of a portion of an array into a new array.	

```js
const fruits = ["apple", "banana", "cherry", "orange"];
const slicedFruits = fruits.slice(1, 3); // Creates a new array with elements from index 1 to 2 (not including 3).
console.log(‘slicedFruits are’,slicedFruits)
```

### indexOf method	
This method is used to find the index of a specified element within an array. It returns the index of the first occurrence of the element in the array, or -1 if the element is not found.	

```js
const fruits = ["apple", "banana", "cherry", "banana"];
const index = fruits.indexOf("banana"); // Returns 1 (the first occurrence of "banana")
console.log(‘Index of banana is’, index)
```

### reverse method	
The reverse method reverses the order of elements in an array, effectively reversing the array in place.	


```js
const fruits = ["apple", "banana", "cherry"];
fruits.reverse(); // Reverses the order of the array
console.log(fruits)
```

### sort method	
The sort method is used to sort the elements of an array in place and returns the sorted array. By default, it sorts elements as strings and in lexicographic order.	

```js
const numbers = [4, 2, 8, 6, 1,10];
numbers.sort(); // Sorts as strings: [1,10, 2, 4, 6, 8]
numbers.sort((a, b) => a - b); // Sorts as numbers: [1, 2, 4, 6, 8]
console.log(numbers)
```

### Array iteration	
A for loop can be used to iterate through the elements of an array to access and manipulate each item in the array.	

```js
const fruits = ['apple', 'banana', 'cherry', 'date'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### forEach	
The forEach method iterates through an array and applies a provided function to each element.	

```js
function sendWelcomeEmail(email) {
    console.log(`Welcome email sent to ${email}`);
}
const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
];
users.forEach((user) => {
    sendWelcomeEmail(user.email);
});
```

### map method	
The map method creates a new array by applying a provided function to each element in the original array.	

```js
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
];
products.map((product) => {
    console.log(`The price of ${product.name} is $${product.price}`);
});
```

### filter method	
The filter method creates a new array containing elements that pass a specified condition. It's useful for extracting specific data from an array.	

```js
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Monitor', price: 250 },
    { name: 'Keyboard', price: 50 },
];
function filterProductsByPriceRange(products, minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}
const minPrice = 100;  // Minimum price threshold
const maxPrice = 500;  // Maximum price threshold
const filteredProducts = filterProductsByPriceRange(products, minPrice, maxPrice);
filteredProducts.forEach((product) => {
    console.log(`${product.name} is of $${product.price}`);
});
```

### reduce method	
The reduce method allows you to reduce an array to a single value by applying a function to each element. It's excellent for aggregating data.	

```js
const orderPrices = [50, 30, 25, 40, 15];
const totalOrderValue = orderPrices.reduce((total, price) => total + price, 0);
console.log(‘The total value of order is ’, totalOrderValue)
```

### find method	
The find method returns the first element in an array that satisfies a specified condition. It's useful for searching for specific data.	

```js 
const employees = [
    { id: 1, name: 'Alice', Eid: 'EMP001', 'Contact details': 'alice@example.com', Role: 'Manager', Designation: 'Project Manager', Experience: '5 years' },
    { id: 2, name: 'Bob', Eid: 'EMP002', 'Contact details': 'bob@example.com', Role: 'Engineer', Designation: 'Software Engineer', Experience: '3 years' },
    { id: 3, name: 'Charlie', Eid: 'EMP003', 'Contact details': 'charlie@example.com', Role: 'Analyst', Designation: 'Data Analyst', Experience: '2 years' },
];
const employee = employees.find((e) => e.id === 2);
console.log(`Details of the employee\nname: ${employee.name}\nEid: ${employee.Eid}\nContact details: ${employee['Contact details']}\nRole: ${employee.Role}\nDesignation: ${employee.Designation}\nExperience: ${employee.Experience}`);
```

### 2D Array	
A 2D array can be created by initializing an array of arrays.	

```js 
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### Access 2D Array	
To access a specific element in a 2D array, you need to provide both row and column indices.	

```js
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(`Element at (${i}, ${j}): ${grid[i][j]}`);
    }
}
```

### 2D array to book seat	
You can create a booking system using 2D array.	

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* CSS for styling the seats */
        .seating-chart {
            display: grid;
            grid-template-columns: repeat(3, 70px);
            gap: 10px;
            justify-content: center;
        }
        .seat {
            width: 70px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        .booked {
            background-color: #FF0000; /* Red */
            cursor: not-allowed;
            color: white; /* Set the text color to white for booked seats */
        }
        .available {
            background-color: #7FFF00; /* Light Green */
        }
        .select-button {
            width: 100%;
            padding: 10px;
            margin: 10px;
            background-color: #007BFF; /* Blue */
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Movie Theater Seating</h2>
    <div id="seating-chart" class="seating-chart">
        <div class="seat available" onclick="bookSeat(0, 0)">A1</div>
        <div class="seat available" onclick="bookSeat(0, 1)">A2</div>
        <div class="seat available" onclick="bookSeat(0, 2)">A3</div>
        <div class="seat available" onclick="bookSeat(1, 0)">B1</div>
        <div class="seat available" onclick="bookSeat(1, 1)">B2</div>
        <div class="seat available" onclick="bookSeat(1, 2)">B3</div>
        <div class="seat available" onclick="bookSeat(2, 0)">C1</div>
        <div class="seat available" onclick="bookSeat(2, 1)">C2</div>
        <div class="seat available" onclick="bookSeat(2, 2)">C3</div>
    </div>
    <button class="select-button" onclick="bookRandomSeat()">Select Random Seat</button>
    <script>
        // JavaScript for booking seats
        const theaterSeats = [
            ['X', 'O', 'X'],
            ['O', 'X', 'O'],
            ['X', 'O', 'X']
        ];
        function bookSeat(row, col) {
            if (theaterSeats[row][col] === 'O') {
                theaterSeats[row][col] = 'X';
                updateSeatStatus(row, col, 'booked');
                alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked.`);
            } else {
                alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken.`);
            }
        }
        function updateSeatStatus(row, col, status) {
            const seats = document.getElementsByClassName('seat');
            const index = row * 3 + col;
            seats[index].classList.remove('available', 'booked');
            seats[index].classList.add(status);
        }
        function bookRandomSeat() {
            const availableSeats = [];
            for (let row = 0; row < theaterSeats.length; row++) {
                for (let col = 0; col < theaterSeats[row].length; col++) {
                    if (theaterSeats[row][col] === 'O') {
                        availableSeats.push({ row, col });
                    }
                }
            }
            if (availableSeats.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableSeats.length);
                const { row, col } = availableSeats[randomIndex];
                bookSeat(row, col);
            } else {
                alert('All seats are already booked.');
            }
        }
    </script>
</body>
</html>
```

### Classes	
Classes are a way to create blueprint or templates for objects. They define the structure and behavior of objects of that class.	

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// Creating an instance of the Person class
const person1 = new Person("John", "Doe");
console.log(person1.getFullName()); // Output: "John Doe"
```

### Constructor Objects	
Objects are instances of classes or can be created as standalone objects without a class. They can have properties and methods.	

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  startEngine() {
    console.log(`The ${this.make} ${this.model}'s engine is running.`);
  }
}
const myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine(); // Output: "The Toyota Camry's engine is running."
```

### Object Literals	
Object literals are a way to create ad-hoc objects without defining a class.	

```js
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.getFullName()); // Output: "Alice Johnson"
```

### Function Constructor	
A function constructor is a regular JavaScript function that is used to create and initialize objects. It's a convention to name function constructors with an initial capital letter.	

```js
function Car(make, model) {
  this.make = make;
  this.model = model;
}
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");
console.log('Car1 details are', car1);
console.log('Car2 details are', car2); 
```

### . (Dot) Notation	
Dot notation is a way to access object properties.	

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log(person.firstName); // Output: "John"
console.log(person.lastName);  // Output: "Doe"
console.log(person.age);       // Output: 30
```

### Bracket Notation	
Bracket notation is a way to access object properties, especially useful when property names contain special characters or spaces.	

```js
const person = {
  "first name": "John",
  "last name": "Doe",
  age: 30
};
console.log(person["first name"]); // Output: "John"
console.log(person["last name"]);  // Output: "Doe"
console.log(person["age"]);        // Output: 30
```

### Arrays of Objects	
An array of objects in JavaScript is a collection of multiple objects stored within a single array container.	
```js
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 }
];
```

### Access Array of Objects	
You can access elements within an array of objects using the array index and using dot notation.	
```js
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 }
];
console.log(students[0].name); // Output: "Alice"
console.log(students[2].age);  // Output: 28
```

### Iterating Through an Array of Objects	
Iteration of objects through arrays include for loops and array methods.	

```js
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 }
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
```

### Adding Objects	
You can add new objects to the array using the push method.	

```js
//Adding Elements
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 }
];
students.push({ name: "David", age: 20 });  // Add a new student
console.log('After using push method ');
console.log(students);
```

### Removing Objects	
You can remove objects using the pop method.	

```js
//Removing Elements
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 }
];
const removedStudent = students.pop();      // Remove the last student
console.log('After using pop method ');
console.log(students);
```

### Filtering and Mapping Arrays of Objects	
You can filter and transform arrays of objects using array methods like filter and map.	
```js
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 }
];
const adults = students.filter(student => student.age >= 23);  // Filter students who are 18 or olderconsole.log('After using push method ');
const studentNames = students.map(student => student.name);   // Create an array of student names
console.log(‘Using Filter Method’);
console.log(adults);
console.log(‘Using Map Method’
console.log(studentNames);
```

### Mapping Arrays of Objects	
You can traverse and transform arrays of objects using array method like map.	
```js
const employees = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 38 }
];
const employee = employees.map((employee) => {
return employee});
console.log(employee);
```
### Searching for Objects	
You can search for objects within an array of objects using array methods like find.	
```js 
const employees = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 38 }
];
const employee = employees.find(employee => employee.name === "Charlie");
console.log(employee.age);
```

### Nested Array of objects	
An array of objects is used to store and organize data in a way that allows you to access and manipulate the information easily.	

```js
let arrayOfObjects = [
  {
    name: 'John',
    age: 25,
    hobbies: ['Reading', 'Traveling'],
    address: {
      street: '123 Main St',
      city: 'New York',
      zip: '10001'
    }
  },
  {
    name: 'Alice',
    age: 30,
    skills: ['JavaScript', 'React', 'Node.js'],
    projects: [
      { title: 'Project A', completed: true },
      { title: 'Project B', completed: false }
    ]
  },
  {
    title: 'Special Object',
    data: [1, 2, 3],
    metadata: { key: 'value' }
  },
  {
    // An object with no specific properties
  },
  {
    anotherObject: true,
    nestedArrays: [
      [1, 2, 3],
      ['a', 'b', 'c']
    ],
    additionalProperty: 'Extra'
  }
];
```

### Access Nested Array-Code Above	
Using . dot operator elements of nested array can be accesed, which has been described in just above code.	

```js
// Accessing properties of the first object
console.log(arrayOfObjects[0].name); // Output: John
console.log(arrayOfObjects[0].hobbies[0]); // Output: Reading
// Accessing properties of the second object
console.log(arrayOfObjects[1].skills[2]); // Output: Node.js
console.log(arrayOfObjects[1].projects[0].title); // Output: Project A
// Accessing properties of the third object
console.log(arrayOfObjects[2].metadata.key); // Output: value
// Accessing properties of the fourth object
console.log(arrayOfObjects[3]); // Output: {}
// Accessing properties of the fifth object
console.log(arrayOfObjects[4].anotherObject); // Output: true
console.log(arrayOfObjects[4].additionalProperty); // Output: Extra
```

### Strings	
Strings are data type in JavaScript used to represent text. They can contain letters, numbers, symbols, and whitespace characters.	

```js
const message = "This is a message.";
```

### Strings	
Strings are data type in JavaScript used to represent text. They can contain letters, numbers, symbols, and whitespace characters.	

`const message = "This is a message.";`

### template literals	
Template literals in JavaScript are strings allowing embedded expressions, denoted by backticks (), enabling easy multiline strings and interpolation of variables using ${}`.	

`const fullName = `${firstName} ${lastName}`;`

### String Concatenation	
The concatenation operator + in JavaScript is used to combine (join) two or more strings together to create a single, longer string.	

```js
const firstName='Peter';
const greeting = 'Hello, ' + firstName + '!';
console.log(greeting);
```

### String Length	
To determine the length of a string, length property can be used.	

```js
const message1 = "This is a message.";
const Stringlength1 = message1.length;
const message2 = "Thisisamessage";
const Stringlength2 = message2.length;
console.log(Stringlength1);
console.log(Stringlength2)
```

### Accessing Characters	
Individual characters within a string can be accessed using bracket notation and a zero-based index.	
```js
const text = "JavaScript";
const firstCharacter = text[0]; 
```

### toLowerCase and toUpperCase	
JavaScript provides methods to change the case of a string into lowercase and uppercase.	

```js 
const text = "Hello, World!";
const lowercaseText = text.toLowerCase(); // "hello, world!"
const uppercaseText = text.toUpperCase(); // "HELLO, WORLD!"
console.log('The lowercase  for text is ',lowercaseText);
console.log('The uppercase  for text is ',uppercaseText);
```

### indexOf() method	
indexOf returns the index of the first occurrence of a specified substring within a string. It returns -1 if the substring is not found.	
```js
const sentence = "The quick brown fox jumps over the lazy dog.";
const indexOfFox = sentence.indexOf("fox"); // 16
console.log(indexOfFox);
```

### includes() method	
includes returns a boolean indicating whether a specified substring is found within a string, returning true if found and false if not.	
```js
const sentence = "The quick brown fox jumps over the lazy dog.";
const hasFox = sentence.includes("fox"); // true
console.log(hasFox);
```

### substring() methods	
substring extracts characters from a string between two specified indices. It means extracting a substring from the text starting at index 0 and ending at index 5 (excluding index 5).	
```js
const text = "Hello, World!";
const subText1 = text.substring(0, 5); // "Hello"
console.log(subText1);
```



### slice() method	
slice extracts a section of a string and returns it as a new string, specifying the start and end positions. It means extracting a substring from the text starting at index 7 until the end of the string.	
```js
const text = "Hello, World!";
const subText2 = text.slice(7);        // "World!"
console.log(subText2);
```



## substr() method	
substr extracts a specified number of characters from a string, starting at a specified index.It means extracting a substring from the text starting at the 7th index and including 5 characters.	
```js
const text = "Hello, World!";
const subText3 = text.substr(7, 5);    // "World"
console.log(subText3);
```



# Replacing Substrings	
The replace method allows you to replace substrings with new values.	
```js
const text = "Hello, World!";
const updatedText = text.replace("World", "Universe"); 
console.log(updatedText);
```



### Splitting Strings	
You can split a string into an array of substrings using the split method.	
```js
const csvData = "Alice,25,New York;Bob,30,Los Angeles;Charlie,28,Chicago";
const peopleArray = csvData.split(';');
console.log(peopleArray);
```



### trim()method	
The trim method removes leading and trailing whitespace from a string.	
```js
const text = "   Trim me!   ";
console.log(text.length);
const trimmedText = text.trim();
console.log(trimmedText.length);
```



### round(), ceil() and floor() Math Methods	
round() rounds a number to the nearest integer. ceil() rounds a number up to the nearest integer. floor() rounds a number down to the nearest integer.	
```js
const number = 3.6;
const rounded = Math.round(number); // Round to nearest integer: 4
const ceil = Math.ceil(number);   // Round up: 4
const floor = Math.floor(number);   // Round down: 3
```



### pow(), sqrt() and log() Math Methods	
pow() raises a number to a specified exponent. sqrt() returns the square root of a number. log() returns the natural logarithm (base e) of a number.	
```js
const base = 2;
const exponent = 3;
const power = Math.pow(base, exponent); // Power: 8
const squareRoot = Math.sqrt(base);     // Square Root: 1.41421356237
const naturalLog = Math.log(base);      // Natural Logarithm: 0.69314718056
```



### random() Method	
The random() method in JavaScript generates a pseudo-random floating-point number between 0 (inclusive) and n (exclusive).	
```html
<!DOCTYPE html>
<html>
<head>
  <title>Random Quote Generator</title>
</head>
<body>
  <h1>Random Quote Generator</h1>
  
  <p id="quoteDisplay"></p>
  
  <button onclick="generateRandomQuote()">Get Quote</button>
  
  <script>
    const quotes = [
      "Life is what happens when you're busy making other plans. - John Lennon",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "In three words, I can sum up everything I've learned about life: it goes on. - Robert Frost",
      "Don't count the days, make the days count. - Muhammad Ali",
      "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"
    ];
    
    function generateRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
      const randomQuote = quotes[randomIndex]; // Get a random quote
      
      document.getElementById("quoteDisplay").textContent = randomQuote;
    }
  </script>
</body>
</html>
```



### Date Object	
Date objects are used to represent specific moments in time.	
```js
const currentDate = new Date(); // Current date and time
const specificDate = new Date(2023, 0, 15); // January 15, 2023
const fromMilliseconds = new Date(1672569600000); // From milliseconds since the epoch
```



### Retrieving Date	
Date objects provide access to individual components of a date, such as year, month, day, and hour.	

```js
const date = new Date();
const year = date.getFullYear();     // Current year
const month = date.getMonth();       // Current month (0-11)
const day = date.getDate();         // Day of the month (1-31)
const hours = date.getHours();      // Hours (0-23)
const minutes = date.getMinutes();  // Minutes (0-59)
const seconds = date.getSeconds();  // Seconds (0-59)
```



### toLocaleDateString() and toLocaleTimeString()	
toLocaleDateString() to converts a date to a string representing the date portion according to the locale's formatting conventions. toLocaleTimeString() to converts a date to a string representing the time portion according to the locale's formatting conventions.	

```js
const date = new Date();
const formattedDate = date.toLocaleDateString(); // "11/15/2023"
const formattedTime = date.toLocaleTimeString(); // "1:30:45 PM"
```



### Date Arithmetic	
Date objects allow for various date arithmetic operations, including adding and subtracting time intervals.	

```js
const date = new Date();
date.setFullYear(2024); // Set the year to 2024
date.setDate(date.getDate() + 7); // Add 7 days
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30); // Date 30 days from now
```


### setTimeout() Method	
The setTimeout function schedules the execution of a function after a specified delay in milliseconds:	

```js
setTimeout(function() {
  console.log("This message appears after a delay.");
}, 2000); // Displayed after a 2-second delay
```

### setInterval	
setInterval repeatedly executes a function at a specified interval.	

```js
let count = 0;
const intervalId = setInterval(function() {
  console.log("Count: " + count);
  count++;
  if (count > 5) {
    clearInterval(intervalId); // Stop after 6 iterations
  }
}, 1000); // Displayed every second.
```

## DOM Manipulation Methods

### querySelectorAll
querySelectorAll is a method in JavaScript that selects multiple HTML elements within the DOM based on CSS-like selectors. It returns a collection (a non-live NodeList) of elements that match the specified selector. You can use it to select elements by class, ID, or tag name.

Here are examples of how to use querySelectorAll for class, ID, and tag selections with console.log and explanations of their syntax:

#### 1. Selecting by Class:

HMTL code
```html
<html>
<head>
    <title>querySelectorAll Example</title>
</head>
<body>
    <p class="highlighted">This is a highlighted paragraph.</p>
    <p class="highlighted">This is another highlighted paragraph.</p>
    <p>This is a regular paragraph.</p>
</body>
</html>
```

JavaScript Code
```js
const elementsByClass = document.querySelectorAll('.highlighted');
// Log the selected elements to the console
console.log(elementsByClass);
```
Output

```NodeList [ <p.highlighted>, <p.highlighted> ]```

Explanation:

* ```document.querySelectorAll('.highlighted')``` selects all elements with the class "highlighted" within the document.
* The elementsByClass collection stores the selected elements, which form a NodeList.
* ```console.log(elementsByClass);``` logs the selected elements to the console.
* Output Explanation: The elementsByClass NodeList contains two <p> elements with the class "highlighted." The console.log statement displays the NodeList with these two elements.

#### 2. Selecting by ID:
HTML Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>querySelectorAll Example</title>
</head>
<body>
    <p id="my-paragraph">This is a paragraph with an ID.</p>
    <p>This is another paragraph.</p>
</body>
</html>
```
JavaScript code
```js
// Select the element with the ID "my-paragraph" using querySelectorAll
const elementByID = document.querySelectorAll('#my-paragraph');
// Log the selected element to the console
console.log(elementByID);
```
Output

```NodeList [ <p#my-paragraph> ]```

Explanation:

* ```document.querySelectorAll('#my-paragraph')``` selects the element with the ID "my-paragraph" within the document. Even though querySelectorAll is used, it still returns a collection, but in this case, it contains only one element (if the ID is unique).
* The elementByID collection stores the selected elements, which form a NodeList.
* ```console.log(elementByID);``` logs the selected element to the console.
* Output Explanation: The elementByID NodeList contains the <p> element with the ID "my-paragraph." Even though it's a single element, it's still represented as a NodeList. The console.log statement displays the NodeList with this element.

#### 3. Selecting by Tag Name:
HTML code
```html
<!DOCTYPE html>
<html>
<head>
    <title>querySelectorAll Example</title>
</head>
<body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <p class="highlighted">This is a highlighted paragraph.</p>
</body>
</html>
```
JavaScript Code
```js
// Select all <p> elements using querySelectorAll
const elementsByTag = document.querySelectorAll('p');
// Log the selected elements to the console
console.log(elementsByTag);
```
Output
![Alt text](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/images/reading_image.png)

Explanation:

* ```document.querySelectorAll('p')``` selects all <p> elements within the document.
* The selected elements are stored in the elementsByTag collection, which is a NodeList.
* ```console.log(elementsByTag);``` logs the selected elements to the console.
* Output Explanation: The elementsByTag NodeList contains all three <p> elements in the document. The console.log statement displays the NodeList with these three elements.

### ClassList
The classList property is a useful feature that allows you to manipulate classes on HTML elements easily. Let's dive into an overview of the classList property and its methods.

#### The classList Property in JavaScript
In the DOM, the classList property is associated with an HTML element and provides a collection of methods for working with the element's classes.

#### Accessing classList
You can access the classList property of an element using JavaScript like this:

```js
const element = document.getElementById('myElement');
const classes = element.classList;
```

#### Common Methods of classList

1. ```add(class1, class2, ...)```

This method adds one or more classes to the element.

```element.classList.add('newClass');```

2. ```remove(class1, class2, ...)```

Removes one or more classes from the element.

```element.classList.remove('oldClass');```

3. ```toggle(class, force)```

Toggles a class. If the class exists, it is removed; otherwise, it is added. If the second parameter is true, the class is added; if false, the class is removed.

```element.classList.toggle('active');```

4. ```contains(class)```

Checks if a class is present on the element. Returns true if the class exists; otherwise, it is false.
```js
if (element.classList.contains('special')) {
  // Do something special
}
```

5. ```replace(oldClass, newClass)```

Replaces a class with another class.

```element.classList.replace('oldClass', 'newClass');```

6. ```item(index)```

Returns the class name at the specified index.

```const firstClass = element.classList.item(0);```

7. ```toString()```

Returns a string representing the element's classes.

```const classString = element.classList.toString();```

#### Example

```html
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>classList Example</title>
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
        .italic {
            font-style: italic;
        }
        .underline {
            text-decoration: underline;
        }
        .strike {
            text-decoration: line-through;
        }
    </style>
</head>
<body>

    <p id="myParagraph" class="highlight">This is a paragraph.</p>
    <button onclick="performClassListOperations()">Perform Operations</button>

    <script>
        function performClassListOperations() {
            const paragraph = document.getElementById('myParagraph');

            // Adding a class
            paragraph.classList.add('italic');

            // Removing a class
            paragraph.classList.remove('highlight');

            // Toggling a class
            paragraph.classList.toggle('underline', true);

            // Checking if a class exists
            const hasItalicClass = paragraph.classList.contains('italic');
            console.log(`Has italic class: ${hasItalicClass}`);

            // Replacing a class after a delay (for demonstration)
            setTimeout(() => {
                paragraph.classList.replace('underline', 'strike');

                // Accessing classes as a string
                const classString = paragraph.classList.toString();
                console.log(`Current classes: ${classString}`);
            }, 2000); // Delay for 2 seconds
        }
    </script>

</body>
</html>
```
Let's break it down step by step:

##### HTML Structure

* ```<!DOCTYPE html>``` Specifies the HTML version being used.
* ```<html lang="en">``` Declares the document language as English.
* The <head> section contains metadata like character encoding, viewport settings, and the title of the document.
* Inside the <head>, there's a <style> block defining style tag to apply internal css.

##### Body Content

* ```<p id="myParagraph" class="highlight">This is a paragraph.</p>``` This HTML paragraph (<p>) element has an ID of "myParagraph" and a class of "highlight." It's the element on which we'll perform classList operations.
* ```<button onclick="performClassListOperations()">Perform Operations</button>``` This button, when clicked, triggers the performClassListOperations() function.

#### JavaScript Section
JavaScript Function ```performClassListOperations()```

This function gets executed when a button, probably named "Perform Operations," is clicked in the HTML. Here's a detailed breakdown of each step within the function:

1. Getting the Paragraph Element

```const paragraph = document.getElementById('myParagraph');```

* const paragraph: Declares a variable named paragraph.
* ```document.getElementById('myParagraph')``` Retrieves the HTML element with the ID "myParagraph" and assigns it to the paragraph variable.

2. Adding a Class

```paragraph.classList.add('italic');```

* ```paragraph.classList.add('italic')``` Adds the class "italic" to the paragraph element's class list.

3. Removing a Class

```paragraph.classList.remove('highlight');```

```paragraph.classList.remove('highlight')``` Removes the class "highlight" from the paragraph element's class list.

4. Toggling a Class

```paragraph.classList.toggle('underline', true);```

```paragraph.classList.toggle('underline,'``` true) Toggles the class "underline" on the paragraph element. In this case, it explicitly adds the class "underline" because the second parameter is true.

5. Checking if a Class Exists

```js
const hasItalicClass = paragraph.classList.contains('italic');
console.log(`Has italic class: ${hasItalicClass}`);
```

* ```paragraph.classList.contains('italic')``` Checks if the class "italic" exists in the paragraph element's class list.
* The result (true or false) is stored in the variable hasItalicClass and logged to the console.

6. Replacing a Class with a Delay

```js
setTimeout(() => {
  paragraph.classList.replace('underline', 'strike');

  // Accessing classes as a string
  const classString = paragraph.classList.toString();
  console.log(`Current classes: ${classString}`);
}, 2000); // Delay for 2 seconds
```

* ```setTimeout(() => { ... }, 2000)``` Delays the execution of the inner code by 2000 milliseconds (2 seconds).
* Inside the timeout function:
    * ```paragraph.classList.replace('underline,' 'strike')``` Replaces the class "underline" with "strike" in the paragraph element's class list.
    * ```const classString = paragraph.classList.toString()``` Retrieves the updated classes as a string.
    * ```console.log(Current classes: ${classString})``` Logs the current classes of the paragraph element to the console.

## Working with DOM in JavaScript


### try{....} block	
The code that might generate an error is enclosed within a try block. 
This block helps to monitor for errors.	

```js
const obj = undefined;
try {
  const propertyValue = obj.property; // Attempting to access a property of an undefined object
  console.log("Property Value: " + propertyValue);
  console.log("This message will be reached.");
} catch (error) {
  console.error("An error occurred while accessing the property:", error.message);
}
console.log("Program continues after error handling.");
```

### catch{....} block	
The catch block in JavaScript catches and handles errors that occur within a try block.	

```js
try {
  // Code that might throw an error
  const result = nondeclaredFunction(); // Assuming someFunction() is not defined
  console.log(result); // This line won't execute due to the error
} catch (error) {
  // Code to handle the error
  console.log('An error occurred:', error.message);
}
```

### getElementById() Method	
getElementById is a method in JavaScript used to access a specific HTML element within the Document Object Model (DOM) based on its unique id attribute.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>getElementById Example</title>
</head>
<body>
    <h1 id="main-heading">Welcome to the Example Page</h1>
    <p id="content-paragraph">This is some content.</p>
    <script>
    const headingElement = document.getElementById('main-heading');
console.log(headingElement)
    </script>
</body>
</html>
```

### getElementsByClassName() Method	
getElementsByClassName is a method in JavaScript that is used to access multiple HTML elements within the Document Object Model (DOM) that share the same class name.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>getElementsByClassName Example</title>
</head>
<body>
    <p class="highlighted">This is a highlighted paragraph.</p>
    <p class="highlighted">This is another highlighted paragraph.</p>
    <p>This is a regular paragraph.</p>
    <script>
        const highlightedElements = document.getElementsByClassName('highlighted');
        // Modify the text content of each element
        for (let i = 0; i < highlightedElements.length; i++) {
            highlightedElements[i].textContent = `This paragraph is highlighted! for class ${i + 1}`;
        }
    </script>
</body>
</html>
```

### getElementsByTagName() Method	
getElementsByTagName is a method in JavaScript that is used to access multiple HTML elements within the Document Object Model (DOM) based on their tag name.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>getElementsByTagName Example</title>
</head>
<body>
    <h2>Heading 2</h2>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <script>
        const paragraphElements = document.getElementsByTagName('p');
        console.log(paragraphElements);
        console.log(paragraphElements[0]);
        console.log(paragraphElements[1]);
    </script>
</body>
</html>
```

### querySelector	
querySelector is a method used to access HTML elements within the Document Object Model (DOM) based on CSS-like selectors such as class, ID, or tag name.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>querySelector Example</title>
</head>
<body>
    <p class="highlighted">This is a highlighted paragraph.</p>
    <p id="my-paragraph">This is a paragraph with an ID.</p>
    <div>This is a regular paragraph.</div>
    <script>
        const elementByClass = document.querySelector('.highlighted');
        // Log the selected element to the console
        console.log(elementByClass);
        // Select the element with the ID "my-paragraph" using querySelector
        const elementByID = document.querySelector('#my-paragraph');
        // Log the selected element to the console
        console.log(elementByID);
        // Select the first <p> element using querySelector
        const elementByTag = document.querySelector('div');
        // Log the selected element to the console
        console.log(elementByTag);
    </script>
</body>
</html>
```

### querySelectorAll	
querySelectorAll is a method used to select multiple HTML elements based on CSS-like selectors such as class, ID, or tag name and returns a collection of array Node-List elements that match the specified selector.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>querySelectorAll Example</title>
</head>
<body>
    <p id="highlight">This is a highlighted paragraph.</p>
    <p class="highlighted">This is a highlighted paragraph.</p>
    <p class="highlighted">This is another highlighted paragraph.</p>
    <section>This is a regular paragraph.</section>
    <script>
        const elementsById = document.querySelectorAll('#highlight');
        const elementsByClass = document.querySelectorAll('.highlighted');
        const elementsByTag = document.querySelectorAll('section');
        // Log the selected elements to the console
        console.log(elementsById);
        console.log(elementsByClass);
        console.log(elementsByTag);
    </script>
</body>
</html>
```

### textContent() Method	
It can modify or change the text or HTML content of elements.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>textContent Example</title>
</head>
<body>
    <p id="my-paragraph">This is some text.</p>
    <script>
        const paragraph = document.getElementById('my-paragraph');
        paragraph.textContent = 'This is updated text.';
    </script>
</body>
</html>
```

### setAttribute() Method	
It is used to alter the attributes (for example, src, href, class, id) of elements, which can affect their behavior or appearance.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>setAttribute Example</title>
</head>
<body>
    <img id="my-image" src="your-old-image.jpg">
    <script>
        const image = document.getElementById('my-image');
        image.setAttribute('src', 'your-new-image.jpg');
    </script>
</body>
</html>
```

### Adding Elements	
Dynamically adding new elements to the page based on user interactions or other conditions.	

```html
<html>
<head>
    <title>createElement Example</title>
</head>
<body>
    <ul id="my-list">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>        
    <script>
        const list = document.getElementById('my-list');
        const newItem = document.createElement('li');
        newItem.textContent = 'Item 3';
        list.appendChild(newItem);
    </script>
</body>
</html>
```

### cloneNode() Method	
Creating copies of existing elements that can be inserted elsewhere in the document.	

```html
<html>
<head>
    <title>createElement Example</title>
</head>
<body>
    <ul id="my-list">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>        
    <script>
        const list = document.getElementById('my-list');
        const firstItem = list.querySelector('li');
        const clonedItem = firstItem.cloneNode(true);
        list.appendChild(clonedItem);
    </script>
</body>
</html>
```

### window Object	
The global window object represents the browser window or tab and serves as the root of the BOM.	

```js
window.confirm(message): Shows a confirmation dialog with "OK" and "Cancel" buttons and returns a Boolean value.
window.open(url, name, specs, replace): Opens a new browser window or tab.
window.close(): Closes the current window or tab.
window.location: Provides information about the current URL and allows navigation.
window.setTimeout(function, delay): Executes a function after a specified delay.
window.localStorage and window.sessionStorage: Allow data storage on the client side.
window.history: Provides access to the browser's session history.
```

### navigator Object	
The navigator object provides information about the client's browser, such as the browser's name, version, and supported features.	

```js
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
```

# screen Object	
The screen object gives details about the user's screen, including its dimensions and color depth.	

```js
const screenWidth = screen.width;
const screenHeight = screen.height;
```

### history Object	
The history object represents the browser's session history, allowing you to navigate backward and forward in the user's browsing history.	

```js
history.back(); // Navigates back one page
history.forward(); // Navigates forward one page
```

### location Object	
The location object provides information about the current URL and allows you to manipulate the URL, redirecting the user to other web pages.	

```js
const currentURL = location.href;
location.href = 'https://example.com'; // Redirects the user to a new URL
```

### BOM Example	
This represents the combined example of above BOM methods.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>BOM Example</title>
</head>
<body>
    <button id="alertButton">Show Alert</button>
    <button id="openWindowButton">Open Window</button>
    <button id="navigateBackButton">Go Back</button>
    <button id="changeURLButton">Change URL</button>
    <script>
        // Access HTML elements
        const alertButton = document.getElementById('alertButton');
        const openWindowButton = document.getElementById('openWindowButton');
        const navigateBackButton = document.getElementById('navigateBackButton');
        const changeURLButton = document.getElementById('changeURLButton');
        // Attach event listeners
        alertButton.addEventListener('click', () => {
            window.alert('Hello, this is an alert!');
        });
        openWindowButton.addEventListener('click', () => {
            window.open('https://example.com', '_blank');
        });
        navigateBackButton.addEventListener('click', () => {
            history.back(); // Navigates back one page in the user's browsing history.
        });
        changeURLButton.addEventListener('click', () => {
            location.href = 'https://example.com'; // Redirects the user to a new URL.
        });
    </script>
</body>
</html>
```

### firstElementChild() and lastElementChild()	
It uses the firstElementChild and lastElementChild properties to access the first and last child nodes of any element.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversing Example</title>
</head>
<body>
    <div id="parent">
        <p>Child 1</p>
        <p>Child 2</p>
    </div>
    <script>
        const parent = document.getElementById("parent");
        const firstChild = parent.firstElementChild;
        const lastChild = parent.lastElementChild;
        console.log(firstChild.textContent); // Outputs: "Child 1"
        console.log(lastChild.textContent);  // Outputs: "Child 2"
    </script>
</body>
</html>
```

### container Element	
To find elements within a container, you typically use methods that allow you to query elements based on various criteria, such as tag name, class, or other attributes.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversing Example</title>
</head>
<body>
    <div id="container">
        <p class="myClass">Paragraph 1</p>
        <p class="myClass">Paragraph 2</p>
        <p>Paragraph 3</p>
    </div>  
    <script>
        const container = document.getElementById("container");
        const singleElement = container.querySelector(".myClass");
        const multipleElements = container.querySelectorAll(".myClass");
        console.log(singleElement.textContent); // Outputs: "Paragraph 1"
        console.log(multipleElements[1].textContent); // Outputs: "Paragraph 2
    </script>
</body>
</html>
```

### element.style.property = value	
A way to access and modify the inline styles of an HTML element using the style property.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Styling Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <script>
        const button = document.getElementById("myButton");
        button.style.backgroundColor = "blue";
        button.style.color = "white";
        button.style.fontSize = "16px";
    </script>
</body>
</html>
```

### element.classList	
You can use the classList property to add, remove, or toggle CSS classes on an element.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Styling Example</title>
</head>
<body>
    <div id="myDiv" class="active">This is a div</div>
    <button id="myButton">Toggle Class</button>
    <script>
        const div = document.getElementById("myDiv");
        const button = document.getElementById("myButton");
        function toggleClassAndColor() {
            div.classList.toggle("active");
            div.classList.toggle("inactive");
            // Check if the "active" class is present and change the background color accordingly
            if (div.classList.contains("active")) {
                div.style.backgroundColor = "blue";
            } else {
                div.style.backgroundColor = "red";
            }
        }
        button.addEventListener("click", toggleClassAndColor);
    </script>
</body>
</html>
```

### element.setAttribute	
A method to use the setAttribute method to set or modify the style attribute of an element, which is a string containing inline CSS.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Styling Example</title>
</head>
<body>
    <p id="myParagraph" style="color: red;">This is a red paragraph.</p>
    <button id="btn">Click to change Color of above paragraph</button>
    <script>
       const paragraph = document.getElementById("myParagraph");
        const btn=document.getElementById('btn');
        btn.addEventListener('click',()=>{
            paragraph.setAttribute("style", "color: blue; font-size: 18px;");
        })
    </script>
</body>

### element.style.cssText	
The cssText property allows you to set the entire inline style of an element as a string.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Styling Example</title>
</head>
<body>
    <p id="myText">This is a paragraph.</p>
    <button id="btn">Click to change Color and bold</button>
    <script>
       const text = document.getElementById("myText");
       const btn=document.getElementById('btn');
       btn.addEventListener('click',()=>{
        text.style.cssText = "color: red; font-weight: bold;";
       })
    </script>
</body>
</html>
```

### element.style.setProperty	

This method allows you to set a specific CSS property with an optional priority for an element's inline style.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Styling Example</title>
</head>
<body>
    <h1 id="myHeading">This is a heading.</h1>
    <button id="btn">Click Here</button>
    <script>
       const heading = document.getElementById("myHeading");
       const btn=document.getElementById('btn');
       btn.addEventListener('click',()=>{
        heading.style.setProperty("color", "violet", "important");
       })
    </script>
</body>
</html>
```

### element.style.removeProperty	

You can use the removeProperty method to remove a specific CSS property from an element's inline style.	

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Styling Example</title>
</head>
<body>
    <p id="myParagraph" style="color: blue; font-size: 18px;">This is a styled paragraph.</p>
    <button id="btn">Click Here</button>
    <script>
       const paragraph = document.getElementById("myParagraph");
       const btn=document.getElementById('btn');
       btn.addEventListener('click',()=>{
        paragraph.style.removeProperty("color");
       })
    </script>
</body>
</html>
```

## JavaScript Async

### JSON	
It is a text-based format used for structuring data in a way that is both human-readable and machine-readable.

```json
{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "email": "johndoe@email.com",
  "hobbies": ["Reading", "Hiking", "Cooking"]
}
```

### Callback	
A callback in JavaScript is a function passed as an argument to another function, which is then executed at a later time or under certain conditions.

```js
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Executes the callback function
}
function sayGoodbye() {
  console.log('How are you!');
}
greet('John Doe', sayGoodbye); // Passing sayGoodbye function as a callback
```

### XMLHttpRequest Object	
It is used to create an instance of the XMLHttpRequest object to initiate an HTTP request.

```js
var xhr = new XMLHttpRequest();
```

### XMLHttpRequest Open Methods	
The open() method sets up the request, specifying the HTTP method (GET, POST, and so on) and the URL.

```js
xhr.open('GET', 'https://api.example.com/data', true);
```
### send() Method	
The send() method is invoked to send the request to the specified URL.

```js
xhr.send();
```

### Load Data Using XMLHttpRequest	
This code describes that data can be loaded using Ajax methods.

```html
<!DOCTYPE html>
<html>
<head>
  <title>AJAX Example</title>
</head>
<body>
  <button id="loadUsersBtn">Load Users</button>
  <div id="userList"></div>
  <script>
    // JavaScript for AJAX functionality
    document.getElementById('loadUsersBtn').addEventListener('click', function() {
      // Creating an XMLHttpRequest object
      var xhr = new XMLHttpRequest();

      // Define the request
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

      // Handle the response
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
          var users = JSON.parse(xhr.responseText);
          displayUsers(users);
        } else {
          console.error('Error fetching data');
        }
      };

      // Handle network errors
      xhr.onerror = function() {
        console.error('Network error');
      };

      // Send the request
      xhr.send();
    });
    // Function to display users on the page
    function displayUsers(users) {
      var userListDiv = document.getElementById('userList');
      userListDiv.innerHTML = '<h2>User List</h2>';
      var ul = document.createElement('ul');
      users.forEach(function(user) {
        var li = document.createElement('li');
        li.textContent = user.name;
        ul.appendChild(li);
      });
      userListDiv.appendChild(ul);
    }
  </script>
</body>
</html>
```

### Promise Syntax	
Promises are used for tasks like fetching data from a server, reading files, or performing other operations that may take some time to complete.

```js
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation goes here
  // If successful, call resolve with the result
  // If an error occurs, call reject with an error
});
```

### Promise with .then and .catch	
Promises are used for tasks like fetching data from a server, reading files, or performing using `.then()` method and caught error using `.catch()` method.

```js
const myPromise = new Promise((resolve, reject) => {
  // Simulated asynchronous operation (e.g., making an API request)
  setTimeout(() => {
    const success = true; // Simulating a successful operation
    if (success) {
      resolve('Data successfully fetched');
    } else {
      reject('Error: Failed to fetch data');
    }
  }, 1000);
});
myPromise.then(
  (result) => {
    // Handle the successful result (e.g., update UI with the data)
    console.log(result);
  },
  (error) => {
    // Handle the error (e.g., log the error or show an error message)
    console.error(error);
  }
);

Fetch API Syntax	It is used for fetching resources from the web, such as data from a server or an API.
fetch(url, options)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
  });
```

### Fetch API Get Methods	
The GET method is used to retrieve data from the specified resource.

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(handleResponse)
  .then(data => {
    console.log('GET Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Fetch API POST Method	
The POST method is used to submit data to be processed to a specified resource.

```js
const newPost = {
  title: 'New Post',
  body: 'This is a new post.',
  userId: 1
};
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newPost)
})
  .then(handleResponse)
  .then(data => {
    console.log('POST Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Fetch API PUT Method	
The PUT method is used to update or replace data at the specified resource. It is typically used to update existing records on the server.

```js
const updatedPost = {
  id: 1,
  title: 'Updated Post',
  body: 'This post has been updated.',
  userId: 1
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedPost)
})
  .then(handleResponse)
  .then(data => {
    console.log('PUT Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Fetch API PATCH Method	
The PATCH method is used to apply partial modifications to a resource. It is typically used to update parts of a resource while leaving the rest of the resource unchanged.

```js
const updatedData = {
  title: 'Updated Title'
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(handleResponse)
  .then(data => {
    console.log('PATCH Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Fetch API DELETE Method	
The DELETE method is used to request the removal of a resource from the server. It is used to delete records or resources.

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('DELETE Request Successful');
    } else {
      throw new Error('DELETE request failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Axios Library Syntax	
It provides a consistent way for making asynchronous HTTP requests to interact with RESTful APIs or other web services.

```js
axios({
  method: 'HTTP_METHOD',
  url: 'URL',
  headers: {
    // Headers (optional)
  },
  data: {
    // Request data (optional)
  }
})
  .then(response => {
    // Handle the successful response
  })
  .catch(error => {
    // Handle errors
  });
```

### install axios	
You can install axios using npm in the terminal after installing node.

```linux
npm install axios
```

### Axios Methods	
Axios have HTTP method for the request such as 'GET', 'POST', 'PUT', 'DELETE'.

```js
axios({
  method: 'HTTP_METHOD',
  url: 'URL',
  headers: {
    // Headers (optional)
  },
  data: {
    // Request data (optional)
  }
})
  .then(response => {
    // Handle the successful response
  })
  .catch(error => {
    // Handle errors
  });
```
