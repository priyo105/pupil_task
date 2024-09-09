const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");
const mongoose = require("mongoose");
const Pupils = require("./src/Route/Pupil.js");


app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("", Pupils);

//connecting to DB
const uri = process.env.CONNECTION_STRING;
mongoose
    .connect(uri)
    .then(() => console.log("connected to DB"))
    .catch((e) => console.log(e));

//listening to post
app.listen(5000, () => {
    console.log("Listening to PORT 5000");
});
