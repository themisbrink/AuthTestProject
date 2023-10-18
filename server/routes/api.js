const express = require("express");
const User = require("../models/user");
const router = express.Router();

const mongoose = require("mongoose");
const user = require("../models/user");
const connectionString =
  "mongodb+srv://themisbrink:a21th21_A21@cluster0.f84fbis.mongodb.net/sample_mflix?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userdata = req.body;
  console.log(req.body);
  let user = new User(userdata);
  user
    .save() // moongoose save data to MongoDB
    .then((registeredUser) => res.status(200).send(registeredUser)) // Send new User as responce
    .catch((err) => console.log(err)); //  inCase of error
});

router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email })
    .then((returnedUser) => {
      if (!returnedUser) {
        res.status(401).send("Email not found!");
      } else if (returnedUser.password != userData.password) {
        res.status(401).send("Password is not correct!");
      } else {
        console.log(returnedUser);
        res.status(200).send(returnedUser);
      }
    })
    .catch((err) => console.log(err));
});

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "Lorem Ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "Lorem Ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "Lorem Ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "Lorem Ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "Lorem Ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Auto Expo",
      description: "Lorem Ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];

  res.json(events);
});

router.get("/special", (req, res) => {
    let events = [
      {
        _id: "1",
        name: "Auto Expo",
        description: "Lorem Ipsum",
        date: "2012-04-23T18:25:43.511Z",
      },
      {
        _id: "2",
        name: "Auto Expo",
        description: "Lorem Ipsum",
        date: "2012-04-23T18:25:43.511Z",
      },
      {
        _id: "3",
        name: "Auto Expo",
        description: "Lorem Ipsum",
        date: "2012-04-23T18:25:43.511Z",
      },
      {
        _id: "4",
        name: "Auto Expo",
        description: "Lorem Ipsum",
        date: "2012-04-23T18:25:43.511Z",
      },
      {
        _id: "5",
        name: "Auto Expo",
        description: "Lorem Ipsum",
        date: "2012-04-23T18:25:43.511Z",
      },
      {
        _id: "6",
        name: "Auto Expo",
        description: "Lorem Ipsum",
        date: "2012-04-23T18:25:43.511Z",
      },
    ];
  
    res.json(events);
  });

module.exports = router;
