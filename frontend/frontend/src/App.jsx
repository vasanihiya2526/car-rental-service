import {Routes,Route} from "react-router-dom";


import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";


function App(){


return(

<Routes>


<Route path="/" element={<Home/>}/>


<Route path="/cars" element={<Cars/>}/>


<Route 
path="/cars/:id"
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
path="/booking/:id"
element={<Booking/>}
/>


<Route 
path="/dashboard"
element={<Dashboard/>}
/>


</Routes>


)

}


export default App;