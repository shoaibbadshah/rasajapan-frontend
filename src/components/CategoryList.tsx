'use client';
import { useState } from 'react';
import DropdownIcon from './DropdownIcon';
import { useRouter, } from 'next/navigation';


const CategoryList = ({ category }) => {
    const [openItems, setOpenItems] = useState({});
    const router = useRouter();

    const handleSubcategoryClick = (subcategory) => {
        const formattedSubcategory = subcategory.toLowerCase().replace(/ /g, '-');
        const basePath = category.category === 'BROWSE ALL SERVICE CATEGORIES' ? 'services' : 'software';
        // router.push(`/${basePath}/${formattedSubcategory}`);
        router.push(`/${formattedSubcategory}`);
    };

    const toggleCategory = (index) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="mb-4">
            <div className="text-center text-2xl cursor-pointer py-6 pt-12" >
                {category.category}
            </div>

            <div className="mx-12 mt-2 grid grid-cols-2 ">
                {category.items.map((item, index) => (
                    <div key={index} className='mx-4 '>
                        <div className="bg-[#f7fafb] text-xl px-6 py-3 cursor-pointer flex justify-between items-center" onClick={() => toggleCategory(index)}>
                            {item.title}
                            {item.subcategories.length > 0 && <DropdownIcon isOpen={openItems[index]} />}

                        </div>
                        {openItems[index] && item.subcategories.length > 0 && (
                            <div className="px-8 bg-white py-2">
                                {item.subcategories.map((sub, subIndex) => (
                                    <div
                                        onClick={() => handleSubcategoryClick(sub)}
                                        key={subIndex} className=" text-blue-500 cursor-pointer py-1">
                                        {sub}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CategoryList;
