import {useState} from "react";
import api from "../services/api";
function Register(){
const[user,setUser]=useState({});
const register=()=>{
api.post(
"/auth/register",
user
)
.then(()=>alert("Registered"))
}
return(
<div className="p-10">
<input
placeholder="Name"
onChange={
e=>setUser({
...user,
name:e.target.value
})
}
/>
<input
placeholder="Email"
onChange={
e=>setUser({
...user,
email:e.target.value
})
}
/>
<input
placeholder="Password"
onChange={
e=>setUser({
...user,
password:e.target.value
})
}
/>
<button onClick={register}>
Register
</button>
</div>
)
}
export default Register;