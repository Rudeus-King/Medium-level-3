const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskInput = input.value.trim();

    if (taskInput) {
        const li = document.createElement("li");
        li.textContent = taskInput;

        // Кнопка удаления задачи
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        input.value = "";
    }
}


