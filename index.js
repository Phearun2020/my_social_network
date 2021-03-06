const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const postRoutes = require('./routes/admin');
const port = 3000;

//set view engine ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(postRoutes);
mongoose.connect('mongodb+srv://user1:user1123@cluster0.vjtms.mongodb.net/Post?retryWrites=true&w=majority')
.then(result => {
    //console.log(result);
    console.log("Db is connected");
    app.listen(port);
  }).catch(err => {
    console.log(err);
  })
