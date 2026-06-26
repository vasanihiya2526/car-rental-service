const DashboardNavbar=()=>{
return(
<div
className="
flex
justify-between
items-center
mb-8
">
    <div>
        <h1
        className="
        text-3xl
        font-bold
        ">
        Welcome back, Director
        </h1>
        <p className="text-gray-500">
        Your fleet performance overview
        </p>
    </div>
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
</div>
)}
export default DashboardNavbar;