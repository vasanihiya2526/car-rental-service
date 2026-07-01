import {Routes,Route}
from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function App(){

return(

<>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/cars"
element={<Cars/>}
/>

<Route
path="/cars/:id"
element={<CarDetails/>}
/>

<Route
path="/booking/:id"
element={
<ProtectedRoute>
<Booking/>
</ProtectedRoute>
}
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
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

</Routes>


<Footer/>

</>

)

}

export default App;