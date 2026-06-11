import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;