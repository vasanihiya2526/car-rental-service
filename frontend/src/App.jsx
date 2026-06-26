import {Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App(){
return(
<>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route 
path="/cars" 
element={<Cars/>}
/>
<Route
path="/car/:id"
element={<CarDetails/>}
/>
<Route
path="/login"
element={<Login/>}
/>
<Route
path="/register"
element={<Register/>}
/>
<Route
path="/user-dashboard"
element={<UserDashboard/>}
/>
<Route
path="/admin-dashboard"
element={<AdminDashboard/>}
/>
</Routes>
<Footer/>
</>
)}
export default App;
