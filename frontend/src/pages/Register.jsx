import {useState} from "react";
import {useNavigate} from "react-router-dom";

import API from "../services/api";

import AuthImage from "../components/auth/AuthImage";
import SocialLogin from "../components/auth/SocialLogin";

const Register=()=>{

const navigate=
useNavigate();

const [loading,setLoading]=
useState(false);

const [user,setUser]=
useState({
name:"",
email:"",
phone:"",
password:"",
role:"user"
});

const handleChange=(e)=>{

setUser({
...user,
[e.target.name]:
e.target.value
});

};

const handleRegister=
async(e)=>{

e.preventDefault();

try{

setLoading(true);

const res=
await API.post(
"/auth/register",
user
);

alert(
res.data.message
||
"Registered Successfully"
);

navigate("/login");

}
catch(err){

alert(
err.response?.data?.message
||
"Register Failed"
);

}
finally{

setLoading(false);

}

};

return(

<div className="min-h-screen flex">

<AuthImage/>

<div
className="
w-full
lg:w-1/2
flex
justify-center
items-center
p-6
"
>

<div className="max-w-md w-full">

<h1 className="text-3xl font-bold">

Create Account

</h1>

<form
onSubmit={handleRegister}
className="space-y-5 mt-8"
>

<input
name="name"
placeholder="Name"
onChange={handleChange}
className="w-full border-b py-3"
/>

<input
name="email"
type="email"
placeholder="Email"
onChange={handleChange}
className="w-full border-b py-3"
/>

<input
name="phone"
placeholder="Phone"
onChange={handleChange}
className="w-full border-b py-3"
/>

<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
className="w-full border-b py-3"
/>

<select
name="role"
onChange={handleChange}
className="w-full border-b py-3"
>

<option value="user">
Customer
</option>

<option value="admin">
Admin
</option>

</select>

<button
type="submit"
className="
w-full
bg-green-500
text-white
rounded-xl
py-4
"
>

{
loading
?
"Creating..."
:
"CREATE ACCOUNT"
}

</button>

</form>

<SocialLogin/>

</div>

</div>

</div>

)

}

export default Register;