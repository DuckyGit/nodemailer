var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'duckygit@gmail.com',
    pass: 'pass567'
  }
});

var mailOptions = {
  from: 'duckygit@gmail.com',
  to: 'duckyhater@yahoo.com',
  subject: 'haha',
  text: 'you dont rule!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
