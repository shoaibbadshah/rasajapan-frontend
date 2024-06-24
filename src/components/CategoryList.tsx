import { useState } from 'react';
import DropdownIcon from './DropdownIcon';

const CategoryList = ({ category }) => {
    const [open, setOpen] = useState(true);
    const [openItems, setOpenItems] = useState({});

    const toggleCategory = (index) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="mb-4">
            <div className="text-center text-2xl cursor-pointer py-6 pt-12" onClick={() => setOpen(!open)}>
                {category.category}
            </div>
            {open && (
                <div className="mx-12 mt-2 grid grid-cols-2 ">
                    {category.items.map((item, index) => (
                        <div key={index} className='mx-4 bg-[#f7fafb]'>
                            <div className="text-xl px-6 py-3 cursor-pointer flex justify-between items-center" onClick={() => toggleCategory(index)}>
                                {item.title}
                                {item.subcategories.length > 0 && <DropdownIcon isOpen={openItems[index]} />}

                            </div>
                            {openItems[index] && item.subcategories.length > 0 && (
                                <div className="px-8 bg-white py-2">
                                    {item.subcategories.map((sub, subIndex) => (
                                        <div key={subIndex} className=" text-blue-500 cursor-pointer py-1">
                                            {sub}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryList;
