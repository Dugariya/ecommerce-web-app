import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { About, Cart, Home, Profile, SignIn, SingleProduct } from "./page";

function App() {
  interface Route {
    path: string;
    name: string;
  }

  const routes: Route[] = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/profile", name: "Profile" },
    { path: "/card", name: "Card" },
    { path: "/signin", name: "SignIn" },
  ];
  return (
    <BrowserRouter>
      <Navbar routes={routes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
