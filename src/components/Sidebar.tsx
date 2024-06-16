const Sidebar = () => {
    return (
      <div className="w-64 p-4 border-r">
        <h2 className="text-lg font-bold">FILTERS:</h2>
        <div className="mt-4">
          <h3 className="text-md font-semibold">LOCATION</h3>
          <input
            type="text"
            placeholder="Search Locations"
            className="mt-2 w-full border p-2 rounded"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold">RATING</h3>
          <div className="flex flex-col space-y-2 mt-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="flex items-center">
                <input type="radio" name="rating" className="mr-2" />
                <span className="text-yellow-500">{'★'.repeat(star)}{'☆'.repeat(5 - star)}</span>
                <span className="ml-2">{star} & up</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  