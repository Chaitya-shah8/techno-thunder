const asyncHandler = require("express-async-handler");
const axios = require("axios");
const SensorData = require('../models/Sensor')
let mqttHandler = require("../mqtt/mqtt_handler");
const CameraData = require('../models/camera')

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

urlp = 'https://7e42-2405-204-228-d152-4d89-2f8b-a9e6-5785.ngrok-free.app/recv'

// @desc   send dht sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/plant-disease
// @access   Public
const postIdealCropData = asyncHandler(async (req, res) => {
    console.log(req.body);
    if (req.body) {
        let data = await SensorData.create({ temperature: req.body.temperature, humidity: req.body.humidity })
        await data.save()
        // console.log(temperature, humidity, gas, moisture, rain);
        // mqttClient.sendMessage(req.body.temperature);
        let data2 = {
            temp: req.body.temperature,
            humid: req.body.humidity,
            rainfall: 100
        }
        // const response = await axios.post(urlp, data2)
        // res.send(response.data.prediction[0]);
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
})

module.exports = {
    postFruitQualityData,
    postLocustData,
    postPlantDiseasesAndFertilizersData,
    postIdealCropData,
    getCropData
}