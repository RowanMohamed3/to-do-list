
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const list = document.getElementById("list");
const error = document.getElementById("error");

addButton.addEventListener("click", function() {
    const taskName = taskInput.value;

    if (taskName === "") {
        error.textContent = "Enter a task";
        return;
    }

    const item = document.createElement("li");
    item.textContent = taskName + " ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        item.remove();
    });

    item.appendChild(deleteButton);
    list.appendChild(item);

    taskInput.value = "";
    error.textContent = "";
});
