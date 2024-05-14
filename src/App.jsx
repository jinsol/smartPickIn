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
import UserModifyView from "@/views/UserModifyView";
import CartView from "@/views/CartView";
import MyView from "@/views/MyView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        {/* 회원가입 (시작) */}
        <Route path="/join" element={<JoinView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/agree" element={<AgreeView />} />
        {/* 회원가입 (끝) */}
        <Route path="/about" element={<AboutView />} />
        {/* 상품구매 (시작) */}
        <Route path="/product" element={<ProductView />} />
        <Route path="/product/:id" element={<ProductDetailView />} />
        {/* 상품구매 (끝) */}
        {/* 기업소식 (시작) */}
        <Route path="/news" element={<NewsView />} />
        <Route path="/newsDetail/:subject" element={<NewsDetailView />} />
        {/* 기업소식 (끝) */}
        <Route path="/service/" element={<ServiceView />} />
        <Route path="/ask" element={<AskView />} />
        {/* 마이페이지 (시작 */}
        <Route path="/cart/" element={<CartView />} />
        <Route path="/usermodify" element={<UserModifyView />} />
        <Route path="/my" element={<MyView />} />
      </Route>
    </Routes>
  );
};

export default App;
