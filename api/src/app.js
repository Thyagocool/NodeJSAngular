const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const port = 3000;
const app = express();

app.use([cors(), express.json()]);

routes(app);



app.listen(port, () => console.log(`Server is running on port ${port}`));