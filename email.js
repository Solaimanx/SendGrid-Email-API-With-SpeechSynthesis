if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const apitoken = process.env.API

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(apitoken);

const NumberOfEmailSent = 0;

const sendEmail = async (name,message) => {



const msg = {
    to:"small.talk.confidence@gmail.com",
    from:"small.talk.confidence@gmail.com",
    subject:`${name} - Small Talk sentences`,
    text: message,

};

await sgMail.send(msg, function (err, info) {
if (err) {
    console.log(`Email Not Sent Error Occured => ${err}`);
} else {
    console.log(`Email was Sent${NumberOfEmailSent}`);
    NumberOfEmailSent++;
}
});

};

console.log(apitoken);

module.exports = { sendEmail };