const express = require('express');
const app = express();
const port = 3000;

//set view engine ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Get from home.ejs
app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port);