import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Components/Header_Footer/Footer";
import Header from "./Components/Header_Footer/Header";
import Home from "./Components/Home";

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default routes;
