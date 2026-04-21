import { state } from "./state.js";

// Render task list
export function renderTasks(list, template, search = "") {
    list.innerHTML = "";

    const filtered = state.tasks.filter(t =>
        t.text.toLowerCase().includes(search.toLowerCase())
    );

    if (filtered.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "Список задач пуст...";
        list.append(empty);
        return;
    }

    filtered.forEach(task => {
        const el = createTask(task, template);
        list.append(el);
    });
}

// Create single task element
function createTask(task, template) {
    const node = document.importNode(template.content, true);

    const li = node.querySelector(".task");

    li.dataset.id = task.id;

    const checkbox = node.querySelector("[data-task-checkbox]");
    const text = node.querySelector("[data-task-text]");

    text.textContent = task.text;
    checkbox.checked = task.completed;

    li.classList.toggle("completed", task.completed);

    return node;
}

// Update counters
export function updateCounters(all, completed, active) {
    all.textContent = state.tasks.length;
    completed.textContent = state.tasks.filter(t => t.completed).length;
    active.textContent = state.tasks.filter(t => !t.completed).length;
}