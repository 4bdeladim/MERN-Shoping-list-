require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000
const items = require('./routes/api/items');



app.use(bodyParser.json());
app.use('/api/items', items);




//db 
const db = process.env.URL ;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err))




app.listen(PORT, () => console.log(`Server running on ${PORT}`))
