const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const { connectPG } = require('./config/db.postgresql')

const app = express();
app.use(express.json());
app.use(cors());


(async ()=> {

    await connectPG();

    const PORT = process.env.PORT || 4000;
    
    app.listen(PORT, () => {
        console.log("Estoy Arriba Compa!")
    })

})();

