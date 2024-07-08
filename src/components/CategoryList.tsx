
"use client";

import { useState } from "react";
import DropdownIcon from "./DropdownIcon";
import { useRouter } from "next/navigation";
import { CategoryListProps } from "@/types";

const CategoryList: React.FC<CategoryListProps> = ({ category, index }) => {
  console.log("🚀 ~ category:", category)
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const router = useRouter();

  const handleSubcategoryClick = (subcategory: string) => {
    const formattedSubcategory = subcategory.toLowerCase().replace(/ /g, "-");
    const basePath =
      category.category === "BROWSE ALL SERVICE CATEGORIES"
        ? "services"
        : "software";
    router.push(`/${formattedSubcategory}`);
    // router.push(`/${basePath}/${formattedSubcategory}`);
  };

  const toggleCategory = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (


    <div className="mx-12 mt-2 ">
      {/* {category.subcategories.map((item, index) => ( */}
      <div key={index} className="mx-4">
        <div
          className="bg-[#f7fafb] text-xl px-6 py-3 cursor-pointer flex justify-between items-center"
          onClick={() => toggleCategory(index)}
        >
          {category.name}
          {category.length > 0 && (
            <DropdownIcon isOpen={!!openItems[index]} />
          )}
        </div>
        {openItems[index] && category.subcategories?.length > 0 && (
          <div className="px-8 bg-white py-2">
            {category.subcategories.map((sub, subIndex) => (
              <div
                onClick={() => handleSubcategoryClick(sub.slug)}
                key={subIndex}
                className="text-blue-500 cursor-pointer py-1"
              >
                {sub.name}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default CategoryList;



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import DropdownIcon from "./DropdownIcon";

// interface Subcategory {
//   id: number;
//   documentId: string;
//   name: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   locale: string | null;
//   slug: string;
// }

// interface Category {
//   id: number;
//   documentId: string;
//   name: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   locale: string | null;
//   type: string;
//   subcategories: Subcategory[];
// }

// interface CategoryListProps {
//   category: Category;
// }

// const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const handleSubcategoryClick = (subcategory: Subcategory) => {
//     router.push(`/${subcategory.slug}`);
//   };

//   const toggleCategory = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <div className="mb-4">
//       <div
//         className="text-center text-2xl cursor-pointer py-6 pt-12"
//         onClick={toggleCategory}
//       >
//         {category.name}
//         {category.subcategories.length > 0 && (
//           <DropdownIcon isOpen={open} />
//         )}
//       </div>
//       {open && (
//         <div className="mx-12 mt-2 grid grid-cols-2">
//           {category.subcategories.map((subcategory, index) => (
//             <div key={index} className="mx-4">
//               <div
//                 className="bg-[#f7fafb] text-xl px-6 py-3 cursor-pointer"
//                 onClick={() => handleSubcategoryClick(subcategory)}
//               >
//                 {subcategory.name}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryList;