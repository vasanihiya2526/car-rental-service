import {Link} from "react-router-dom";


const Navbar = () => {


const user = localStorage.getItem("user");



return (

<nav className="w-full bg-white px-4 sm:px-6 md:px-10 py-4">


<div className="
flex 
flex-col 
md:flex-row 
items-center 
justify-between 
gap-4
">


{/* Logo */}

<Link to="/">

<h1 className="text-xl font-bold">

🚘 Drive
<span className="text-green-500">
Ease
</span>

</h1>

</Link>



{/* Menu */}

<div className="
flex 
flex-wrap 
justify-center 
gap-4 
md:gap-8
text-sm
">


<Link to="/">
Home
</Link>


<Link to="/cars">
Cars
</Link>


<Link to="/about">
About
</Link>


<Link to="/contact">
Contact
</Link>



{
user &&

<Link to="/dashboard">

Dashboard

</Link>

}


</div>




{/* Buttons */}


<div className="flex gap-3">


{

!user ?

<>

<Link to="/login">

<button>

Login

</button>

</Link>



<Link to="/register">

<button
className="
bg-green-500
px-5
py-2
rounded-lg
text-white
">

Register

</button>

</Link>


</>


:


<Link to="/dashboard">

<button
className="
bg-green-500
px-5
py-2
rounded-lg
text-white
">
Dashboard
</button>
</Link>
}
</div>
</div>
</nav>
)}
export default Navbar;