import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function Reports() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  axios
    .get("https://puma-analytics-dashboard-production.up.railway.app/api/products")
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  const totalProducts = products.length;

  const averageRating =
  products.length > 0
    ? (
        products.reduce(
          (sum, product) => sum + product.rating,
          0
        ) / products.length
      ).toFixed(1)
    : "0";

  const averageDiscount =
  products.length > 0
    ? Math.round(
        products.reduce(
          (sum, product) => sum + product.discount,
          0
        ) / products.length
      )
    : 0;

  const topRatedProduct =
  products.length > 0
    ? [...products].sort(
        (a, b) => b.rating - a.rating
      )[0]
    : null;

  const highestDiscountProduct =
  products.length > 0
    ? [...products].sort(
        (a, b) => b.discount - a.discount
      )[0]
    : null;

const categoryPerformance = Object.entries(
  products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        totalRating: 0,
        count: 0,
      };
    }

    acc[product.category].totalRating += product.rating;
    acc[product.category].count += 1;

    return acc;
  }, {})
).map(([category, data]) => ({
  category,
  rating: (
    data.totalRating / data.count
  ).toFixed(1),
}));

const bestCategory =
  categoryPerformance.length > 0
    ? [...categoryPerformance].sort(
        (a, b) => b.rating - a.rating
      )[0]
    : null;
    
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <Sidebar />

      <div className="flex-1 p-10 overflow-auto max-w-7xl mx-auto w-full">

        <h1 className="text-4xl font-bold">
          Reports
        </h1>

        <p className="text-slate-400 mt-2">
          Executive summary and business insights
        </p>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Products</p>
    <h2 className="text-4xl font-bold mt-2">
      {totalProducts}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Avg Rating</p>
    <h2 className="text-4xl font-bold mt-2">
      {averageRating}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Avg Discount</p>
    <h2 className="text-4xl font-bold mt-2">
      {averageDiscount}%
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Top Product</p>
    <h2 className="text-xl font-bold mt-2">
      {topRatedProduct?.name}
    </h2>
  </div>

</div>
<div className="grid md:grid-cols-3 gap-6 mt-8">

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <h3 className="text-xl font-bold">
      ⭐ Top Rated Product
    </h3>

    <p className="text-slate-400 mt-3">
      {topRatedProduct?.name}
    </p>

    <p className="text-cyan-400 mt-2">
      Rating: {topRatedProduct?.rating}
    </p>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <h3 className="text-xl font-bold">
      🔥 Best Discount
    </h3>

    <p className="text-slate-400 mt-3">
      {highestDiscountProduct?.name}
    </p>

    <p className="text-green-400 mt-2">
      {highestDiscountProduct?.discount}% Off
    </p>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <h3 className="text-xl font-bold">
      📈 Best Category
    </h3>

    <p className="text-slate-400 mt-3">
      {bestCategory?.category}
    </p>

    <p className="text-purple-400 mt-2">
      Rating: {bestCategory?.rating}
    </p>

  </div>

</div>
<div className="mt-8 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Product Performance Summary
  </h2>

  <table className="w-full table-fixed">

    <thead>
      <tr className="border-b border-slate-700">
        <th className="text-left py-3 px-4">Product</th>
        <th className="text-left py-3 px-4">Category</th>
        <th className="text-left py-3 px-4">Rating</th>
        <th className="text-left py-3 px-4">Discount</th>
      </tr>
    </thead>

    <tbody>

      {products.map((product) => (
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
            ⭐ {product.rating}
          </td>

          <td className="px-4 text-green-400">
            {product.discount}%
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