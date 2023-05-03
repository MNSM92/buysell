import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Product from "./pages/Product";
import Notfound from "./pages/404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Login from "./components/Login";
import ProductIn from "./pages/ProductIn";


const App = () => {
  return (
    <section className="">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catagory" element={<Home2 />} />
          <Route path="/catagory1" element={<Home3 />} />
          <Route path="*" element={<Notfound />} />
          <Route exact path="/about" element={<ProductIn />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/id" element={<ProductDetails />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </section>
  );
};

export default App;
