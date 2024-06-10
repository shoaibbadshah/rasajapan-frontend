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
  const res = await fetch('https://renowned-chickens-d24d0f4a85.strapiapp.com/api/products?populate=*');
  const data = await res.json();
  console.log('my data ======', data);

  return {
    props: {
      services: data.data,
    },
  };
}


// import Head from 'next/head';
// import Sidebar from '../components/Sidebar';
// import Card from '../components/Card';

// export default function Home({ services }) {
//   return (
//     <div className="flex m-24">
//       <Head>
//         <title>Machine Learning Services | Design Clone</title>
//         <meta name="description" content="Find and compare the best machine learning services." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Sidebar />

//       <main className="flex-grow p-4">
//         {services.map((service) => (
//           <Card key={service.id} service={service.attributes} />
//         ))}
//       </main>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:1337/api/products?populate=*');
//   const data = await res.json();
//   console.log('my data ======', data)

//   return {
//     props: {
//       services: data.data,
//     },
//   };
// }


