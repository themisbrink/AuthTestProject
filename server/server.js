const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const PORT = process.env.PORT || 3000;

const app = express();

var cors = require("cors");
app.use(cors({origin:true}));

app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}` );
})

app.get('/', (req,res) => {
    res.send("Hello from the Server!");
})