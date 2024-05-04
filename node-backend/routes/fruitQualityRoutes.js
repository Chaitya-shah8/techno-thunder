const express = require("express");
const router = express.Router();

const {
    postFruitQualityData,
    // getfruitQualityDetection,
} = require("../controllers/flaskControllers");

router.post("/", postFruitQualityData);   //send input to flask ML backend and get back ML output/predictions as response
// router.get("/", getfruitQualityDetection);   //get output from flask ML backend

module.exports = router;