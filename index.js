const express = require("express")
const Recaptcha = require('express-recaptcha').RecaptchaV3

const app = express()

const RECAPTCHA_SECRET_KEY = "thisisrecaptchasecretkey"

const recaptcha = new Recaptcha('your_recaptcha_site_key_here', RECAPTCHA_SECRET_KEY);

app.post('/login', recaptcha.middleware.verify, (req, res) => {
    if (!req.recaptcha.error) {
      // ReCAPTCHA verification successful
      // Perform login authentication here
      res.json({ success: true });
    } else {
      // ReCAPTCHA verification failed
      res.json({ success: false, error: 'Please complete the reCAPTCHA to login.' });
    }
  });
  

app.listen(3000,()=>{
    console.log(`server started`);
})