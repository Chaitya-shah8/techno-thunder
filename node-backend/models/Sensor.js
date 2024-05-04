const mongoose = require('mongoose')

const SensorDataSchema = mongoose.Schema({
    gasData: {
        type: Number
    },
    temperature: {
        type: Number
    },
    humidity: {
        type: Number
    },
    SoilMoisture: {
        type: Number
    },
    Rain: {
        type: Number
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('SensorData', SensorDataSchema)
