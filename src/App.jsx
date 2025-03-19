import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import TextComponent from "./components/TextComponent";
import Farmers from "./components/Farmers";
import FarmerDetails from "./components/FarmerDetails";
import Categories from "./components/Categories";
import CategoryDetails from "./components/CategoriesDetails";
import Login from "./components/Login"; // ✅ Import Login component

import "./styles/App.css";
import Navbar1 from "./components/Navbar1";
import SellerNavbar from "./components/SellerNavbar";
import StartSelling from "./components/StartSelling";
import SellerPage from "./components/SellerPage";
import FarmerMarket from "./components/FarmerMarket";
import SuccessStories from "./components/SuccessStories";
import FarmerRegistration from "./components/FarmerRegistration";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Categories />
              <ImageSlider />
              <TextComponent />
              <Farmers />
            </>
          }
        />
        
        {/* Category & Farmer Details */}
        <Route path="/category/:categoryId" element={<CategoryDetails />} />
        <Route path="/farmer/:id" element={<FarmerDetails />} />

        {/* Login Page (Fixed) */}
        <Route
          path="/login"
          element={
            <>
              <Navbar1/>
              <Login />
            </>
          }
        />

<Route path="/Seller" element={<><SellerNavbar /><SellerPage /><SuccessStories/></>} />

<Route path="/Start-Selling" element={<><SellerNavbar/><StartSelling/></>} />
<Route path="//dashboard" element={<><SellerNavbar/><FarmerRegistration/></>} />
       
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
