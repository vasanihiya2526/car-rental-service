import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

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
path="/dashboard"
element={<Dashboard/>}
/>
</Routes>
<Footer/>
</>
)
}
export default App;