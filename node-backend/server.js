const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const path = require("path");
let bodyParser = require("body-parser");
const ejs = require("ejs");
const Nexmo = require("nexmo");
const socketio = require("socket.io");


const port = process.env.PORT || 5000;

const app = express();

const flaskFruitQualityRouter = require("./routes/fruitQualityRoutes");
const flaskLocustPredictionRouter = require("./routes/locustPredictionRoutes");
const flaskPlantDiseasesAndFertilisersRouter = require("./routes/plantDiseasesAndFertilisersRoutes");
const flaskIdealCropRouter = require("./routes/idealCropRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/mongo')

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/fruit-quality", [flaskFruitQualityRouter, errorHandler]);
app.use("/api/locust", [flaskLocustPredictionRouter, errorHandler]);
app.use("/api/plant-disease", [flaskPlantDiseasesAndFertilisersRouter, errorHandler]);
app.use("/api/ideal-crop", [flaskIdealCropRouter, errorHandler]);

//sms notif

//Template engine setup
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

//Public folder setup
app.use(express.static(__dirname + '/client'));

app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port, () => console.log("Server is listening on port " + port));
