var nodemailer = require('nodemailer');

// Add the Firebase products that you want to use

  const express = require('express')
  const bodyParser = require('body-parser')
    // var url = "mongodb://localhost:27017/";
    const PORT = process.env.PORT || 3000;
    const app = express();
  app.use(bodyParser.json());

    // app.use(cors());
  app.use(function (req, res, next) {
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });
  
  
   app.get('/',function(req,res)
   {
     
      res.send("Hello server");
   })

  





   



 




app.post('/underverification',function(req,res){
  var transporter = nodemailer.createTransport({
                 service: 'gmail',
                 auth: {
                     user: 'codellionemenu@gmail.com',
                     pass: 'alphabeta@delta'
                   },
                   tls: {
                     rejectUnauthorized: false
                 }
               });
               
               var mailOptions = {
                 from: 'maheshkunder24@gmail.com',
                 to: req.body.email,
                 subject: 'Payment Sucessfull',
                html:`<html>
                <head>
                    <title></title>
                </head>
                <body >
                    <table align="center" bgcolor=#059BE5 border="0" cellpadding="0"
                    cellspacing="0" width="100%" height="100%" >
                        <tbody >
                            <tr>
                                                <td align="center" valign="top" >
                                                    <table bgcolor="#FFFFFF" border="0"
                                                    cellpadding="0" cellspacing="0" style=
                                                    "overflow:hidden!important;border-radius:3px"
                                                    width="580">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <img src=
                                                                    "https://firebasestorage.googleapis.com/v0/b/teamkalm-29130.appspot.com/o/codelliontransblack.png?alt=media&token=20aa9369-48bb-4f8e-bf4c-60ae4f149c72"
                                                                    style="display: block;
                                                                    margin: 0 auto;width:40%;background-color: white;"
                                                                    
                                                                    
                                                                    ></a>
                                                                    <br>
                                                                    <br>
                                                                </td>
                                                                <br>
                                                                <br>
                                                                <br>
                                                                <br>
                                                                <br>
                
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center">
                                                                    <table width="85%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align=
                                                                                "center">
                                                                                    <h2 style=
                                                                                    "margin:0!important;font-family:'Open Sans',arial,sans-serif!important;font-size:28px!important;line-height:38px!important;font-weight:200!important;color:#252b33!important">
                                                                                    Payment Sucessfull</h2>
                                                                                </td>
                                                                            </tr>
                                                                          
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center">
                                                                    <table border="0"
                                                                    cellpadding="0"
                                                                    cellspacing="0" width=
                                                                    "78%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align=
                                                                                "center" style=
                                                                                "font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important">
                                                                                We will contact you shortly. Team Codellion</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" valign=
                                                                "top">
                                                                    <table border="0"
                                                                    cellpadding="0"
                                                                    cellspacing="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align=
                                                                                "center"
                                                                                valign="top">
                                                                                  
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                          
                                                     
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </body>
                </html>`
               };
               
               transporter.sendMail(mailOptions, function(error, info){
                 if (error) {
                   console.log(error);
                 } else {
                   console.log('Email sent: ' + info.response);
 
                   res.json({
                     email: "sent"
                   })
                 }
               });
         
   
  })
 
 



   
  
   app.listen(PORT,function()
   {
       console.log("sunn raha hu ")
   });
   