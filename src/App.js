import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/AboutUs/Main";
import In from "./Components/In/In";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="container-fluid">
      {" "}
      <ToastContainer />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<In />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUs" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

        {/* <Route
          path="/home"
          element={<SubCategory banner={tiffins_banner} category="tiffins" />}
        /> */}

        {/* <Route
          path="/snacks"
          element={<SubCategory banner={Snacks_Banner} category="snacks" />}
        />
        <Route
          path="/icecreams"
          element={
            <SubCategory banner={icecreams_banner} category="icecreams" />
          }
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/about" element={<About />} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
