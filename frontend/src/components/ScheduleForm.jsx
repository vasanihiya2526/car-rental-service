const ScheduleForm = ()=>{
return(
<div className="bg-white border rounded-2xl p-6">
    <h2 className="text-xl font-bold text-blue-900 mb-6">
    📅 Schedule
    </h2>
    <div className="
    grid
    grid-cols-1
    md:grid-cols-2
    gap-5
    ">
        <input
        type="date"
        className="input"/>
        <input
        type="date"
        className="input"/>
    </div>
</div>
)}
export default ScheduleForm;