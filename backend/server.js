require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes =
require("./routes/authRoutes");
const carsRoutes =
require("./routes/carRoutes");
const bookingRoutes =
require("./routes/bookingRoutes");
const app = express();

// Middleware FIRST
app.use(cors());
app.use(express.json());

// Routes AFTER middleware
app.use(
"/api/auth",
authRoutes
);
app.use(
"/api/cars",
carsRoutes
);
app.use(
"/api/bookings",
bookingRoutes
);

// Test API
app.get("/",(req,res)=>{
res.json({
success:true,
message:"API Running"
});
});
const startServer=async()=>{
await connectDB();
app.listen(
process.env.PORT,
()=>{
console.log(
`Server running on ${process.env.PORT}`
);
}
);
};
startServer();