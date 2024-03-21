const btnAdd = document.querySelector("#btnAdd");
const btnRemove = document.querySelector("#btnRemove");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#task");

btnAdd.onclick = (e) => {
  e.preventDefault();

  // Validate the task input
  if (taskInput.value.trim() === "") {
    alert("Please enter a task description.");
    return;
  }

  // Create a new task option
  const option = new Option(taskInput.value, taskInput.value);
  taskList.add(option, undefined);

  // Reset the task input
  taskInput.value = "";
  taskInput.focus();
};

btnRemove.onclick = (e) => {
  e.preventDefault();

  // Save the selected tasks
  let selectedTasks = [];

  for (let i = 0; i < taskList.options.length; i++) {
    selectedTasks[i] = taskList.options[i].selected;
  }

  // Remove selected tasks
  let index = taskList.options.length;
  while (index--) {
    if (selectedTasks[index]) {
      taskList.remove(index);
    }
  }
};
