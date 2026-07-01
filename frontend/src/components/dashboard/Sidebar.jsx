import {useNavigate} from "react-router-dom";

const Sidebar=({admin=false})=>{

const navigate=
useNavigate();

const logout=()=>{

localStorage.removeItem("user");

localStorage.removeItem("token");

navigate("/login");

};

return(

<div
className="
hidden
md:flex
w-64
min-h-screen
bg-gray-100
flex-col
p-6
"
>

<h1
className="
text-3xl
font-bold
text-green-600
mb-10
"
>

DriveEase

</h1>

<div className="space-y-5">

<p
className="cursor-pointer"
onClick={()=>
navigate("/dashboard")
}
>

▦ Dashboard

</p>

{

admin

?

<>

<p
className="cursor-pointer"
onClick={()=>
navigate("/cars")
}
>

🚗 Vehicles

</p>

<p
onClick={()=>
navigate(
"/dashboard/bookings"
)
}
className="cursor-pointer"
>

📅 Bookings

</p>

<p
className="cursor-pointer"
onClick={()=>
navigate("/dashboard/users")
}
>

👥 Users

</p>

<p
className="cursor-pointer"
onClick={()=>
navigate("/dashboard/reports")
}
>

📊 Reports

</p>

</>

:

<>

<p
className="cursor-pointer"
onClick={()=>
navigate("/dashboard")
}
>

📅 Bookings

</p>

<p>

♡ Favorites

</p>

<p>

⚙ Settings

</p>

</>

}

</div>

<div className="mt-auto">

{

admin

&&

<button
onClick={()=>
navigate(
"/dashboard/add-car"
)
}
className="
bg-green-500
text-white
px-5
py-3
rounded-xl
w-full
"
>

+ New Listing

</button>

}

<p
onClick={logout}
className="
mt-6
cursor-pointer
"
>

Logout

</p>

</div>

</div>

)

}

export default Sidebar;