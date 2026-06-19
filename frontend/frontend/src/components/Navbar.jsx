import {Link} from "react-router-dom";
function Navbar(){
return(
<nav className="bg-black text-white p-4 flex justify-between">
<h1 className="text-xl font-bold">
Car Rental
</h1>
<div className="space-x-5">
<Link to="/">
Home
</Link>
<Link to="/cars">
Cars
</Link>
<Link to="/login">
Login
</Link>
<Link to="/register">
Register
</Link>
<Link to="/dashboard">
Dashboard
</Link>
</div>
</nav>
)
}
export default Navbar;