const mongoose = require('mongoose')

const cameraSchema = mongoose.Schema({
    ImgData: {
        type: Buffer
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('CameraData', cameraSchema)