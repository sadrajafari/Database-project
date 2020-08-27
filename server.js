const mongoose = require('mongoose');
const Router   = require('./Routes/Router');
const express  = require('express');
const app      = express();

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to Database..."))
    .catch(err => console.log(err.message))


app.use(express.json())
app.use('/page/list', Router)

app.listen(3000, () => {
    console.log('Listenin on port 3000')
})
