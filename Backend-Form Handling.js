const express = require('express');
const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Route to serve a simple form
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="username" placeholder="Enter your name" />
      <input type="password" name="password" placeholder="Enter your password" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { username, password } = req.body;
  res.send(`Received username: ${username}, password: ${password}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
