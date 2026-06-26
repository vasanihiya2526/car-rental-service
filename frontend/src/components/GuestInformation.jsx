const GuestInformation = () => {
return (
<div className="bg-white border rounded-2xl p-6">
    <h2 className="text-xl font-bold text-blue-900 mb-6">
    👤 Guest Information
    </h2>
    <div className="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    gap-5
    ">
        <input
        placeholder="Full Name"
        className="input"/>
        <input
        placeholder="Email Address"
        className="input"/>
        <input
        placeholder="Phone Number"
        className="input"/>
        <input
        placeholder="Driver License ID"
        className="input"/>
    </div>
</div>
)}
export default GuestInformation;