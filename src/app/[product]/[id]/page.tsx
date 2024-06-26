import ProductDetailsCard from "@/components/ProductDetailsCard";
import Head from "next/head";

export default function ProductDetails() {
  return (
    <div className="py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Product Details</title>
      </Head>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <ProductDetailsCard />
      </div>
    </div>
  );
}
