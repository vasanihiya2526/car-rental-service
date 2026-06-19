import Navbar from "../components/Navbar";
function Dashboard(){
return(
<>
<Navbar/>
<div className="p-10">
<h1 className="text-3xl">
My Dashboard
</h1>
<p>
You bookings will appear here
</p>
</div>
</>
)
}
export default Dashboard;