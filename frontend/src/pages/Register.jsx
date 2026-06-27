import {useState} from "react";
import {useNavigate} from "react-router-dom";

import AuthImage from "../components/auth/AuthImage";
import SocialLogin from "../components/auth/SocialLogin";


const Register = () => {


const navigate = useNavigate();


const [user,setUser]=useState({

name:"",
email:"",
phone:"",
password:"",
role:"user"

});



const handleChange=(e)=>{

setUser({

...user,

[e.target.name]:e.target.value

})

}



const handleRegister=(e)=>{

e.preventDefault();


localStorage.setItem(
"user",
JSON.stringify(user)
);


navigate("/login");


}



return (

<div className="min-h-screen flex">


<AuthImage />



<div className="
w-full
lg:w-1/2
flex
items-center
justify-center
px-6
py-10
">


<div className="max-w-md w-full">


<h1 className="
text-3xl
font-bold
text-gray-900
">

Create Account

</h1>


<p className="text-gray-500 mt-3">

Join DriveEase and start your premium journey.

</p>



<form

onSubmit={handleRegister}

className="mt-8 space-y-6"

>



<div>

<label className="text-sm font-semibold">

FULL NAME

</label>

<input

name="name"

type="text"

placeholder="Johnathan Doe"

onChange={handleChange}

className="w-full border-b py-3 outline-none"

/>

</div>





<div>

<label className="text-sm font-semibold">

EMAIL ADDRESS

</label>


<input

name="email"

type="email"

placeholder="john@driveease.com"

onChange={handleChange}

className="w-full border-b py-3 outline-none"

/>


</div>





<div>


<label className="text-sm font-semibold">

PHONE NUMBER

</label>


<input

name="phone"

type="text"

placeholder="+91 9999999999"

onChange={handleChange}

className="w-full border-b py-3 outline-none"

/>


</div>






<div>


<label className="text-sm font-semibold">

PASSWORD

</label>


<input

name="password"

type="password"

placeholder="********"

onChange={handleChange}

className="w-full border-b py-3 outline-none"

/>


</div>






<div>


<label className="text-sm font-semibold">

ACCOUNT TYPE

</label>



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



</div>




<button

type="submit"

className="
w-full
bg-green-500
hover:bg-green-600
text-white
py-4
rounded-xl
font-bold
"

>

CREATE ACCOUNT

</button>




</form>




<SocialLogin />



</div>


</div>


</div>

)

}


export default Register;