import {useNavigate} from "react-router-dom";

const DashboardNavbar = ()=>{
const navigate = useNavigate();
const user = 
JSON.parse(
localStorage.getItem("user")
);
const logout = ()=>{
localStorage.removeItem("user");
navigate("/login");
}
return(
<div
className="
flex
justify-between
items-center
mb-8
gap-5
">
    <div>
        <h1
        className="
        text-3xl
        font-bold
        ">
        Welcome back, {user?.name || "Director"}
        </h1>
        <p className="text-gray-500">
        Your fleet performance overview
        </p>
    </div>
    <div className="
    flex
    items-center
    gap-4
    ">
        <input
        placeholder="Search cars, bookings..."
        className="
        hidden
        md:block
        border
        rounded-xl
        px-5
        py-3
        "/>
        <button
        onClick={logout}
        className="
        bg-red-500
        text-white
        px-5
        py-3
        rounded-xl
        hover:bg-red-600
        "
        >
        Logout
        </button>
    </div>
</div>
)}
export default DashboardNavbar;