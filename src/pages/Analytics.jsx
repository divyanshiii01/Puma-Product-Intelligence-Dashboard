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

export default function Analytics() {
    const totalProducts = products.length;

const averagePrice = Math.round(
  products.reduce((sum, product) => sum + product.price, 0) /
  products.length
);

const averageDiscount = Math.round(
  products.reduce((sum, product) => sum + product.discount, 0) /
  products.length
);

const averageRating = (
  products.reduce((sum, product) => sum + product.rating, 0) /
  products.length
).toFixed(1);
const ratingByCategory = Object.entries(
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
const priceByCategory = Object.entries(
  products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        totalPrice: 0,
        count: 0,
      };
    }

    acc[product.category].totalPrice += product.price;
    acc[product.category].count += 1;

    return acc;
  }, {})
).map(([category, data]) => ({
  category,
  price: Math.round(
    data.totalPrice / data.count
  ),
}));
const highestRatedCategory = [...ratingByCategory].sort(
  (a, b) => b.rating - a.rating
)[0];

const mostExpensiveCategory = [...priceByCategory].sort(
  (a, b) => b.price - a.price
)[0];

const highestDiscountProduct = [...products].sort(
  (a, b) => b.discount - a.discount
)[0];
const categorySummary = Object.entries(
  products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        totalProducts: 0,
        totalPrice: 0,
        totalRating: 0,
      };
    }

    acc[product.category].totalProducts += 1;
    acc[product.category].totalPrice += product.price;
    acc[product.category].totalRating += product.rating;

    return acc;
  }, {})
).map(([category, data]) => ({
  category,
  products: data.totalProducts,
  avgPrice: Math.round(
    data.totalPrice / data.totalProducts
  ),
  avgRating: (
    data.totalRating / data.totalProducts
  ).toFixed(1),
}));
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <Sidebar />

      <div className="flex-1 p-10 overflow-auto max-w-7xl mx-auto w-full">

        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Explore pricing, ratings and category performance
        </p>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Products</p>
    <h2 className="text-4xl font-bold mt-2">
      {totalProducts}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Avg Price</p>
    <h2 className="text-4xl font-bold mt-2">
      ₹{averagePrice.toLocaleString()}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Avg Discount</p>
    <h2 className="text-4xl font-bold mt-2">
      {averageDiscount}%
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
    <p className="text-slate-400">Avg Rating</p>
    <h2 className="text-4xl font-bold mt-2">
      {averageRating}
    </h2>
  </div>

</div>
<div className="mt-8 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Average Rating by Category
  </h2>

  <div className="h-80">

    <ResponsiveContainer width="100%" height="100%">

      <BarChart data={ratingByCategory}>

        <XAxis dataKey="category" />

        <YAxis domain={[0, 5]} />

        <Tooltip />

        <Bar
          dataKey="rating"
          fill="#22d3ee"
          radius={[8, 8, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>
<div className="mt-8 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Average Price by Category
  </h2>

  <div className="h-80">

    <ResponsiveContainer width="100%" height="100%">

      <BarChart data={priceByCategory}>

        <XAxis dataKey="category" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="price"
          fill="#a855f7"
          radius={[8, 8, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>
<div className="grid md:grid-cols-3 gap-6 mt-8">

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <p className="text-slate-400">
      Highest Rated Category
    </p>

    <h3 className="text-2xl font-bold mt-3">
      ⭐ {highestRatedCategory.category}
    </h3>

    <p className="text-cyan-400 mt-2">
      Rating: {highestRatedCategory.rating}
    </p>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <p className="text-slate-400">
      Most Expensive Category
    </p>

    <h3 className="text-2xl font-bold mt-3">
      💰 {mostExpensiveCategory.category}
    </h3>

    <p className="text-purple-400 mt-2">
      ₹{mostExpensiveCategory.price.toLocaleString()}
    </p>

  </div>

  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

    <p className="text-slate-400">
      Best Discount Available
    </p>

    <h3 className="text-2xl font-bold mt-3">
      🔥 {highestDiscountProduct.name}
    </h3>

    <p className="text-green-400 mt-2">
      {highestDiscountProduct.discount}% Off
    </p>

  </div>

</div>
<div className="mt-8 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Category Comparison
  </h2>

  <table className="w-full">

    <thead>
      <tr className="border-b border-slate-700">
        <th className="text-left py-3">Category</th>
        <th className="text-left py-3">Products</th>
        <th className="text-left py-3">Avg Price</th>
        <th className="text-left py-3">Avg Rating</th>
      </tr>
    </thead>

    <tbody>

      {categorySummary.map((category) => (
        <tr
          key={category.category}
          className="border-b border-slate-800"
        >
          <td className="py-4">
            {category.category}
          </td>

          <td>
            {category.products}
          </td>

          <td>
            ₹{category.avgPrice.toLocaleString()}
          </td>

          <td>
            ⭐ {category.avgRating}
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