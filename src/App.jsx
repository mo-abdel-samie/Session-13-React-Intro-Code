import React from "react";
import { NavBar } from "./layout/NavBar";
import { Footer } from "./layout/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error404 } from "./pages/Error404";
import { Route, Routes } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { Quiz } from "./pages/Quiz";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        {/* Home Page */}
        {/*<Home /> */}
        <Route path="/" element={<Home />} />
        {/* About Page */}
        {/*<About />*/}
        <Route path="/about" element={<About />} />
        {/* Login Page */}
        {/*<Login />*/}
        <Route path="/register" element={<Registration />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* 404 Page */}
        {/*<Error404 />*/}
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}
