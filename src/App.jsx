import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import GlobalStyles, {
  AnimationContainer,
  Container,
} from "./styles/GlobalStyles";
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
