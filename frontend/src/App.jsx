import {Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

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
    <Route 
    path="/"
    element={<Home/>}
    />
    <Route
    path="/cars"
    element={<Cars/>}
    />
    <Route
    path="/car/:id"
    element={<CarDetails/>}
    />
    <Route
    path="/booking/:id"
    element={
    <ProtectedRoute>
    <Booking/>
    </ProtectedRoute>
    }/>
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
    }/>
</Routes>
<Footer/>
</>
)}
export default App;