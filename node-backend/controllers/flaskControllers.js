const asyncHandler = require("express-async-handler");
const axios = require("axios");
const SensorData = require('../models/Sensor')
let mqttHandler = require("../mqtt/mqtt_handler");
const CameraData = require('../models/camera');
const dotenv = require("dotenv").config();

// let mqttClient = new mqttHandler();
// mqttClient.connect();

// @desc   send gas sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/fruit-quality
// @access   Public
const postFruitQualityData = asyncHandler(async (req, res) => {
    // const mqSensorData = req.body.mqSensorData;
    //const res = axios POST request to flask backend
    console.log(req.body)
});


// @desc   send image data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/locust
// @access   Public
const postLocustData = asyncHandler(async (req, res) => {
    const imageData = req.body.imageData;
    //const res = axios POST request to flask backend


});


// @desc   send gas sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/plant-disease
// @access   Public
const postPlantDiseasesAndFertilizersData = asyncHandler(async (req, res) => {
    const imageData = req.body.imageData;
    //const res = axios POST request to flask backend
});

urlp = 'https://7e42-2405-204-228-d152-4d89-2f8b-a9e6-5785.ngrok-free.app/recv';

const nexmo = new Nexmo({
    apiKey: `${process.env.API_KEY}`,
    apiSecret: `${process.env.API_SECRET}`
}, { debug: true });

// @desc   send dht sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/plant-disease
// @access   Public
const postIdealCropData = asyncHandler(async (req, res) => {
    console.log(req.body);
    if (req.body) {
        // let data = await SensorData.create({ temperature: req.body.temperature, humidity: req.body.humidity })
        // await data.save()
        // // console.log(temperature, humidity, gas, moisture, rain);
        // // mqttClient.sendMessage(req.body.temperature);
        // let data2 = {
        //     temp: req.body.temperature,
        //     humid: req.body.humidity,
        //     rainfall: 100
        // }
        const data3 = await SensorData.findById({ _id: '65ed5f1868814004ff21bae2' })
        // console.group(data3)
        const response = await axios.post(urlp, { temp: data3.temperature, humid: data3.humidity, rainfall: 100 })
        // res.send(response.data.prediction[0]);
        const number = "918108007792";
        const text = response.data.prediction[0]
        nexmo.message.sendSms(
            `${process.env.MY_NUMBER}`, number, text, { type: "unicode" },
            (err, responseData) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.dir(responseData);
                    //Get data from response generated by Nexmo servers
                    const data = {
                        id: responseData.messages[0]['message-id'],
                        number: responseData.messages[0]['to']
                    }

                    //Emit to client
                    io.emit("smsStatus", data);
                }
            }
        )
    }
    else {
        throw new Error("Please provide all fields!");
    }
    //const res = axios POST request to flask backend

});

const getCropData = asyncHandler(async (req, res) => {
    const last12Records = await SensorData.find().sort({ $natural: -1 }).limit(12);
    temperature = []
    humidity = []
    gas = []
    rain = []
    soil_moisture = []

    last12Records.map((obj) => temperature.push(obj.Temperature))
    last12Records.map((obj) => humidity.push(obj.Humidity))
    last12Records.map((obj) => gas.push(obj.gasData))
    last12Records.map((obj) => soil_moisture.push(obj.SoilMoisture))
    last12Records.map((obj) => rain.push(obj.Rain))

    console.log(temperature)
    console.log(humidity)
    console.log(gas)
    console.log(rain)
    console.log(soil_moisture)
});

//Connect to socket.io
const io = socketio(server);
io.on("connection", () => {
    console.log("Connected!");
    io.on("disconnect", () => {
        console.log("Disconnected!");
    });
});

module.exports = {
    postFruitQualityData,
    postLocustData,
    postPlantDiseasesAndFertilizersData,
    postIdealCropData,
    getCropData
}