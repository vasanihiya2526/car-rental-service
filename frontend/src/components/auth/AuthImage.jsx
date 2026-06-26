import car from "../../assets/images/login-car.jpg";

const AuthImage = () => {
return (
<div
className="
hidden
lg:flex
w-1/2
relative
h-screen
">
    <img
    src={car}
    className="
    absolute
    w-full
    h-full
    object-cover
    "
    alt="car"/>
    <div
    className="
    absolute
    inset-0
    bg-black/60
    "/>
        <div
        className="
        relative
        z-10
        text-white
        p-14
        flex
        flex-col
        justify-between
        w-full
        ">
            <h1
            className="
            text-3xl
            font-bold
            ">
            🚘 DRIVEEASE
            </h1>
            <div>
                <p
                className="
                text-green-400
                tracking-[5px]
                font-semibold
                ">
                REDEFINING MOBILITY
                </p>
                <h2
                className="
                text-2xl
                font-bold
                mt-5
                max-w-md
                ">
                Experience the precision of high-end automotive engineering at your fingertips.
                </h2>
            </div>
        </div>
</div>
)}
export default AuthImage;