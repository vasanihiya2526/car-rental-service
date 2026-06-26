const SocialLogin = () => {
return (
<div className="mt-8">
    <div className="flex items-center gap-4">
        <hr className="flex-1"/>
        <span className="text-gray-500 text-sm">
        OR CONTINUE WITH
        </span>
        <hr className="flex-1"/>
    </div>
    <div
    className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    mt-6
    ">
        <button
        className="
        border
        rounded-xl
        py-3
        ">
        🌐 Google
        </button>
        <button
        className="
        border
        rounded-xl
        py-3
        ">
        🔵 Facebook
        </button>
    </div>
</div>
)}
export default SocialLogin;