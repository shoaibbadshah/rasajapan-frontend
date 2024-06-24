"use client"

// pages/index.js
import { categories } from '@/utils';
import CategoryList from '../components/CategoryList';


export default function Home() {
  return (
    <div className="p-8 ">
      {categories.map((category, index) => (
        <CategoryList key={index} category={category} />
      ))}
    </div>
  );
}



// import Sidebar from '@/components/Sidebar';
// import Card from '@/components/Card';
// import { Service } from '@/types';



// async function fetchServices(): Promise<Service[]> {
//   const res = await fetch('https://rasajapan.onrender.com/api/products?populate=*'); //beta version five 
//   const data = await res.json();
//   return data.data;
// }

// export default async function Home() {
//   const services = await fetchServices();

//   return (
//     <div className="flex m-24">
//       <Sidebar />
//       <main className="flex-grow p-4">
//         {services.map((service) => (
//           <Card key={service.id} service={service.attributes} />
//         ))}
//       </main>
//     </div>
//   );
// }

