const express = require("express");
const router = express.Router();

const {
    postLocustData,
    // getLocustPrediction,
} = require("../controllers/flaskControllers");

router.post("/", postLocustData);   //send input to flask ML backend and get back ML output/predictions as response
// router.get("/", getLocustPrediction);   //get output from flask ML backend

module.exports = router;