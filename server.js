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

const json = (data)=>{
    return message = (JSON.stringify(data));
}

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


    console.log(alldata);
    res.send('Access Denied');

    //  await email.sendEmail(name,email,message);

})





app.listen(port,()=>{
    console.log(`port listing to ${port}`);
})

