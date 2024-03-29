const express = require('express')
const bodyparser = require("body-parser");
const nodemailer = require('nodemailer');
const app = express();


app.use(express.static("assets"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){

    const comm = req.body.message;
    const na = req.body.username;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ankursaxena2002@gmail.com',
          pass: 'indt jbii vgco cayt' 
        }
      });

      var mailOptions = {
        from: 'ankursaxena2002@gmail.com',
        to: req.body.usermail,
        subject: 'Thanks for Contacting us ' + na,
        text: 'Thanks for your message you have sent to us :-' + comm
      };


      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log("sent");
          res.redirect("/");
        }
      });
      
      
    });



app.listen(3000, function() {
    console.log("server started at 3000");
});