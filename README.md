# Todo List App

A clean and responsive Todo List application built with vanilla JavaScript.  
It includes task management, search, counters, and localStorage persistence.

---

## 🚀 Live Demo
https://arthurkokot.github.io/todo-app//

---

## 📌 Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Live search/filter tasks
- Task counters:
  - Total tasks
  - Completed tasks
  - Active tasks
- Clear all tasks
- Persistent storage using `localStorage`
- Event delegation for efficient DOM handling
- Template-based rendering

---

## 🛠 Tech Stack

- HTML5
- CSS3 (modern UI, animations, transitions)
- Vanilla JavaScript (ES Modules)
- LocalStorage API

```

## 📁 Project Structure

JS/
├── app.js # Main logic (events, state updates)
├── ui.js # Rendering tasks & counters
├── storage.js # LocalStorage save/load logic
├── state.js # Global state management
index.html
style.css

```

## ⚙️ How It Works

- Tasks are stored in a global state object
- Every change updates UI and syncs with localStorage
- Rendering is handled through a template system
- Search filters tasks in real-time
- Event delegation handles checkbox and delete actions efficiently

---

## 🎯 Purpose of Project

This project was built to practice:

- DOM manipulation
- State management without frameworks
- Modular JavaScript architecture
- Working with localStorage
- Event delegation patterns

---

## 👨‍💻 Author

Arthur Kokot  
GitHub: https://github.com/ArthurKokot
