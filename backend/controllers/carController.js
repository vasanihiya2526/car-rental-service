const Car = require("../models/Car");
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
exports.getSingleCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if(!car){
            return res.status(404).json({
                message:"Car not found"
            });
        }
        res.status(200).json(car);
    } catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};
exports.addCar = async (req, res) => {
    try {
        let imagePaths = [];
        // check uploaded images
        if(req.files){
            req.files.forEach((file)=>{
                imagePaths.push(
                    "/" + file.path.replaceAll("\\","/")
                );
            });
        }
        const car = await Car.create({
            name:req.body.name,
            brand:req.body.brand,
            category:req.body.category,
            fuelType:req.body.fuelType,
            transmission:req.body.transmission,
            pricePerDay:req.body.pricePerDay,
            seats:req.body.seats,
            description:req.body.description,
            image:req.files.imagePaths
        });
        res.status(201).json({
            message:"Car added successfully",
            car
        });
    } catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};
exports.updateCar = async(req,res)=>{
    try{
        const car = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );
        if(!car){
            return res.status(404).json({
                message:"Car not found"
            });
        }
        res.status(200).json({
            message:"Car updated successfully",
            car
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};
exports.deleteCar = async(req,res)=>{
    try{
        const car = await Car.findByIdAndDelete(
            req.params.id
        );
        if(!car){
            return res.status(404).json({
                message:"Car not found"
            });
        }
        res.status(200).json({
            message:"Car Deleted"
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};