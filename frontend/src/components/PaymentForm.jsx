const PaymentForm=()=>{
return(
<div className="bg-white border rounded-2xl p-6">
    <h2 className="text-xl font-bold text-blue-900 mb-6">
    🔒 Secure Payment
    </h2>
    <input
    placeholder="Card Number"
    className="input w-full mb-5"/>
    <div className="
    grid
    grid-cols-1
    md:grid-cols-2
    gap-5
    ">
        <input
        placeholder="MM/YY"
        className="input"/>
        <input
        placeholder="CVC"
        className="input"/>
    </div>
</div>
)}
export default PaymentForm;