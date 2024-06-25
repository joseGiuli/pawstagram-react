import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import GlobalStyles, { Container } from "./styles/GlobalStyles";
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";
import User from "./components/User/User";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
