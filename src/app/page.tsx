"use client"

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
