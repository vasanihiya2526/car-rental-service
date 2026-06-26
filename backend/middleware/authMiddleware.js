const jwt=require("jsonwebtoken");
exports.auth=(req,res,next)=>{
try{
const authHeader=
req.header("Authorization");
if(!authHeader){
return res.status(401).json({
message:"Token Missing"
});
}

// Remove Bearer
const token=
authHeader.startsWith("Bearer ")
? authHeader.split(" ")[1]
: authHeader;
const decoded=
jwt.verify(
token,
process.env.JWT_SECRET
);
req.user=decoded;
next();
}
catch(error){
return res.status(401).json({
message:"Invalid Token",
error:error.message
});
}
};