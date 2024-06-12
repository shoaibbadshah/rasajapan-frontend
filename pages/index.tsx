import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import { Service } from '@/utils/types';


interface HomeProps {
  services: Service[];
}

export default function Home({ services }: HomeProps) {
  return (
    <div className="flex m-24">
      <Head>
        <title>Machine Learning Services | Design Clone</title>
        <meta name="description" content="Find and compare the best machine learning services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className="flex-grow p-4">
        {services.map((service) => (
          <Card key={service.id} service={service.attributes} />
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // const res = await fetch('http://localhost:1337/api/products?populate=*');
  // const res = await fetch('https://renowned-chickens-d24d0f4a85.strapiapp.com/api/products?populate=*');
  // const res = await fetch('https://rasajapan.onrender.com/api/products?populate=*');

  const res = await fetch('https://rasajapan.onrender.com/api/products?populate=*'); //beta version five 
  const data = await res.json();
  console.log('my data ======', data);

  // const data = {
  //   "data": [
  //     {
  //       "id": 1,
  //       "attributes": {
  //         "description": [
  //           {
  //             "type": "paragraph",
  //             "children": [
  //               {
  //                 "type": "text",
  //                 "text": "Digital agency providing web development & marketing service"
  //               }
  //             ]
  //           }
  //         ],
  //         "createdAt": "2024-06-06T12:07:20.582Z",
  //         "updatedAt": "2024-06-06T12:07:22.428Z",
  //         "publishedAt": "2024-06-06T12:07:22.425Z",
  //         "name": "HDC",
  //         "rating": 4.5,
  //         "review_count": 26,
  //         "location": "Denver, CO",
  //         "services_offered": [
  //           "Artificial Intelligence",
  //           "Branding",
  //           "Custom Software Development"
  //         ],
  //         "Industries_served": [
  //           "Professional Services",
  //           "Retail, Consumer Goods & Services",
  //           "Arts & Entertainment"
  //         ],
  //         "project_cost": "$1K - $2.5K",
  //         "retainer": "$250 - $500",
  //         "image": {
  //           "data": {
  //             "id": 1,
  //             "attributes": {
  //               "name": "HDC.png",
  //               "alternativeText": null,
  //               "caption": null,
  //               "width": 998,
  //               "height": 973,
  //               "formats": {
  //                 "thumbnail": {
  //                   "name": "thumbnail_HDC.png",
  //                   "hash": "thumbnail_HDC_9588a2410f",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "path": null,
  //                   "width": 160,
  //                   "height": 156,
  //                   "size": 11.67,
  //                   "sizeInBytes": 11665,
  //                   "url": "/uploads/thumbnail_HDC_9588a2410f.png"
  //                 },
  //                 "small": {
  //                   "name": "small_HDC.png",
  //                   "hash": "small_HDC_9588a2410f",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "path": null,
  //                   "width": 500,
  //                   "height": 487,
  //                   "size": 46.22,
  //                   "sizeInBytes": 46217,
  //                   "url": "/uploads/small_HDC_9588a2410f.png"
  //                 },
  //                 "medium": {
  //                   "name": "medium_HDC.png",
  //                   "hash": "medium_HDC_9588a2410f",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "path": null,
  //                   "width": 750,
  //                   "height": 731,
  //                   "size": 96.81,
  //                   "sizeInBytes": 96806,
  //                   "url": "/uploads/medium_HDC_9588a2410f.png"
  //                 }
  //               },
  //               "hash": "HDC_9588a2410f",
  //               "ext": ".png",
  //               "mime": "image/png",
  //               "size": 10.02,
  //               "url": "/uploads/HDC_9588a2410f.png",
  //               "previewUrl": null,
  //               "provider": "local",
  //               "provider_metadata": null,
  //               "createdAt": "2024-06-06T12:04:16.428Z",
  //               "updatedAt": "2024-06-06T12:04:16.428Z"
  //             }
  //           }
  //         }
  //       }
  //     },
  //     {
  //       "id": 2,
  //       "attributes": {
  //         "description": [
  //           {
  //             "type": "paragraph",
  //             "children": [
  //               {
  //                 "type": "text",
  //                 "text": "Custom software, AR/VR, and mobile application developers"
  //               }
  //             ]
  //           },
  //           {
  //             "type": "paragraph",
  //             "children": [
  //               {
  //                 "type": "text",
  //                 "text": ""
  //               }
  //             ]
  //           }
  //         ],
  //         "createdAt": "2024-06-06T13:13:13.137Z",
  //         "updatedAt": "2024-06-06T13:13:14.119Z",
  //         "publishedAt": "2024-06-06T13:13:14.116Z",
  //         "name": "Saritasa",
  //         "rating": 2.4,
  //         "review_count": 20,
  //         "location": "Newport Beach, CA",
  //         "services_offered": [
  //           "Artificial Intelligence",
  //           "Custom Software Development",
  //           "IaaS"
  //         ],
  //         "Industries_served": [
  //           "IT & Software Development",
  //           "Education & Learning",
  //           "Health & Medicine"
  //         ],
  //         "project_cost": "$10K+",
  //         "retainer": "$5K+",
  //         "image": {
  //           "data": {
  //             "id": 2,
  //             "attributes": {
  //               "name": "saritasaImg.png",
  //               "alternativeText": null,
  //               "caption": null,
  //               "width": 1260,
  //               "height": 1080,
  //               "formats": {
  //                 "thumbnail": {
  //                   "name": "thumbnail_saritasaImg.png",
  //                   "hash": "thumbnail_saritasa_Img_775c479d36",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "path": null,
  //                   "width": 182,
  //                   "height": 156,
  //                   "size": 21.41,
  //                   "sizeInBytes": 21414,
  //                   "url": "/uploads/thumbnail_saritasa_Img_775c479d36.png"
  //                 },
  //                 "small": {
  //                   "name": "small_saritasaImg.png",
  //                   "hash": "small_saritasa_Img_775c479d36",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "path": null,
  //                   "width": 500,
  //                   "height": 429,
  //                   "size": 73.44,
  //                   "sizeInBytes": 73445,
  //                   "url": "/uploads/small_saritasa_Img_775c479d36.png"
  //                 },
  //                 "medium": {
  //                   "name": "medium_saritasaImg.png",
  //                   "hash": "medium_saritasa_Img_775c479d36",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "path": null,
  //                   "width": 750,
  //                   "height": 643,
  //                   "size": 136.84,
  //                   "sizeInBytes": 136837,
  //                   "url": "/uploads/medium_saritasa_Img_775c479d36.png"
  //                 },
  //                 "large": {
  //                   "name": "large_saritasaImg.png",
  //                   "hash": "large_saritasa_Img_775c479d36",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "path": null,
  //                   "width": 1000,
  //                   "height": 857,
  //                   "size": 220.24,
  //                   "sizeInBytes": 220243,
  //                   "url": "/uploads/large_saritasa_Img_775c479d36.png"
  //                 }
  //               },
  //               "hash": "saritasa_Img_775c479d36",
  //               "ext": ".png",
  //               "mime": "image/png",
  //               "size": 46.58,
  //               "url": "/uploads/saritasa_Img_775c479d36.png",
  //               "previewUrl": null,
  //               "provider": "local",
  //               "provider_metadata": null,
  //               "createdAt": "2024-06-06T13:11:05.574Z",
  //               "updatedAt": "2024-06-06T13:11:05.574Z"
  //             }
  //           }
  //         }
  //       }
  //     }
  //   ],
  //   "meta": {
  //     "pagination": {
  //       "page": 1,
  //       "pageSize": 25,
  //       "pageCount": 1,
  //       "total": 2
  //     }
  //   }
  // }

  return {
    props: {
      services: data.data,
    },
  };
}

