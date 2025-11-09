const express = require('express');
const app = express();

// Railway proporciona puerto en process.env.PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Railway!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
