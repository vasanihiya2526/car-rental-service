const Car = require("../models/Car");
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json({
            success:true,
            cars});
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
    const {
      brand,
      carName,
      model,
      category,
      year,
      pricePerDay,
      fuelType,
      transmission,
      seats
    } = req.body;

    // uploaded images
    const images =
      req.files?.map((file) => file.filename) || [];

    const car = new Car({
      brand,
      carName,
      model,
      category,
      year,
      pricePerDay,
      fuelType,
      transmission,
      seats,
      image: images
    });

    await car.save();

    res.status(201).json({
      success: true,
      message: "Car added successfully",
      data: car
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
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