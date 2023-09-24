const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

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

function toggleTask(event) {
  const listItem = event.target;
  listItem.classList.toggle('checked');
}

const addButton = document.querySelector('button');
addButton.addEventListener('click', addTask);
inputBox.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
