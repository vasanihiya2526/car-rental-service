import StatCard from "./StatCard";

const UserDashboardContent=()=>{
return(
<>
<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-5
">
    <StatCard
    title="Total Trips"
    value="24"/>
    <StatCard
    title="Miles Driven"
    value="1402"/>
    <StatCard
    title="Loyalty Tier"
    value="Elite"/>
</div>
<div
className="
bg-white
rounded-xl
p-8
mt-8
">
    <h2
    className="
    text-2xl
    font-bold
    ">
    Active Rental
    </h2>
    <h1 className="text-3xl mt-5">
    Porsche Taycan Turbo S
    </h1>
    <button
    className="
    bg-green-500
    text-white
    px-5
    py-3
    rounded-xl
    mt-5
    ">
    Track Car
    </button>
</div>
</>
)}
export default UserDashboardContent;