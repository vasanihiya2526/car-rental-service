require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes =
require("./routes/authRoutes");
const carsRoutes =
require("./routes/carRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/cars",
carsRoutes
);

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