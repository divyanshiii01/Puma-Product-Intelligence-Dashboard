import { useState } from "react";
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
    const data = [
  { month: "Jan", products: 1200 },
  { month: "Feb", products: 1800 },
  { month: "Mar", products: 2200 },
  { month: "Apr", products: 2800 },
  { month: "May", products: 3500 },
  { month: "Jun", products: 4200 },
];
const products = [
  {
    name: "Puma Velocity Nitro",
    category: "Running",
    price: 8999,
    discount: 25,
    rating: 4.8,
  },
  {
    name: "Puma Deviate Nitro",
    category: "Running",
    price: 10999,
    discount: 20,
    rating: 4.7,
  },
  {
    name: "Puma Liberate Nitro",
    category: "Running",
    price: 7499,
    discount: 15,
    rating: 4.6,
  },
  {
    name: "Puma RS-X",
    category: "Lifestyle",
    price: 7499,
    discount: 30,
    rating: 4.9,
  },
  {
    name: "Puma Future Rider",
    category: "Sneakers",
    price: 6999,
    discount: 18,
    rating: 4.5,
  },
  {
    name: "Puma Mirage Sport",
    category: "Sneakers",
    price: 6499,
    discount: 22,
    rating: 4.4,
  },
  {
    name: "Puma Softride Enzo",
    category: "Training",
    price: 5999,
    discount: 12,
    rating: 4.3,
  },
  {
    name: "Puma Fuse 2.0",
    category: "Training",
    price: 8299,
    discount: 15,
    rating: 4.6,
  },
  {
    name: "Puma Ultra Ultimate",
    category: "Football",
    price: 12999,
    discount: 10,
    rating: 4.9,
  },
  {
    name: "Puma Future Match",
    category: "Football",
    price: 9999,
    discount: 18,
    rating: 4.7,
  }
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
          stroke="#22d3ee"
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

      <div>
        <div className="flex justify-between mb-1">
          <span>Running</span>
          <span>45%</span>
        </div>

        <div className="bg-slate-800 h-3 rounded-full">
          <div className="bg-cyan-400 h-3 rounded-full w-[45%]"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span>Lifestyle</span>
          <span>30%</span>
        </div>

        <div className="bg-slate-800 h-3 rounded-full">
          <div className="bg-purple-400 h-3 rounded-full w-[30%]"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span>Training</span>
          <span>25%</span>
        </div>

        <div className="bg-slate-800 h-3 rounded-full">
          <div className="bg-pink-400 h-3 rounded-full w-[25%]"></div>
        </div>
      </div>

    </div>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <h2 className="text-2xl font-bold mb-4">
      Recent Activity
    </h2>

    <div className="space-y-4">

      <div className="border-l-2 border-cyan-400 pl-4">
        New Running collection added
      </div>

      <div className="border-l-2 border-purple-400 pl-4">
        Discount campaign launched
      </div>

      <div className="border-l-2 border-pink-400 pl-4">
        Product ratings updated
      </div>

    </div>

  </div>

</div>


</div>

    </div>
  );
}