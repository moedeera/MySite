const express = require('express');

const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// app.get('/', (req, res) => {


// res.send('its working')

// })


if (process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        const index = path.join(__dirname, 'build', 'index.html');
        res.sendFile(index);
    
    })
}



const PORT = process.env.PORT || 7700;


app.listen(PORT, console.log('its running'));
