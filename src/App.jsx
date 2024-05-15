import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import GlobalStyles, { Container } from "./styles/GlobalStyles";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
