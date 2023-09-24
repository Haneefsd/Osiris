// Get references to HTML elements
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Function to add a task
function addTask() {
  const taskText = inputBox.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    listItem.addEventListener('click', toggleTask);
    
    listContainer.appendChild(listItem);
    
    inputBox.value = '';
  }
}

// Function to toggle the status of a task (checked/unchecked)
function toggleTask(event) {
  const listItem = event.target;
  listItem.classList.toggle('checked');
}

// Event listener for the "Add" button
const addButton = document.querySelector('button');
addButton.addEventListener('click', addTask);

// Event listener for the Enter key
inputBox.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
