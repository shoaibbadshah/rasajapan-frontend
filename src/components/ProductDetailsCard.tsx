const ProductDetailsCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">HDC</div>
                <div className="flex items-center mb-4">
                    <div className="text-yellow-500 mr-2">⭐️⭐️⭐️⭐️⭐️</div>
                    <span className="text-gray-600 text-sm">(26)</span>
                    <a href="#" className="text-blue-500 text-sm ml-auto">Write a Review!</a>
                </div>
                <div className="text-gray-700 text-base">
                    <div className="flex mb-2">
                        <div className="w-1/2">
                            <div className="text-gray-500 text-xs">Most Common Industry</div>
                            <div className="font-medium">Professional Services</div>
                            <div className="text-gray-500 text-xs">(3 reviewers | 21%)</div>
                        </div>
                        <div className="w-1/2">
                            <div className="text-gray-500 text-xs">Most Common Costs</div>
                            <div className="font-medium">$1K - $2.5K per project</div>
                            <div className="text-gray-500 text-xs">(5 reviewers | 19%)</div>
                        </div>
                    </div>
                    <a href="#" className="text-blue-500 text-sm">See all reported costs</a>
                </div>
            </div>
            <div className="px-6 py-4 bg-gray-100">
                <div className="text-gray-500 text-xs">Denver, CO</div>
                <div className="text-gray-500 text-xs">Founded 2009</div>
                <div className="text-gray-500 text-xs">11-50 Employees</div>
                <div className="text-gray-700 text-base">
                    Digital agency providing web development & marketing service. HDC offers custom web design and development services for both large organizations and entrepreneurs. Their services include web design and branding, WordPress development, eCommerce development, search engine optimization, page speed optimization, and digital...
                    <a href="#" className="text-blue-500 text-sm ml-2">Read More</a>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">Helpful Review</div>
                <div className="flex items-center mb-4">
                    <div className="text-gray-500 text-xs mr-2">Eric Klinefelter</div>
                    <span className="text-gray-500 text-xs">Vice President/Signal Marketing</span>
                </div>
                <div className="text-gray-700 text-base">
                    Signal Marketing has been working with Howard Development and Consulting on and off for 15 years now. Their knowled...
                    <a href="#" className="text-blue-500 text-sm ml-2">Read Full Review</a>
                </div>
                <a href="#" className="text-blue-500 text-sm">See all reviews (26)</a>
            </div>
        </div>
    );
};

export default ProductDetailsCard;
