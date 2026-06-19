const express=require("express");
const router=express.Router();
const upload=require("../middleware/uploadMiddleware");
const auth=require("../middleware/authMiddleware");
const admin=require("../middleware/adminMiddleware");
const {addCar,getCars,getSingleCar,updateCar,deleteCar}=require("../controllers/carController");

// ADMIN
router.post("/add",auth,admin,upload.array("image",5),addCar);
router.put("/update/:id",auth,admin,updateCar);
router.delete("/delete/:id",auth,admin,deleteCar);

// PUBLIC
router.get("/",getCars);
router.get("/:id",getSingleCar);
module.exports=router;