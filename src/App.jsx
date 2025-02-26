
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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories />
              <ImageSlider />
              <TextComponent />
              <Farmers />
            </>
          }
        />
        <Route path="/category/:categoryId" element={<CategoryDetails />} />
        <Route path="/farmer/:id" element={<FarmerDetails />} />
        <Route path="/profile" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
