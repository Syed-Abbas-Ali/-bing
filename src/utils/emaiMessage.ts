import nodemailer from "nodemailer"

export let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'syedabbas83778@gmail.com',
      pass: 'kyfb uyzn soxz ofeo'
    }
  });
  
 
  
  export const sendMail=(mailOptions)=>{
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  }
