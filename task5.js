function addTask() {
  let todolist = document.querySelector(".todo");
  //  console.log(todolist);
  let tasks = [];
  todolist.onsubmit = function (e) {
    e.preventDefault();
    let element = e.target.elements;
    //  console.log(element);
    var taskValue = element["task"].value;
    //console.log(taskValue);
    tasks.push(taskValue);
    // console.log(tasks);
    printTasks(tasks);
  };
}
function printTasks(tasks) {
  let data = "";
  //console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    data += ` 
         <li class="task">
        <input type="checkbox" />
         ${tasks[i]}
      </li>`;
  }
  document.querySelector(".list").innerHTML = data;
}

function deleteTask() {
  let taskList = document.querySelector(".list");
  taskList.onchange = function (e) {
    if (e.target.type === "checkbox") {
      let taskItem = e.target.closest(".task");
      if (taskItem) {
        taskItem.classList.toggle("done");
      }
    }
  };
}

addTask();
deleteTask();
