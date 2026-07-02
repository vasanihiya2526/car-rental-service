const FilterSidebar = () => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        p-5
        sm:p-6
        w-full
      "
    >
      {/* Heading */}
      <h3
        className="
          font-bold
          text-sm
        "
      >
        SEARCH FLEET
      </h3>

      {/* Brand */}
      <h3
        className="
          font-bold
          mt-6
        "
      >
        BRAND
      </h3>

      <div
        className="
          space-y-3
          mt-4
          text-gray-600
        "
      >
        <label className="flex gap-2 items-center">
          <input type="radio" name="brand" />
          Mercedes-Benz
        </label>

        <label className="flex gap-2 items-center text-green-600">
          <input type="radio" name="brand" />
          Porsche
        </label>

        <label className="flex gap-2 items-center">
          <input type="radio" name="brand" />
          Tesla
        </label>

        <label className="flex gap-2 items-center">
          <input type="radio" name="brand" />
          BMW
        </label>
      </div>

      {/* Price Range */}
      <h3 className="font-bold mt-8">
        PRICE RANGE
      </h3>

      <input
        type="range"
        className="
          w-full
          mt-5
          accent-green-500
        "
      />

      <div
        className="
          flex
          justify-between
          text-sm
          text-gray-500
        "
      >
        <span>$30k</span>
        <span>$500k+</span>
      </div>

      {/* Fuel Type */}
      <h3 className="font-bold mt-8">
        FUEL TYPE
      </h3>

      <div
        className="
          flex
          flex-wrap
          gap-3
          mt-3
        "
      >
        <button
          className="
            border
            rounded-full
            px-4
            py-2
            hover:bg-gray-100
          "
        >
          Electric
        </button>

        <button
          className="
            border
            rounded-full
            px-4
            py-2
            text-green-600
            border-green-500
          "
        >
          Hybrid
        </button>
      </div>

      {/* Seats */}
      <h3 className="font-bold mt-8">
        SEATS
      </h3>

      <div
        className="
          flex
          flex-wrap
          gap-2
          mt-3
        "
      >
        <button className="border px-4 py-2 rounded">
          2
        </button>

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          4
        </button>

        <button className="border px-4 py-2 rounded">
          5
        </button>

        <button className="border px-4 py-2 rounded">
          7+
        </button>
      </div>

      {/* Apply Filters */}
      <button
        className="
          bg-green-500
          text-white
          w-full
          mt-8
          py-3
          rounded-lg
          hover:bg-green-600
        "
      >
        APPLY FILTERS
      </button>

      {/* Clear All */}
      <p
        className="
          text-center
          mt-6
          underline
          text-sm
          cursor-pointer
          text-gray-500
        "
      >
        Clear All
      </p>
    </div>
  );
};

export default FilterSidebar;