const mongoose = require("mongoose");

const DripIrrigationtable = new mongoose.Schema({

nameOfCrop:{
    type:String
},
panEvaporation:[
    {
        pune:{
            type:Number
        },
        akola:{
            type:Number
        }
    }
],
wettedArea:{
    type:Number
},
cropFactor:{
    type:Number
},
rowToRowSpacing:[
    {
        values:{
            type:Number
        }
    }
],
cropToCropSpacing:[
    {
        values:{
            type:Number
        }
    }
],
numberOfDrippersPerPlant:[
    {
        values:{
            type:Number
        }
    }
],
dripperDischarge:[
    {
        values:{
            type:Number
        }
    }
],
soilType:[
    {
        soilTypes:{
            type:String
        }
    }
]



})

module.exports= DripIrrigationtable1 = mongoose.model('table',DripIrrigationtable)