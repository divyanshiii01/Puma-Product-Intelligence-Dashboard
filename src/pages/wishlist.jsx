import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://puma-analytics-dashboard-production.up.railway.app/api/wishlist"
      )
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      await axios.delete(
        `https://puma-analytics-dashboard-production.up.railway.app/api/wishlist/${id}`
      );

      setWishlist(
        wishlist.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold">
          ❤️ Wishlist
        </h1>

        <p className="text-slate-400 mt-2 mb-8">
          Your favorite Puma products
        </p>

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

          <h2 className="text-2xl font-bold mb-6">
            Saved Products ({wishlist.length})
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3">Product</th>
                <th className="text-left py-3">Category</th>
                <th className="text-left py-3">Price</th>
                <th className="text-left py-3">Discount</th>
                <th className="text-left py-3">Rating</th>
                <th className="text-left py-3">Action</th>
              </tr>
            </thead>

            <tbody>

              {wishlist.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-slate-800"
                >
                  <td className="py-4">
                    {item.name}
                  </td>

                  <td>
                    {item.category}
                  </td>

                  <td>
                    ₹{item.price.toLocaleString()}
                  </td>

                  <td className="text-green-400">
                    {item.discount}%
                  </td>

                  <td className="text-yellow-400">
                    ⭐ {item.rating}
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        removeFromWishlist(item._id)
                      }
                      className="bg-red-600 px-4 py-2 rounded-xl"
                    >
                      Remove
                    </button>
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