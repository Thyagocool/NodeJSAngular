const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js')

const port = 3000;
const app = express();

routes(app);


app.use([cors(), express.json()]);

app.listen(port, () => console.log(`Server is running on port ${port}`));