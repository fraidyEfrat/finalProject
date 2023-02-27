var nodemailer = require('nodemailer');
//💕💕💕💕
//🤷‍♂️
// https://support.google.com/mail/answer/185833?hl=iw

//'36214264632@mby.co.il'
var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD_MAIL
  }
});

var mailOptions = {
  from: process.env.USER_MAIL,
  to: '36214264632@mby.co.il, 36213528524@mby.co.il',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

var sendEmail=(UsersEmail,iduser_request, subject, request, response, date, status, iduser)=>{
  console.log(UsersEmail)

  mailOptions.subject=`A new request #${iduser_request} from ${iduser}`
  mailOptions.text=`${UsersEmail} ${subject}  ${request} ${response} ${date}`;
  mailOptions.to=UsersEmail.toString();
  console.log(UsersEmail.toString())

  transporter.sendMail(mailOptions, function(error, info){
  console.log("UsersEmail.toString()")
  if (error) {
    console.log(error);
    console.log(error);
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})}
;

// https://support.google.com/mail/answer/185833?hl=iw


module.exports=sendEmail