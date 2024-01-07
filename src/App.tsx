import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import Products from "./Pages/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
