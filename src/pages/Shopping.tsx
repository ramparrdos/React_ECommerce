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

const Shopping = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data: Product[]) => {setProducts(data)});
    }, []);

    const categories = Array.from(new Set(products.map((pro) => pro.category)));
    const filterProducts = products.filter((product) => {
        const matchQuery = product.title.toLowerCase().includes(query.toLowerCase());
        const matchCategory = category === "" || product.category === category;
        return matchQuery && matchCategory;
    });

    return (
        <>
        <Navbar/>
        <div className="px-20 py-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Shopping</h1>

        <div className="grid grid-cols-4 gap-10">
            <div className="flex flex-col space-y-4">
                <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} className="bg-white px-5 py-2 shadow-md rounded-lg"/>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-white px-4 py-2 shadow-md rounded-lg">
                <option value="">All Categories</option>
                    {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
                </select>
            </div>

            <div className="col-span-3 grid grid-cols-3 gap-10">
                {filterProducts.map((product) => (
                <div key={product.id} className="h-128 flex flex-col justify-between bg-white text-gray-900 shadow-lg rounded-2xl p-8 hover:bg-gray-900 hover:text-white transition duration-300">
                    <img src={product.image} className="w-full h-40 mb-8 object-contain"/>
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <h3 className="mb-4 line-clamp-3 w-full overflow-hidden">{product.description}</h3>
                    <h3 className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</h3>
                </div>
                ))}
            </div>
        </div>
        </div>
        </>
    );
}

export default Shopping;