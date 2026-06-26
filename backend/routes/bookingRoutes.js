const express=require("express");
const router=express.Router();
const {
createBooking,
myBookings,
cancelBooking
}=require("../controllers/bookingController");
const {
auth
}=require("../middleware/authMiddleware");
router.post(
"/book",
auth,
createBooking
);
router.get(
"/my-bookings",
auth,
myBookings
);
router.put(
"/cancel/:id",
auth,
cancelBooking
);
module.exports=router;