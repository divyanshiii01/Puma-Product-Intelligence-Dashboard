import { Link, useLocation } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-2xl font-bold mb-12 tracking-wider">
        PUMA
      </h1>

      <div className="space-y-4">

  <Link
    to="/dashboard"
    className={`block px-4 py-3 rounded-xl ${
      location.pathname === "/dashboard"
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-400 hover:bg-slate-800"
    }`}
  >
    Dashboard
  </Link>

  <Link
    to="/products"
    className={`block px-4 py-3 rounded-xl ${
      location.pathname === "/products"
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-400 hover:bg-slate-800"
    }`}
  >
    Products
  </Link>

  <Link
  to="/analytics"
  className={`block px-4 py-3 rounded-xl ${
    location.pathname === "/analytics"
      ? "bg-cyan-500/20 text-cyan-400"
      : "text-slate-400 hover:bg-slate-800"
  }`}
>
  Analytics
</Link>

  <Link
  to="/reports"
  className={`block px-4 py-3 rounded-xl ${
    location.pathname === "/reports"
      ? "bg-cyan-500/20 text-cyan-400"
      : "text-slate-400 hover:bg-slate-800"
  }`}
>
  Reports
</Link>

<Link
  to="/wishlist"
  className={`block px-4 py-3 rounded-xl ${
    location.pathname === "/wishlist"
      ? "bg-cyan-500/20 text-cyan-400"
      : "text-slate-400 hover:bg-slate-800"
  }`}
>
  ❤️ Wishlist
</Link>
</div>

    </div>
  );
}