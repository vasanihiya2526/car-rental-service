import AuthImage from "../components/auth/AuthImage";
import SocialLogin from "../components/auth/SocialLogin";

const Login = () => {
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
            Welcome Back
            </h1>
            <p
            className="
            text-gray-500
            mt-3
            ">
            Sign in to your premium mobility dashboard.
            </p>
            <div className="mt-10 space-y-8">
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
                    className="
                    w-full
                    border-b
                    border-gray-300
                    py-3
                    outline-none
                    focus:border-green-500
                    "/>
                </div>
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
                    className="
                    w-full
                    border-b
                    border-gray-300
                    py-3
                    outline-none
                    focus:border-green-500
                    "/>
                </div>
                <div
                className="
                flex
                justify-between
                items-center
                ">
                    <label
                    className="
                    flex
                    gap-2
                    items-center
                    text-gray-600
                    ">
                    <input type="checkbox"/>
                    Remember me
                    </label>
                    <a
                    className="
                    text-green-500
                    font-semibold
                    ">
                    Forgot password?
                    </a>
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
                LOGIN TO COCKPIT
                </button>
            </div>
            <SocialLogin />
            <p
            className="
            text-center
            mt-8
            text-gray-500
            ">
            Don't have an account?
            <span
            className="
            text-green-500
            font-semibold
            ml-2
            ">
            Request Access
            </span>
            </p>
        </div>
    </div>
</div>
)}
export default Login;