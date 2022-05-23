import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Box from "./pages/Box";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/box" element={<Box />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
