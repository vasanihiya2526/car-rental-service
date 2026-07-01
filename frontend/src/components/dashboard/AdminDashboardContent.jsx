import StatCard from "./StatCard";

const AdminDashboardContent = ({
bookings=[],
users=[],
revenue=0
})=>{

return(

<>

<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-5
"
>

<StatCard
title="Revenue"
value={`₹${revenue}`}
/>

<StatCard
title="Active Rentals"
value={bookings.length}
/>

<StatCard
title="Users"
value={users.length}
/>

</div>

<div
className="
bg-white
rounded-xl
mt-8
p-6
"
>

<h2
className="
text-2xl
font-bold
"
>

Recent Bookings

</h2>

<table className="w-full mt-5">

<thead>

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

</thead>

<tbody>

{

bookings.length===0

?

(

<tr>

<td
colSpan="3"
className="
text-center
py-10
"
>

No Bookings

</td>

</tr>

)

:

(

bookings
.slice(0,5)
.map((booking)=>(

<tr
key={
booking._id
}
>

<td>

{
booking.user?.name
||
"Unknown"
}

</td>

<td>

{
booking.car?.carName
||
"No Car"
}

</td>

<td>

{
booking.status
||
"Active"
}

</td>

</tr>

))

)

}

</tbody>

</table>

</div>

</>

)

}

export default AdminDashboardContent;