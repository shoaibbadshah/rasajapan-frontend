import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

export default function Home({ services }) {
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
  const res = await fetch('http://localhost:1337/api/products?populate=*');
  const data = await res.json();
  console.log('my data ======', data)

  return {
    props: {
      services: data.data,
    },
  };
}




// import Head from "next/head";
// import Image from "next/image";

// export default function Home() {

//   // function ServiceCard({ title, description, imageUrl }) {
//   //   return (
//   //     <div className="bg-white rounded-lg shadow-md p-4">
//   //       <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
//   //       <h2 className="text-xl font-semibold mt-4">{title}</h2>
//   //       <p className="mt-2 text-gray-600">{description}</p>
//   //       <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
//   //     </div>
//   //   );
//   // }

//   function ServiceCard({ title, description, imageUrl }) {
//     return (
//       <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
//         <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
//         <div className="p-4">
//           <h2 className="text-xl font-semibold">{title}</h2>
//           <p className="mt-2 text-gray-600">{description}</p>
//           <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Learn More</button>
//         </div>
//       </div>
//     );
//   }
  

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div>
//         <Head>
//           <title>Machine Learning Services | Capterra Clone</title>
//           <meta name="description" content="Find and compare the best machine learning services." />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>

//         <header className="bg-blue-600 p-4 text-white">
//           <div className="container mx-auto">
//             <h1 className="text-2xl font-bold">Machine Learning Services</h1>
//             <p className="mt-2">Find and compare the best machine learning services.</p>
//           </div>
//         </header>

//         <main className="container mx-auto p-4">
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Service cards will go here */}
//             <ServiceCard
//               title="Service 1"
//               description="Description of service 1"
//               imageUrl="https://via.placeholder.com/150"
//             />
//             <ServiceCard
//               title="Service 2"
//               description="Description of service 2"
//               imageUrl="https://via.placeholder.com/150"
//             />
//             <ServiceCard
//               title="Service 3"
//               description="Description of service 3"
//               imageUrl="https://via.placeholder.com/150"
//             />
//           </section>
//         </main>
//       </div>
//     </main>
//   );
// }
