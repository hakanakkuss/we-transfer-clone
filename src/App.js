import "./App.css";
import React from "react";
import NavigationBar from "./components/navigationBar";
import CardBir from "./components/card";
import Help from "./components/help";
import Company from "./components/company";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";
import Products from "./components/products";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        <container>
          <Routes>
            <Route path="/" element={<CardBir />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/company" element={<Company />} />

            <Route path="/products" element={<Products />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </container>
      </div>
    </BrowserRouter>
  );
}

export default App;

// {

//     <Route path="/" element={<Home />} />
//     <Route path="/detail/:id" element={<Detail />} />

// }
