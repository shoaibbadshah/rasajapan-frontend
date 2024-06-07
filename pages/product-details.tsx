import Head from 'next/head';
import ProductDetailsCard from '@/components/ProductDetailsCard';


export default function ProductDetails() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Product Details</title>
      </Head>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <ProductDetailsCard />
      </div>
    </div>
  );
}
