const express = require('express');
const app = express();
const PORT = 3000;

// JSON data read karne ke liye
app.use(express.json());

// Fake database
let users = [{ id: 1, name: "Ali", role: "admin" }];

// 1. GET /
app.get('/', (req, res) => {
  res.send('Hello from Decolabs Backend API!');
});

// 2. GET /users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// 3. POST /users
app.post('/users', (req, res) => {
  const { name, role } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = { id: users.length + 1, name: name, role: role || "user" };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});