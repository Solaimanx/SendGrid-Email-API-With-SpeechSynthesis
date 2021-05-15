if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();

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
