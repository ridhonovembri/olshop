const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const appRoutes = require("./routes/AppRoutes");
const bodyParser = require("body-parser");

let corsOption = {
  origin: "*",
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors(corsOption));
app.use(appRoutes);

require("dotenv").config();
let PORT = process.env.PORT;

let uri =
  "mongodb+srv://ridhonovembri:Admin1234@cluster0.dfqglms.mongodb.net/KulinerDb?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DB is connected and Server Running PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hi React Native! Hi MongoDB!");
});


