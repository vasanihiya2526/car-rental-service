require("dotenv").config();
const carsRoutes = require("./routes/carRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const connectDB =require("./config/db");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cars", carsRoutes);
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.json({ success: true,
    message:"Car Rental Service API Running",
  });
});
const PORT =process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
