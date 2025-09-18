length = parseFloat(document.getElementById('length').value);
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
const startbtn = document.getElementById('startbtn');


function increaseCount () {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}

function displayCount () {
  document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}
document.getElementById('userName').innerHTML = username;

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

  submitButton.onclick = submitFeedback;

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

const employees = [
  {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript'},
  {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'},
  {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
];

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong> ${book.name}</p>
        <p><strong>Author Name: </strong> ${book.authorName}</p>
        <p><strong>Book Description: </strong> ${book.bookDescription}</p>
        <p><strong>No of pages: </strong> ${book.pagesNumber} page(s)</p>
        <button onClick="editbook(${index})">Edit</button>
        <button onClick="deletebook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // remove old entry
    showbooks(); // Refresh list
}

function displayResult(result, add, div) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `The multiplication is: ${result} <br> The additon is : ${add} <br> The division is : ${div}`;
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}


