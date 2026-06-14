import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function Home() {
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
 const trendData = [
  {
    range: "0-5000",
    count: products.filter((p) => p.price <= 5000).length,
  },
  {
    range: "5001-8000",
    count: products.filter(
      (p) => p.price > 5000 && p.price <= 8000
    ).length,
  },
  {
    range: "8001-11000",
    count: products.filter(
      (p) => p.price > 8000 && p.price <= 11000
    ).length,
  },
  {
    range: "11000+",
    count: products.filter((p) => p.price > 11000).length,
  },
];
const totalProducts = products.length;

const totalCategories = [
  ...new Set(products.map(product => product.category))
].length;

const averageDiscount =
  products.length > 0
    ? Math.round(
        products.reduce(
          (sum, product) => sum + product.discount,
          0
        ) / products.length
      )
    : 0;

const averageRating =
  products.length > 0
    ? (
        products.reduce(
          (sum, product) => sum + product.rating,
          0
        ) / products.length
      ).toFixed(1)
    : "0";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-12 py-8">

        <h1 className="font-bold text-xl tracking-[0.4em]">
          PUMA
        </h1>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center mt-24 px-6">

  <span className="text-cyan-400 uppercase tracking-[0.5em] text-sm">
    PUMA PRODUCT INTELLIGENCE
  </span>

  <h1 className="mt-8 text-7xl md:text-8xl font-bold max-w-6xl leading-[0.95]">

  Understand The

  <br />

  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Story Behind Every Product
  </span>

</h1>

  <p className="mt-8 text-slate-400 max-w-3xl text-xl leading-relaxed">

    Analyze pricing movements, discount strategies,
    category performance and product trends through
    a real-time analytics platform built for data-driven decisions.

  </p>

  <div className="flex gap-4 mt-12">

    <Link
  to="/dashboard"
  className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300"
>
  Launch Analytics
</Link>

  </div>

</section>

      {/* Floating Stats */}
      <section className="relative z-10 max-w-6xl mx-auto mt-24 px-6">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-slate-400">
              Products Tracked
            </h3>

            <p className="text-5xl font-bold mt-4">
              {totalProducts}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-slate-400">
              Avg Discount
            </h3>

            <p className="text-5xl font-bold mt-4">
              {averageDiscount}%
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-slate-400">
              Categories
            </h3>

            <p className="text-5xl font-bold mt-4">
              {totalCategories}
            </p>
          </div>

        </div>

      </section>
{/* Dashboard Preview */}

      <section className="max-w-6xl mx-auto px-6 mt-32 mb-24">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              Price Distribution Overview
            </h2>

            <span className="text-green-400">
              ● Live Data
            </span>

          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">

            <div className="bg-black/30 rounded-2xl p-5">
              <p className="text-slate-400">Products</p>
              <h3 className="text-3xl font-bold">{totalProducts}</h3>
            </div>

            <div className="bg-black/30 rounded-2xl p-5">
              <p className="text-slate-400">Avg Discount</p>
              <h3 className="text-3xl font-bold">{averageDiscount}%</h3>
            </div>

            <div className="bg-black/30 rounded-2xl p-5">
              <p className="text-slate-400">Categories</p>
              <h3 className="text-3xl font-bold">{totalCategories}</h3>
            </div>

            <div className="bg-black/30 rounded-2xl p-5">
              <p className="text-slate-400">Avg Rating</p>
              <h3 className="text-3xl font-bold">{averageRating}</h3>
            </div>

          </div>

          <div className="h-64 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 p-4">

  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={trendData}>
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="count"
        stroke="#22d3ee"
        strokeWidth={4}
      />
    </LineChart>
  </ResponsiveContainer>

</div>

        </div>

      </section>
    </div>
  )
}