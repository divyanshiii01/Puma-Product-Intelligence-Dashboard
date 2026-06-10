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
    const data = [
  { month: "Jan", products: 1200 },
  { month: "Feb", products: 1800 },
  { month: "Mar", products: 2200 },
  { month: "Apr", products: 2800 },
  { month: "May", products: 3500 },
  { month: "Jun", products: 4200 },
];
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
        <Sidebar />

<div className="flex-1 p-10 overflow-auto">

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
          <h2 className="text-4xl font-bold mt-2">5421</h2>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400">Discounts</p>
          <h2 className="text-4xl font-bold mt-2">28%</h2>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400">Categories</p>
          <h2 className="text-4xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400">Rating</p>
          <h2 className="text-4xl font-bold mt-2">4.9</h2>
        </div>

      </div>

      <div className="mt-10 bg-slate-900 rounded-3xl p-6">

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

<div className="mt-10 bg-slate-900 rounded-3xl p-6 border border-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Top Products
  </h2>

  <table className="w-full">

    <thead>
      <tr className="border-b border-slate-700">
        <th className="text-left py-3">Product</th>
        <th className="text-left py-3">Category</th>
        <th className="text-left py-3">Price</th>
        <th className="text-left py-3">Discount</th>
      </tr>
    </thead>

    <tbody>

      <tr className="border-b border-slate-800">
        <td className="py-4">Puma Velocity Nitro</td>
        <td>Running</td>
        <td>₹8,999</td>
        <td className="text-green-400">25%</td>
      </tr>

      <tr className="border-b border-slate-800">
        <td className="py-4">Puma RS-X</td>
        <td>Lifestyle</td>
        <td>₹7,499</td>
        <td className="text-green-400">30%</td>
      </tr>

      <tr>
        <td className="py-4">Puma Future Rider</td>
        <td>Sneakers</td>
        <td>₹6,999</td>
        <td className="text-green-400">18%</td>
      </tr>

    </tbody>

  </table>

</div>

</div>

    </div>
  );
}