function App() {
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

        <button className="border border-slate-800 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
          Dashboard
        </button>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center mt-24 px-6">

  <span className="text-cyan-400 uppercase tracking-[0.5em] text-sm">
    PUMA PRODUCT INTELLIGENCE
  </span>

  <h1 className="mt-8 text-7xl md:text-8xl font-bold max-w-6xl leading-[0.95]">

    Understand The Story

    <br />

    Behind Every Product

  </h1>

  <p className="mt-8 text-slate-400 max-w-3xl text-xl leading-relaxed">

    Analyze pricing movements, discount strategies,
    category performance and product trends through
    a real-time analytics platform built for data-driven decisions.

  </p>

  <div className="flex gap-4 mt-12">

    <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300">
      Explore Dashboard
    </button>

    <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition">
      View Analytics
    </button>

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
              5K+
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-slate-400">
              Avg Discount
            </h3>

            <p className="text-5xl font-bold mt-4">
              28%
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-slate-400">
              Categories
            </h3>

            <p className="text-5xl font-bold mt-4">
              12
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default App