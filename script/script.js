let input = document.querySelector(".task-input");
let button = document.querySelector(".add-btn");
let list = document.querySelector(".task-list");

button.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText !== "") {
    let task = input.value;
    if (task !== "") {
      let newItem = document.createElement("li");
      newItem.textContent = task;
      list.appendChild(newItem);
      input.value = "";
    }
  }
});
