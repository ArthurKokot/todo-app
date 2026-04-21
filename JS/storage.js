import { state } from "./state.js";

const KEY = "taskList";

// Save tasks to localStorage
export function saveTasks() {
    localStorage.setItem(KEY, JSON.stringify(state.tasks));
}

// Load tasks from localStorage
export function loadTasks() {
    const saved = localStorage.getItem(KEY);
    if (!saved) return;

    state.tasks = JSON.parse(saved);
}