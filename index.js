// initialize the server
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

// use cors
app.use(cors());

// fetching data from json file

app.get('/', (req, res)=> {
    res.send('chef recipe hunter server')
})

app.listen(port, ()=> {
    console.log('recipe hunter is runnig')
})