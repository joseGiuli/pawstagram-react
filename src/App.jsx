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
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";
import { MainBody, MainStyled } from "./AppStyles";

const App = () => {
  return (
    <MainStyled>
      <GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <MainBody>
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
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainBody>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </MainStyled>
  );
};

export default App;
