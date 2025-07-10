import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Troubleshooter from "./pages/Troubleshooter";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-blue-700 text-white px-4 py-3 shadow-md">
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <h1 className="font-bold text-lg">EVOL 100 Assistant</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/troubleshooter" className="hover:underline">Troubleshooter</Link>
              <Link to="/about" className="hover:underline">About</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/troubleshooter" element={<Troubleshooter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
