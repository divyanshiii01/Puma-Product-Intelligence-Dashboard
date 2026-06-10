export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-2xl font-bold mb-12 tracking-wider">
        PUMA
      </h1>

      <div className="space-y-4">

        <div className="bg-cyan-500/20 text-cyan-400 px-4 py-3 rounded-xl">
          Dashboard
        </div>

        <div className="text-slate-400 px-4 py-3">
          Products
        </div>

        <div className="text-slate-400 px-4 py-3">
          Analytics
        </div>

        <div className="text-slate-400 px-4 py-3">
          Reports
        </div>

      </div>

    </div>
  );
}