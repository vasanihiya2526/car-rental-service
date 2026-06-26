import StatCard from "./StatCard";

const AdminDashboardContent=()=>{
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
    title="Revenue"
    value="$124,592"/>
    <StatCard
    title="Active Rentals"
    value="84"/>
    <StatCard
    title="Users"
    value="1204"/>
</div>
<div
className="
bg-white
rounded-xl
mt-8
p-6
">
    <h2
    className="
    text-2xl
    font-bold
    ">
    Recent Bookings
    </h2>
    <table className="w-full mt-5">
    <tr>
    <th>
    Customer
    </th>
    <th>
    Car
    </th>
    <th>
    Status
    </th>
    </tr>
    <tr>
    <td>
    John
    </td>
    <td>
    BMW X7
    </td>
    <td>
    Active
    </td>
    </tr>
    </table>
</div>
</>
)}
export default AdminDashboardContent;