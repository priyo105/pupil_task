const express = require("express");
const app = express.Router();
const multer = require("multer")


const { Pupil } = require("../models/Pupil.js");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname)
    },
  })


  app.post("/pupil/v1/create", async (req, res) => {
    let pupil = new Pupil(req.body);
    await pupil
      .save()
      .then(() => {
        res.status(201).send({ message: " Pupil Created" });
      })
      .catch((e) => res.send(e));
  });

  app.get("/pupil/all", async (req, res) => {
    let pupil = await Pupil.find({}).catch((e) =>
      res.status(500).send(e)
    );
  
    if (pupil) {
      res.status(200).send(pupil);
    } else {
      res.status(404).send({ message: "No categories exists !" });
    }
  });
  
  module.exports = app;
