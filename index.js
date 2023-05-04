// initialize the server
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

// use cors
app.use(cors());

// fetching data from json file
const chefs = require('./data/chefData.json');
const recipes = require('./data/recipeData.json');

// creating api
app.get('/', (req, res)=> {
    res.send('chef recipe hunter server')
})


app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})





// listening port
app.listen(port, ()=> {
    console.log('recipe hunter is runnig')
})