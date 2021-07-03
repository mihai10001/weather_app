const express = require('express');
const cors = require('cors')
const routes = require('./endpoints');

const app = express();
const port = 8123;

// Settings here
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Register routes/endpoints here
routes(app);

// Start app on port
app.listen(port, () => {  
    console.log('Hello world from ' + port);
});
