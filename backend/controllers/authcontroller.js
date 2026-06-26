const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

// REGISTER
exports.registerUser=async(req,res)=>{
try{
const {
name,
email,
password,
phone,
role
}=req.body;
const exist=await User.findOne({
email
});
if(exist){
return res.status(400).json({
success:false,
message:"User already exists"
});
}
const hashPassword=
await bcrypt.hash(
password,
10
);
const user=
await User.create({
name,
email,
password:hashPassword,
phone,
role:
role==="admin"
? "admin"
: "user"
});
res.status(201).json({
success:true,
message:
"Registration Successful",
user
});
}
catch(error){
res.status(500).json({
success:false,
message:error.message
});
}
};

// LOGIN
exports.loginUser=
async(req,res)=>{
try{
const {
email,
password
}=req.body;
const user=
await User.findOne({
email
});
if(!user){
return res.status(404).json({
success:false,
message:"User not found"
});
}
const match=
await bcrypt.compare(
password,
user.password
);
if(!match){
return res.status(401).json({
success:false,
message:"Invalid Password"
});
}
const token=
jwt.sign(
{
id:user._id,
role:user.role
},
process.env.JWT_SECRET,
{
expiresIn:"7d"
}
);
res.status(200).json({
success:true,
token,
user:{
id:user._id,
name:user.name,
email:user.email,
role:user.role
}
});
}
catch(error){
res.status(500).json({
success:false,
message:error.message
});
}
};


// PROFILE
exports.getProfile=
async(req,res)=>{
const user=
await User.findById(
req.user.id
);
res.json(user);
};