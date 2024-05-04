const express = require("express");
const router = express.Router();

const {
    postPlantDiseasesAndFertilizersData,
    // getPlantDiseasesAndFertilizers
} = require("../controllers/flaskControllers");

router.post("/", postPlantDiseasesAndFertilizersData);   //send input to flask ML backend and get back ML output/predictions as response
// router.get("/", getPlantDiseasesAndFertilizers);   //get output from flask ML backend

module.exports = router;