

import { categories } from "@/utils";
import CategoryList from "../components/CategoryList";

async function fetchServices(): Promise<[]> {
  const res = await fetch(
    // "http://localhost:1337/api/categories?populate=*"
    "https://rasajapan.onrender.com/api/categories?populate=*"
  );
  const data = await res.json();



  const services = data.data.filter((service) => service.type === "service");
  const softwares = data.data.filter(
    (service) => service.type === "software"
  );

  return {
    services,
    softwares,
  };

}

export default async function Home() {
  const data = await fetchServices();


  return (
    <div className="p-16 ">
      <h1 className="font-semibold opacity-75 text-3xl text-center mb-4">Browse all service listings</h1>
      <div className="grid grid-cols-2">
        {data.services.map((category, index) => (
          <CategoryList key={index} category={category} index={index} />
        ))}
      </div>

      <h1 className="font-semibold opacity-75 text-3xl text-center mt-12 mb-4">Browse all software listings</h1>
      <div className="grid grid-cols-2">
        {data.softwares.map((category, index) => (
          <CategoryList key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  );
}



// // Browse all service listings
// // api = /api/categories =
// const api = {
//   data: [
//     {
//       id: 4,
//       attributes: {
//         type: "service",
//         name: "Finance",
//         createdAt: "2024-06-25T16:31:04.913Z",
//         updatedAt: "2024-06-25T16:32:10.528Z",
//         publishedAt: "2024-06-25T16:31:06.948Z",
//         subcategories: {
//           data: [
//             {
//               id: 2,
//               attributes: {
//                 name: "Accounting",
//                 createdAt: "2024-06-25T16:31:19.294Z",
//                 updatedAt: "2024-06-25T16:31:20.063Z",
//                 publishedAt: "2024-06-25T16:31:20.061Z",
//               },
//             },
//             {
//               id: 3,
//               attributes: {
//                 name: "Payroll",
//                 createdAt: "2024-06-25T16:32:00.267Z",
//                 updatedAt: "2024-06-25T16:32:01.000Z",
//                 publishedAt: "2024-06-25T16:32:00.998Z",
//               },
//             },
//           ],
//         },
//       },
//     },
//   ],
// };

// const services = api.filter((service) => service.attributes.type === "service");
// const softwares = api.filter(
//   (service) => service.attributes.type === "software"
// );

// return {
//   services,
//   softwares,
// };

// // Browse all software listings


// home.tsx

// import React from 'react'

// export const Home = () => {
//   return (
//     <div>
//       <span>Browse all service listings</span>
//       {services.map((service) => (
//         <span key={service.id}>{service.attributes.name}</span>
//        {true && <ul>
//             {service.attributes.subcategories.data.map((subcategory) => (
//                 <li key={subcategory.id}>{subcategory.attributes.name}</li>
//             ))}
//         </ul>}
//       ))}

//       <span>Browse all software listings</span>
//       {softwares.map((software) => (
//         <span key={software.id}>{software.attributes.name}</span>
//       ))}
//     </div>
//   );
// }