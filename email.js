if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const apitoken = process.env.API

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(apitoken);

const sendEmail = async (message) => {



const msg = {
    to:"solaiman321@gmail.com",
    from:"solaiman321@gmail.com",
    subject:"English test email ",
    text: message,

};

await sgMail.send(msg, function (err, info) {
if (err) {
    console.log(`Email Not Sent Error Occured => ${err}`);
} else {
    console.log("Email was Sent");
}
});

};

console.log(apitoken);

module.exports = { sendEmail };