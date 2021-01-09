require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 2000
const items = require('./routes/api/items');
const cors = require('cors')
const path = require('path')
const users = require('./routes/api/users');
const auth = require('./routes/api/auth')

app.use(express.json(), cors());
app.use('/api/items', items);
app.use('/api/users', users)
app.use('/api/auth', auth)



//db 
const db = process.env.URL ;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err))


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
