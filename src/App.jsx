import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ProductView from "@/views/ProductView";
import NewsView from "@/views/NewsView";
import NoticeView from "@/views/NoticeView";
import AskView from "@/views/AskView"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/about" element={<AboutView/>}/>
        <Route path="/product" element={<ProductView/>}/>
        <Route path="/news" element={<NewsView/>}/>
        <Route path="/notice" element={<NoticeView/>}/>
        <Route path="/ask" element={<AskView/>}/>
      </Route>
    </Routes>
  );
};

export default App;
