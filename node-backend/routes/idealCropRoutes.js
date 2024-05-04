const express = require("express");
const router = express.Router();

const {
    postIdealCropData,
    getCropData
} = require("../controllers/flaskControllers");

router.post("/", postIdealCropData);   //send input to flask ML backend and get back ML output/predictions as response
// router.get("/", getLocustPrediction);   //get output from flask ML backend

router.get('/', getCropData)
module.exports = router;