require ('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({

   host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },

});

// module.exports={
    const sendEmail = async(message,receipient) =>{

        const mailOptions = { 
            from : process.env.EMAIL_USER,
            to : receipient,
            subject : 'Email from Node.js',
            text : message,
            html : `<h1>${message}</h1>`
        };
    let results = await transporter.sendMail(mailOptions);
    console.log(results);
        return results;
    }
// }


const express = require('express');
const app = express();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
app.get('/send-email', async (req, res) => {
  try {
    const message = 'Hello';
    const recipient = 'gemkagwa@gmail.com';
    let reres = await sendEmail(message, recipient);
    res.send(reres);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});



app.get("/", (req, res) => {
    res.send("Hello World from the server side");
  });
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
