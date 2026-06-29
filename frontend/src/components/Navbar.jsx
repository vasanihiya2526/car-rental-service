const Navbar = () => {
  return (
    <nav className="w-full bg-white px-4 sm:px-6 md:px-10 py-4">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          🚘 Drive<span className="text-green-500">Ease</span>
        </h1>

        {/* Menu */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
          <a href="/">Home</a>
          <a href="/cars">Cars</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full md:w-auto">

          <button className="flex-1 md:flex-none">
            Login
          </button>

          <button className="bg-green-500 px-5 py-2 rounded-lg text-white flex-1 md:flex-none">
            Register
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;