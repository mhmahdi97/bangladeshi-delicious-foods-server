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

// sending main server message
app.get('/', (req, res)=> {
    res.send('chef recipe hunter server')
})

// creating api for sending all chefs data 
app.get('/chefs', (req, res) => {
    res.send(chefs)
})

// creating api for sending all recipes data
app.get('/recipes', (req, res) => {
    res.send(recipes)
})

console.log(chefs)

// creating api for sending selected chef
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(chef => parseInt(chef.id) === id);
    res.send(selectedChef);
})

// creating api for sending selected chef's recipes data
app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChefsRecipes = recipes.filter(chefRecipes => parseInt(chefRecipes.chefId) === id);
    res.send(selectedChefsRecipes);
})





// listening port
app.listen(port, ()=> {
    console.log('recipe hunter is runnig')
})