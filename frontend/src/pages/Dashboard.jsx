import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import UserDashboardContent 
from "../components/dashboard/UserDashboardContent";
import AdminDashboardContent 
from "../components/dashboard/AdminDashboardContent";

const Dashboard = ()=>{
const userRole = "admin";
return(
<div className="flex">
    <Sidebar admin={userRole==="admin"}/>
    <div
    className="
    flex-1
    bg-gray-50
    p-5
    md:p-10
    ">
        <DashboardNavbar />
        {
        userRole==="admin"
        ?
        <AdminDashboardContent/>
        :
        <UserDashboardContent/>
        }
    </div>
</div>
)}
export default Dashboard;