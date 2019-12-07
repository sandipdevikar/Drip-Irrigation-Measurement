const express = require("express");
const DripIrrigationtable = require("../../model/table");
const router=express.Router();

router.post("/",async (req,res)=>{
    const {nameOfCrop,wettedArea,cropFactor,panEvaporation,rowToRowSpacing,cropToCropSpacing,numberOfDrippersPerPlant,dripperDischarge,soilType}=req.body;
    try {
        let dripIrrigationtable = new DripIrrigationtable({
            nameOfCrop,wettedArea,cropFactor,panEvaporation,rowToRowSpacing,cropToCropSpacing,numberOfDrippersPerPlant,dripperDischarge,soilType
          })
          await dripIrrigationtable.save();
          res.json(dripIrrigationtable);
    } catch (error) {
        
    }
   
});

router.get("/",async(req,res)=>{

    try {
        const res1=await DripIrrigationtable.find();
       
        res.json(res1);
        
    } catch (err) {
     return res.status(400).json({msg:err.message});  
    }

}


);
router.get("/:nameOfCrop",async(req,res)=>{

    const {nameOfCrop}=req.params.nameOfCrop;
   
    try {
        const res1=await DripIrrigationtable.findOne({nameOfCrop:req.params.nameOfCrop});
       
        res.json(res1);
        
    } catch (err) {
     return res.status(400).json({msg:err.message});  
    }

}


);



module.exports=router;