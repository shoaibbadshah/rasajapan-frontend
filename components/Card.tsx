const Card = ({ service }) => {
    const {
        name,
        description,
        rating,
        review_count,
        location,
        services_offered,
        Industries_served,
        project_cost,
        retainer,
    } = service;

    return (
        <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="p-6 ">
                <div className="flex justify-between">
                    <div className="flex">
                        <img src="https://via.placeholder.com/50" alt="Logo" className="w-20 h-20 rounded-md mr-4" />
                        <div >
                            <h3 className="text-xl font-bold text-blue-600">HDC</h3>
                            <div className="flex items-center">
                                <span className="text-yellow-500">
                                    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
                                </span>
                                <span className="ml-2 text-gray-500">{rating} ({review_count})</span>

                            </div>
                            <p className="text-gray-600">{location}</p>
                        </div>
                    </div>
                    <div>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">View Profile</button>
                    </div>

                </div>


                <p className="mt-2">{description[0]?.children[0]?.text}</p>

                <div className="flex justify-between">
                    <div className="mt-4 p-4">
                        <h4 className="font-semibold">Services Offered</h4>
                        <ul className="list-disc list-inside ml-4 px-4">
                            {services_offered.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                        <a href="#" className="text-blue-600 mt-2 inline-block">See All Services</a>
                    </div>

                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h4 className="font-semibold">Commonly Reviewed For</h4>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                                <h5 className="font-semibold">Industries Served</h5>
                                <ul className="list-disc list-inside ml-4">
                                    {Industries_served.map((industry, index) => (
                                        <li key={index}>{industry}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold">Project Cost</h5>
                                <p>{project_cost}</p>
                                <h5 className="font-semibold mt-2">Retainer</h5>
                                <p>{retainer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 rounded-b-lg p-3 pl-8 shadow-md">
                <button className="">Compare</button>
            </div>
        </div>
    );
};

export default Card;
