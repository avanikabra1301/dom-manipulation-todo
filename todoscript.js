// Select the input field from HTML
const input = document.getElementById("todo-input");

// Select the Add button
const addBtn = document.getElementById("add-btn");

// Select the UL list where tasks will appear
const list = document.getElementById("todo-list");


// When Add button is clicked, run addTodo function
addBtn.addEventListener("click", addTodo);


// Function to add a new task
function addTodo() {

  // Get the value from input and remove extra spaces
  const taskText = input.value.trim();

  // If input is empty, show alert and stop function
  if (taskText === "") {
    alert("Please enter a task");
    return;  // Stops execution
  }

  // Create a new list item (li)
  const li = document.createElement("li");

  // Create a span to hold task text
  const span = document.createElement("span");

  // Set span text to user input
  span.innerText = taskText;


  // When clicking the task text, toggle completed class
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });


  // Create delete button
  const deleteBtn = document.createElement("button");

  // Set button text
  deleteBtn.innerText = "X";

  // Make delete button red
  deleteBtn.style.background = "red";


  // When delete button is clicked, remove the task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });


  // Add span and delete button inside li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add li inside ul
  list.appendChild(li);

  // Clear input field after adding task
  input.value = "";
}