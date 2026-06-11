import { useState } from "react";
import Sidebar from "../components/Sidebar";
import products from "../data/products";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

const categoryData = Object.entries(
  products.reduce((acc, product) => {
    acc[product.category] =
      (acc[product.category] || 0) + 1;
    return acc;
  }, {})
).map(([category, count]) => ({
  category,
  count,
}));

const topRatedProduct = products.reduce(
  (best, current) =>
    current.rating > best.rating ? current : best
);

const highestDiscountProduct = products.reduce(
  (best, current) =>
    current.discount > best.discount ? current : best
);

const mostExpensiveProduct = products.reduce(
  (best, current) =>
    current.price > best.price ? current : best
);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <div className="flex-1 p-10 overflow-auto max-w-7xl mx-auto w-full">

        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <p className="text-slate-400 mt-2 mb-8">
          Manage and analyze Puma products
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Products</p>
    <h2 className="text-4xl font-bold mt-2">
      {products.length}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Categories</p>
    <h2 className="text-4xl font-bold mt-2">
      {new Set(products.map(p => p.category)).size}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Avg Discount</p>
    <h2 className="text-4xl font-bold mt-2">
      {Math.round(
        products.reduce((sum,p)=>sum+p.discount,0) /
        products.length
      )}%
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Avg Rating</p>
    <h2 className="text-4xl font-bold mt-2">
      {(products.reduce((sum,p)=>sum+p.rating,0) /
      products.length).toFixed(1)}
    </h2>
  </div>

</div>

<div className="mt-8 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Product Categories
  </h2>

  <div className="h-80">

    <ResponsiveContainer width="100%" height="100%">

      <BarChart data={categoryData}>

        <XAxis dataKey="category" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="count"
          fill="#a855f7"
          radius={[8, 8, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>

<div className="grid md:grid-cols-3 gap-6 mt-8">

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <p className="text-slate-400 mb-2">
      Top Rated Product
    </p>

    <h3 className="text-xl font-bold">
      {topRatedProduct.name}
    </h3>

    <p className="text-yellow-400 mt-2">
      ⭐ {topRatedProduct.rating}
    </p>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <p className="text-slate-400 mb-2">
      Highest Discount
    </p>

    <h3 className="text-xl font-bold">
      {highestDiscountProduct.name}
    </h3>

    <p className="text-green-400 mt-2">
      {highestDiscountProduct.discount}%
    </p>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <p className="text-slate-400 mb-2">
      Most Expensive
    </p>

    <h3 className="text-xl font-bold">
      {mostExpensiveProduct.name}
    </h3>

    <p className="text-cyan-400 mt-2">
      ₹{mostExpensiveProduct.price.toLocaleString()}
    </p>

  </div>

</div>

        <div className="mt-8 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <div className="flex flex-col md:flex-row gap-4 justify-between">

    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex-1 outline-none"
    />

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
    >
      <option>All Categories</option>
      <option>Running</option>
      <option>Lifestyle</option>
      <option>Sneakers</option>
      <option>Training</option>
      <option>Football</option>
    </select>

  </div>

</div>
<div className="mt-8 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    All Products
  </h2>

  <table className="w-full">

    <thead>
      <tr className="border-b border-slate-700">
        <th className="text-left py-3 px-4 w-[35%]">Product</th>
<th className="text-left py-3 px-4 w-[20%]">Category</th>
        <th className="text-left py-3 px-4">Price</th>
        <th className="text-left py-3 px-4">Discount</th>
        <th className="text-left py-3 px-4">Rating</th>
      </tr>
    </thead>

    <tbody>

      {filteredProducts.map((product) => (
        <tr
          key={product.name}
          className="border-b border-slate-800"
        >
          <td className="py-4 px-4">
            {product.name}
          </td>

          <td className="px-4">
            {product.category}
          </td>

          <td className="px-4">
            ₹{product.price.toLocaleString()}
          </td>

          <td className="px-4 text-green-400 font-semibold">
            {product.discount}%
          </td>

          <td className="px-4 text-yellow-400 font-semibold whitespace-nowrap">
  ⭐ {product.rating}
</td>
        </tr>
      ))}

    </tbody>

  </table>

</div>
      </div>
    </div>
  );
}