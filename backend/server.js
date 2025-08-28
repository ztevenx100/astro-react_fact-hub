const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const factRoutes = require('./routes/factRoutes');
const languageRoutes = require('./routes/languageRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', factRoutes);
app.use('/api', languageRoutes);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
