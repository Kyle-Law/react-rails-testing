const container = document.getElementById("container");
const url = "http://localhost:3001/todos";
const taskForm = document.getElementById("taskForm");

async function getTasks() {
  console.log("fetching task");
  container.innerHTML = "";
  const data = await fetch(url).then((data) => data.json());
  data.forEach((obj) => {
    const item = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.textContent = `${obj.id} ${obj.task}`;
    item.appendChild(taskTitle);
    container.appendChild(item);
  });
  console.log("task fetched");
}

// post body data
// const task = {
//   task: "Here is a task from script.js",
// };

// request options
// const options = {
//   method: "POST",
//   body: JSON.stringify(task),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// send POST request
function sendTasks(task) {
  console.log("sending task");
  fetch(url, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log("task sended");
}

function addTask(e) {
  e.preventDefault();
  console.log("adding task");
  const task = document.getElementById("task").value;
  const taskObj = { task };
  sendTasks(taskObj);
  task.value = "";
  getTasks();
  console.log("task added");
}

// Add Event Listeners
taskForm.addEventListener("submit", addTask);

// On Load
getTasks();
