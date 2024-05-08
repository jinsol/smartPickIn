import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ProductView from "@/views/ProductView";
import ProductDetailView from "@/views/ProductDetailView";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import ServiceView from "@/views/ServiceView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/product/:id" element={<ProductDetailView />} />
        <Route path="/news" element={<NewsView />} />
        <Route path="/ask" element={<AskView />} />
        <Route path="/service/" element={<ServiceView />} />
      </Route>
    </Routes>
  );
};

export default App;
