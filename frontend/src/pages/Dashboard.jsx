import {
useEffect,
useState
}
from "react";

import API from "../services/api";

import Sidebar from "../components/dashboard/Sidebar";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import UserDashboardContent
from "../components/dashboard/UserDashboardContent";

import AdminDashboardContent
from "../components/dashboard/AdminDashboardContent";

const Dashboard=()=>{

const user=
JSON.parse(
localStorage.getItem("user")
);

const role=
user?.role;

const [data,setData]=
useState([]);

useEffect(()=>{

loadData();

},[]);

const loadData=
async()=>{

try{

if(role==="admin"){

const res=
await API.get(
"/admin/bookings"
);

setData(res.data);

}

else{

const res=
await API.get(
"/bookings/user"
);

setData(res.data);

}

}
catch(err){

console.log(err);

}

};

return(

<div className="flex">

<Sidebar
admin={
role==="admin"
}
/>

<div
className="
flex-1
bg-gray-50
p-10
"
>

<DashboardNavbar/>

{
role==="admin"

?

<AdminDashboardContent
data={data}
/>

:

<UserDashboardContent
data={data}
/>

}

</div>

</div>

)

}

export default Dashboard;