const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to store tasks
let tasks = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Build a To-Do API', completed: false }
];
let nextId = 3;

// 1. GET - See all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// 2. POST - Add a new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Task title is required' });
  }

  const newTask = {
    id: nextId++,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 3. PUT - Mark a task as completed
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.completed = true;
  res.status(200).json({ message: 'Task marked as completed', task });
});

// 4. DELETE - Remove a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const initialLength = tasks.length;

  tasks = tasks.filter((t) => t.id !== taskId);

  if (tasks.length === initialLength) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.status(200).json({ message: `Task ${taskId} deleted successfully` });
});

app.listen(PORT, () => {
  console.log(`✅ To-Do API running at http://localhost:${PORT}`);
});