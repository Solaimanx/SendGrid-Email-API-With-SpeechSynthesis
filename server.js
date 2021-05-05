if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

const port = process.env.PORT || '5000';

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

const email = require('./email')


app.get('/',function(req,res){
    res.send('Access Denied')
});


app.post('/api', async function(req, res){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    const alldata = req.body;
    const json = JSON.stringify(alldata);
    const message = json.split(',').join('\n');
    const name = alldata[0];

    // await email.sendEmail(name,message);

    console.log(name);
    console.log(message);
})





app.listen(port,()=>{
    console.log(`port listing to ${port}`);
})

