"use client"

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import { Service } from '@/types';
import { useParams } from 'next/navigation';

async function fetchServices(): Promise<Service[]> {
    const res = await fetch('https://rasajapan.onrender.com/api/products?populate=*');
    const data = await res.json();
    return data.data;
}

export default function Product() {
    const params = useParams();
    console.log("🚀 ~ Product ~ params:", params)
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchServices();
                console.log("🚀 ~ fetchData ~ data:", data)
                setServices(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex m-24">
            <Sidebar />
            <main className="flex-grow p-4">
                {services.map((service) => (
                    <Card key={service.id} service={service} />
                ))}
            </main>
        </div>
    );
}




// import Sidebar from '@/components/Sidebar';
// import Card from '@/components/Card';
// import { Service } from '@/types';
// import { useRouter } from 'next/router';




// async function fetchServices(): Promise<Service[]> {
//     const res = await fetch('https://rasajapan.onrender.com/api/products?populate=*'); //beta version five 
//     const data = await res.json();
//     return data.data;
// }

// export default async function Product() {

//     const router = useRouter();
//     const { category } = router.query;
//     const services = await fetchServices();

//     return (
//         <div className="flex m-24">
//             <Sidebar />
//             <main className="flex-grow p-4">
//                 {services.map((service) => (
//                     <Card key={service.id} service={service.attributes} />
//                 ))}
//             </main>
//         </div>
//     );
// }

