// imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/Users.js');
const cors = require('cors');

// setup
app.use(express.json());
app.use(cors());

// mongoose
const USER = 'kanishk';
const PASS = 'hellocluster0';
const CSTR = 'cluster0';
const DBMS = 'db1';
const URL = `mongodb+srv://${USER}:${PASS}@${CSTR}.n1fz0in.mongodb.net/${DBMS}?retryWrites=true&w=majority`;
mongoose.connect(URL);

// data
app.get('/getUsers', (req, res) => {
    userModel.find({}, (e, result) => {
        if(e){
            res.json(e);
        }else{
            res.json(result);
        }
    });
});

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    res.json(user);
});

// server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running successfully on PORT:${PORT}`);
});