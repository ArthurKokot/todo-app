import { state } from "./state.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks, updateCounters } from "./ui.js";

const addBtn = document.querySelector("[data-add-btn]");
const input = document.querySelector("[data-task-input]");
const searchInput = document.querySelector("[data-search-input]");
const list = document.querySelector("[data-task-list]");
const template = document.querySelector("[data-task-template]");
const clearBtn = document.querySelector("[data-clear-btn]");

const allCount = document.querySelector("[data-all-count]");
const completedCount = document.querySelector("[data-completed-count]");
const activeCount = document.querySelector("[data-active-count]");

let searchValue = "";

// Render everything
function render() {
    renderTasks(list, template, searchValue);
    updateCounters(allCount, completedCount, activeCount);
    saveTasks();
}

// INIT
function init() {
    loadTasks();
    render();
}

init();

// ADD TASK
addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return;

    state.tasks.push({
        id: Date.now(),
        text: value,
        completed: false
    });

    input.value = "";
    render();
});

// ENTER add
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
});

// CLEAR ALL
clearBtn.addEventListener("click", () => {
    state.tasks = [];
    render();
});

// SEARCH
searchInput.addEventListener("input", (e) => {
    searchValue = e.target.value;
    render();
});

// EVENT DELEGATION (checkbox + delete)
list.addEventListener("click", (e) => {
    const taskEl = e.target.closest(".task");
    if (!taskEl) return;

    const taskId = Number(taskEl.dataset.id);
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;

    // DELETE
    if (e.target.closest("[data-delete-btn]")) {
        state.tasks = state.tasks.filter(t => t.id !== taskId);
        render();
        return;
    }

    // CHECKBOX
    if (e.target.matches("[data-task-checkbox]")) {
        task.completed = !task.completed;
        render();
    }
});