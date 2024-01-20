import nodemailer from "nodemailer"
import validator from 'validator';
// asxh xpdx jvca ewuo

export let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.ADMIN_EMAIL,
      pass: process.env.PASS_AUTH
    }
  });
  
 
  
//   export const sendMail=async(mailOptions)=>{
//     console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
//     console.log(mailOptions)
//     await transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log("errorrrrrrrrrrrrrrrrrrrrrr")
//           console.log(error);
//         } else {
//           console.log('Email sentbb: ' + info.response);
//           return true
//         }
//       });
//   }

  export const sendMail = async (mailOptions) => {
    // Basic email address validation using validator
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    console.log(mailOptions)
    if (!Array.isArray(mailOptions.to)) {
        console.log('Invalid email addresses');
        return false;
    }
    if (!mailOptions.to.every(email => validator.isEmail(email))) {
      console.log('Invalid email addresses');
      return false;
  }
  
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error); // Reject the promise if there is an error
            } else {
                console.log('Email sentbb: ' + info.response);
                resolve(true); // Resolve the promise with true when the email is sent
            }
        });
    });
};




// export const sendMail = async (mailOptions) => {
//     console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
//     console.log(mailOptions);

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sentbb: ' + info.response);
//         return true;
//     } catch (error) {
//         console.log("errorrrrrrrrrrrrrrrrrrrrrr");
//         console.log(error);
//         return false;
//     }
// }

// Example usage with a timeout
const timeoutMillis = 5000; // 5 seconds
// const mailOptions = { /* your mail options */ };

export const sendMails=async(mailOptions)=>{
    
try {
    const result = await Promise.race([
        sendMail(mailOptions),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMillis))
    ]);


    console.log('Email sent:', result);
    return result
} catch (error) {
    console.error('Error:', error);
}
}
