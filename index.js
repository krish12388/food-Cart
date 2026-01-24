const express= require('express');
const dotenv= require('dotenv');
const mongoose= require('mongoose');
const path = require('path');
const connectDatabase= require('./middleware/databaseconnect');
const app= express();


//configuring dotenv
dotenv.config(path.resolve(__dirname, './.env'));

//handling json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
app.use(connectDatabase);

// Define a simple route
app.get('/', (req, res)=>{
    res.send('Welcome to the Foodcart Backend!');
});

const PORT= process.env.PORT || 5000;


app.listen(PORT, ()=>{
    console.log(`Server is running on port:  http://localhost:${PORT}`);
});
