import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

const [products, setProducts] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:5000/api/products")
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

    const data = [
  { month: "Jan", products: 1200 },
  { month: "Feb", products: 1800 },
  { month: "Mar", products: 2200 },
  { month: "Apr", products: 2800 },
  { month: "May", products: 3500 },
  { month: "Jun", products: 4200 },
];


const totalProducts = products.length;
const totalCategories = [
  ...new Set(products.map(product => product.category))
].length;
const averageDiscount = Math.round(
  products.reduce((sum, product) => sum + product.discount, 0) /
  products.length
);
const averageRating = (
  products.reduce((sum, product) => sum + product.rating, 0) /
  products.length
).toFixed(1);

const categoryDistribution = Object.entries(
  products.reduce((acc, product) => {
    acc[product.category] =
      (acc[product.category] || 0) + 1;

    return acc;
  }, {})
).map(([category, count]) => ({
  category,
  percentage: Math.round(
    (count / products.length) * 100
  ),
}));

const recentActivity = [
  `Tracking ${totalProducts} products`,
  `Average discount is ${averageDiscount}%`,
  `${totalCategories} categories monitored`,
  `Average rating is ${averageRating}`,
];

const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All Categories" ||
    product.category === category;

  return matchesSearch && matchesCategory;
});
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
        <Sidebar />

<div className="flex-1 p-10 overflow-auto max-w-7xl mx-auto w-full">

      <div className="flex justify-between items-center mb-8">

  <div>
    <h1 className="text-4xl font-bold">
      Puma Analytics Dashboard
    </h1>

    <p className="text-slate-400 mt-2">
      Real-time Product Intelligence
    </p>
  </div>

  <div className="text-right">
    <p className="text-slate-400">
      Dashboard Status
    </p>

    <p className="text-green-400 font-semibold">
      ● Live
    </p>
  </div>

</div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400">Products</p>
          <h2 className="text-4xl font-bold mt-2">{totalProducts}</h2>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400">Discounts</p>
          <h2 className="text-4xl font-bold mt-2">{averageDiscount}%</h2>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400">Categories</p>
          <h2 className="text-4xl font-bold mt-2">{totalCategories}</h2>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400">Rating</p>
          <h2 className="text-4xl font-bold mt-2">{averageRating}</h2>
        </div>

      </div>

      <div className="mt-10 bg-slate-900 rounded-3xl p-8 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Product Growth Trend
  </h2>

  <div className="h-96">

    <ResponsiveContainer width="100%" height="100%">

      <LineChart data={data}>

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="products"
          stroke="#34d399"
          strokeWidth={4}
        />

      </LineChart>

    </ResponsiveContainer>

  </div>

  </div>

<div className="grid lg:grid-cols-2 gap-6 mt-10">

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <h2 className="text-2xl font-bold mb-4">
  Category Distribution
</h2>
    <div className="space-y-4">

  {categoryDistribution.map((category, index) => (

    <div key={category.category}>

      <div className="flex justify-between mb-1">

        <span>{category.category}</span>

        <span>{category.percentage}%</span>

      </div>

      <div className="bg-slate-800 h-3 rounded-full">

        <div
  className={`h-3 rounded-full ${
    [
      "bg-cyan-400",
      "bg-purple-400",
      "bg-pink-400",
      "bg-green-400",
      "bg-orange-400",
    ][index % 6]
  }`}
  style={{
    width: `${category.percentage}%`
  }}
/>

      </div>

    </div>

  ))}

</div>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <h2 className="text-2xl font-bold mb-4">
      Recent Activity
    </h2>

    <div className="space-y-4">

  {recentActivity.map((activity, index) => {

  const colors = [
    "border-cyan-400",
    "border-purple-400",
    "border-pink-400",
    "border-green-400",
  ];

  return (
    <div
      key={index}
      className={`border-l-2 ${colors[index % colors.length]} pl-4`}
    >
      {activity}
    </div>
  );
})}

</div>

  </div>

</div>


</div>

    </div>
  );
}