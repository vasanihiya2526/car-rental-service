const Sidebar = ({admin=false})=>{
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
">
    <h1
    className="
    text-3xl
    font-bold
    text-green-600
    mb-10
    ">
    DriveEase
    </h1>
    <div className="space-y-5">
        <p>▦ Dashboard</p>
        {
        admin ?
        <>
        <p>🚗 Vehicles</p>
        <p>📅 Bookings</p>
        <p>👥 Users</p>
        <p>📊 Reports</p>
        </>
        :
        <>
        <p>📅 Bookings</p>
        <p>♡ Favorites</p>
        <p>⚙ Settings</p>
        </>
        }
    </div>
    <div className="mt-auto">
        <button
        className="
        bg-green-500
        text-white
        px-5
        py-3
        rounded-xl
        w-full
        ">
        + New Listing
        </button>
        <p className="mt-6">
        Logout
        </p>
    </div>
</div>
)}
export default Sidebar;