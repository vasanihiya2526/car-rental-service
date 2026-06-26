const Booking=require("../models/Booking");
const Car=require("../models/Car");
exports.createBooking=
async(req,res)=>{
try{
console.log("BODY:",req.body);
if(!req.body){
return res.status(400).json({
message:"Request body missing"
});
}
const car=
req.body.car;
const pickupDate=
req.body.pickupDate;
const returnDate=
req.body.returnDate;
if(
!car||
!pickupDate||
!returnDate
){
return res.status(400).json({
message:"All fields required"
});
}
const selectedCar=
await Car.findById(car);
if(!selectedCar){
return res.status(404).json({
message:"Car not found"
});
}
const days=
Math.ceil(
(
new Date(returnDate)
-
new Date(pickupDate)
)
/
(1000*60*60*24)
);
const total=
days*
selectedCar.pricePerDay;
const booking=
await Booking.create({
user:req.user.id,
car,
pickupDate,
returnDate,
totalAmount:total
});
res.status(201).json({
message:"Booking created",
booking
});
}
catch(error){
res.status(500).json({
message:error.message
});
}
};
exports.myBookings=
async(req,res)=>{
try{
const bookings=
await Booking.find({
user:req.user.id
})
.populate("car");
res.json(bookings);
}
catch(error){
res.status(500).json({
message:error.message
});
}
};
exports.cancelBooking=
async(req,res)=>{
try{
const booking=
await Booking.findByIdAndUpdate(
req.params.id,
{
status:"Cancelled"
},
{
new:true
}
);
if(!booking){
return res.status(404).json({
message:"Booking not found"
});
}
res.status(200).json({
message:"Booking Cancelled",
booking
});
}
catch(error){
res.status(500).json({
message:error.message
});
}
};