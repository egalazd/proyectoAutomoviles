const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const { connectPG } = require('./config/db.postgresql')
const User = require('./models/user');  
const Movie = require('./models/movie');  

const app = require('./app');

(async ()=> {

    await connectPG();

    const PORT = process.env.PORT || 4000;
    
    app.listen(PORT, () => {
        console.log("Estoy Arriba Compa!")
    })

})();

