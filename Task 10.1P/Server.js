const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser")
const https = require("https")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(express.json());

app.post('/signup' , (req,res)=>{
    console.log(req.body)
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: req.body.email, 
    from: 'cameronhum@hotmail.com', 
    subject: 'Welcome to our Daily Insider!',
    text: 'We welcome you to our daily newsletter thank you for subscribing',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/script.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/script.js'));
});
app.get('/css/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/css/style.css'));
});

app.listen(2000, () => console.log("Server is running on port 2000"));

