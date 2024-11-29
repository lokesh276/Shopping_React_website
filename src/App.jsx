import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Collection from "./pages/Collection"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import DisplayOrders from "./pages/DisplayOrders"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:product:Id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/displayoders" element={<DisplayOrders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App