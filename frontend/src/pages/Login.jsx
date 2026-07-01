import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

import AuthImage from "../components/auth/AuthImage";
import SocialLogin from "../components/auth/SocialLogin";

const Login = () => {

const navigate = useNavigate();

const [data, setData] = useState({
email: "",
password: "",
});

const handleLogin = async (e) => {

e.preventDefault();

try {

const res =
await API.post(
"/auth/login",
{
email: data.email,
password: data.password,
}
);

localStorage.setItem(
"token",
res.data.token
);

localStorage.setItem(
"user",
JSON.stringify(
res.data.user
)
);

navigate(
"/dashboard"
);

}
catch(err){

console.log(err);

alert(
err.response?.data?.message
||
"Login Failed"
);

}

};

return (

<div className="min-h-screen flex">

<AuthImage />

<div
className="
w-full
lg:w-1/2
flex
items-center
justify-center
px-6
"
>

<div
className="
max-w-md
w-full
"
>

<h1
className="
text-3xl
font-bold
"
>

Welcome Back

</h1>

<p
className="
text-gray-500
mt-3
"
>

Sign in to your premium mobility dashboard.

</p>

<form
onSubmit={handleLogin}
className="mt-10 space-y-8"
>

<input
type="email"
placeholder="Email"
value={data.email}
className="w-full border-b py-3"
onChange={(e)=>
setData({
...data,
email:e.target.value
})
}
/>

<input
type="password"
placeholder="Password"
value={data.password}
className="w-full border-b py-3"
onChange={(e)=>
setData({
...data,
password:e.target.value
})
}
/>

<button
type="submit"
className="
w-full
bg-green-500
text-white
py-4
rounded-xl
font-bold
"
>

LOGIN TO COCKPIT

</button>

</form>

<SocialLogin />

</div>

</div>

</div>

);

};

export default Login;