if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();

const schedule = require("node-schedule");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.NEWAPI);


const cors = require("cors");

var corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

app.use(cors(corsOptions));

const port = process.env.PORT || "5000";

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const email = require("./email");

app.get("/", function (req, res) {
  res.send("Access Denied");
});



app.get('/api/forgot-password/:rawemail',(req,res,next) => {

  const { rawemail } = req.params

  const currectTime = new Date().getTime() + 5 * 60 * 1000;
  const waiting = new Date(currectTime);


  schedule.scheduleJob(waiting, async function () {
    const email = rawemail;


    const msg = {
      to: email,
      from: " אריאל אפל (קונפידנס לימוד אנגלית) <info@english21days.co.il>",
      subject: `פרטי הגישה שלך `,

      html: `
    <table style="  direction:rtl ; text-align:right ; width:100%;border-spacing:0px;border-collapse:collapse;border-width:medium;border-style:none" role="presentation">
                                  <tbody>
                                    <tr>
                                      <td style="padding:0px;width:100%" width="100%" valign="top">
                                        <div>
                                          <div style="font-size:16px">
                                            <div>
                                              <div>הי!</div>
                                              <div><br>
                                                לאחרונה ביקשת לשנות
                                                סיסמא לחשבונך.<br>
                                                <br>
                                                במידה וכבר שינית את
                                                הסיסמא, <br>
                                                פשוט תיכנס מכאן עם המייל
                                                והסיסמא שיצרת:<br>
                                                <a href="https://www.english21days.co.il/course33523349" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.english21days.co.il/course33523349&amp;source=gmail&amp;ust=1636575999458000&amp;usg=AFQjCNEF7xl87vTFe_um9yW-jR9TvcS_Vg">https://www.english21days.co.<wbr>il/course33523349</a><br>
                                                (כדאי לשמור את הקישור
                                                הזה במועדפים שיהיה לך קל
                                                למצוא)<br>
                                                <br>
                                                במידה ועדיין לא שינית את
                                                הסיסמא,<br>
                                                ניתן לעשות זאת <a href="https://www.english21days.co.il/thank-you-basic-plankz1yvwq9" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.english21days.co.il/thank-you-basic-plankz1yvwq9&amp;source=gmail&amp;ust=1636575999458000&amp;usg=AFQjCNF3Ig2WYhHdQCSwVc63BWr3xE7OeA">מכאן</a>.<br>
                                              </div>
                                              <div><br>
                                              </div>
                                              <div><br>
                                                מאחל לך לימוד נעים
                                                ומהנה,<br>
                                                אריאל</div>
                                              <div>&nbsp;</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div><span>
                                            <table style="float:none;text-align:right;border-spacing:0px;border-collapse:collapse;border-width:medium;border-style:none" role="presentation" width="100%" align="right">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:0px 0px 0px 0px" align="right"> <img src="https://ci6.googleusercontent.com/proxy/NFq5F8FXTyJM6yeepc3Yca4Wo9kAasjJH5cknq06Iay5PluCdAi795i2M8R2oazXeMZqekoKLOcOkORHaj7eedPPJUVIvc4AolyJdgerYxFbZkcZwd6sCUmMn_MQ_n_r8mWa52APVI_YWSoXCWDyArOoQijTwf59yQ=s0-d-e1-ft#https://hostedimages-cdn.aweber-static.com/MTAyNTkyMA==/thumbnail/697ac1bb04e54e1f87d58b5e3a11c7b4.png" style="display:block;width:136px;height:150px;max-width:100%" alt="" width="136" height="150" class="CToWUd"> </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </span></div>
                                        <div>
                                          <div style="font-size:16px">
                                            <div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                              <div>&nbsp;</div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
    
    `,
    };


    await sgMail.send(msg, function (err, info) {
      if (err) {
        console.log(`Email Not Sent Error Occured => ${err}`);  
        console.log(email)
      } else {
        console.log(`Email was Sent`);
      }
    });

    





  })



console.log('complete')



  next()
  return res.sendStatus(200).json({message : 'success'})

})


app.post("/api", async function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type, Authorization,Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.send("Access Denied");

  const alldata = req.body;
  const json = JSON.stringify(alldata);
  const name = alldata[0];
  const message = json.split("ok").join(" \n").split(",").join("\n");

  await email.sendEmail(name, message);
  
  next();
});

app.listen(port, () => {
  console.log(`port listing to ${port}`);
});
