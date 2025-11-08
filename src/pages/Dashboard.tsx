import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data: Product[]) => {setProducts(data)});
    }, []);

    const categories = Array.from(new Set(products.map((pro) => pro.category)));
    const totalProducts = products.length;
    const totalCategories = categories.length;

    const prices = products.map(pro => pro.price);
    
    let sum = 0;
    for(const price of prices){
        sum += price;
    }
    const averagePrice = sum / prices.length;
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);   

    return (
    <>
      <Navbar />
      <div className="px-6 sm:px-10 lg:px-20 py-10 space-y-12 bg-gray-100 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Total Products</h2>
            <p className="text-2xl sm:text-3xl">{totalProducts}</p>
          </div>

          <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Total Categories</h2>
            <p className="text-2xl sm:text-3xl">{totalCategories}</p>
          </div>

          <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Average Price</h2>
            <p className="text-2xl sm:text-3xl">${averagePrice.toFixed(2)}</p>
          </div>

          <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Price Range</h2>
            <p className="text-2xl sm:text-3xl">
              ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Categories</h2>
          <ul className="text-lg sm: text-xl list-disc list-inside space-y-2">
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center sm:text-left">Product Previews</h2>
          <div className="flex flex-wrap gap-10 justify-start sm:justify-between">
            {products.map((product) => (
              <div key={product.id} className="w-64 h-80 text-gray-900 bg-white shadow-lg rounded-2xl w-50 p-6 flex flex-col items-center transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">
                <img src={product.image} className="w-40 h-40 object-contain mb-6"/>
                <p className="w-full line-clamp-2 text-center text-lg font-semibold mb-1">{product.title}</p>
                <p className="text-center text-lg">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
