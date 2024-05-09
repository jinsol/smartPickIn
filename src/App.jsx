import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ProductView from "@/views/ProductView";
import ProductDetailView from "@/views/ProductDetailView";
import NewsView from "@/views/NewsView";
import NewsDetailView from "@/views/NewsDetailView";
import AskView from "@/views/AskView";
import ServiceView from "@/views/ServiceView";
import AgreeView from "@/views/AgreeView";
import JoinView from "@/views/JoinView";
import LoginView from "@/views/LoginView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/join" element={<JoinView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/agree" element={<AgreeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/product/:id" element={<ProductDetailView />} />
        <Route path="/news" element={<NewsView />} />
        <Route path="/newsDetail/:subject" element={<NewsDetailView />} />
        <Route path="/ask" element={<AskView />} />
        <Route path="/service/" element={<ServiceView />} />
      </Route>
    </Routes>
  );
};

export default App;
