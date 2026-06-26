import AuthImage from "../components/auth/AuthImage";
import SocialLogin from "../components/auth/SocialLogin";

const Register = () => {
return (
<div
className="
min-h-screen
flex
">
    <AuthImage />
    <div
    className="
    w-full
    lg:w-1/2
    flex
    items-center
    justify-center
    px-6
    py-10
    ">
        <div
        className="
        max-w-md
        w-full
        ">
            <h1
            className="
            text-3xl
            font-bold
            text-gray-900
            ">
            Create Account
            </h1>
            <p
            className="
            text-gray-500
            mt-3
            ">
            Join DriveEase and start your premium journey.
            </p>
            <div
            className="
            mt-8
            space-y-6
            ">

                {/* NAME */}
                <div>
                    <label
                    className="
                    text-sm
                    font-semibold
                    text-gray-600
                    ">
                    FULL NAME
                    </label>
                    <input
                    type="text"
                    placeholder="Johnathan Doe"
                    className="
                    w-full
                    border-b
                    border-gray-300
                    py-3
                    outline-none
                    focus:border-green-500
                    "/>
                </div>

                {/* EMAIL */}
                <div>
                    <label
                    className="
                    text-sm
                    font-semibold
                    text-gray-600
                    ">
                    EMAIL ADDRESS
                    </label>
                    <input
                    type="email"
                    placeholder="john@driveease.com"
                    className="
                    w-full
                    border-b
                    border-gray-300
                    py-3
                    outline-none
                    focus:border-green-500
                    "/>
                </div>

                {/* PHONE */}
                <div>
                    <label
                    className="
                    text-sm
                    font-semibold
                    text-gray-600
                    ">
                    PHONE NUMBER
                    </label>
                    <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    className="
                    w-full
                    border-b
                    border-gray-300
                    py-3
                    outline-none
                    focus:border-green-500
                    "/>
                </div>

                {/* PASSWORD */}
                <div>
                    <label
                    className="
                    text-sm
                    font-semibold
                    text-gray-600
                    ">
                    PASSWORD
                    </label>
                    <input
                    type="password"
                    placeholder="********"
                    className="
                    w-full
                    border-b
                    border-gray-300
                    py-3
                    outline-none
                    focus:border-green-500
                    "/>
                </div>

                {/* ROLE */}
                <div>
                    <label
                    className="
                    text-sm
                    font-semibold
                    text-gray-600
                    ">
                    ACCOUNT TYPE
                    </label>
                    <select
                    className="
                    w-full
                    border-b
                    border-gray-300
                    py-3
                    outline-none
                    ">
                    <option>
                    Customer
                    </option>
                    <option>
                    Admin
                    </option>
                    </select>
                </div>
                <button
                className="
                w-full
                bg-green-500
                hover:bg-green-600
                text-white
                py-4
                rounded-xl
                font-bold
                mt-5
                ">
                CREATE ACCOUNT
                </button>
            </div>
            <SocialLogin />
            <p
            className="
            text-center
            mt-8
            text-gray-500
            ">
            Already have an account?
            <span
            className="
            text-green-500
            font-semibold
            ml-2
            ">
            Login
            </span>
            </p>
        </div>
    </div>
</div>
)}
export default Register;