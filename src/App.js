import React from "react";
import Header from "./common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BestSeller from "./components/BestSeller";
import Features from "./pages/Features";
import Quiz from "./components/Quiz";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

import About from "./components/About";
import BodyTypeDetection from "./components/BodyTypeDetection";
import Blogs from "./components/Blogs";
import Category from "./components/Category";
import ContactUs from "./components/ContactUs";
import CustomizableClothing from "./components/CustomizableClothing";
import Chatbot from "./components/Chatbot";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";

export default function App() {
  return (
    <>
  
      <Router>
        <Header />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/shop" element={<BestSeller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/style-quiz" element={<Quiz/>} />
          <Route path="/detect-body-type" element={<BodyTypeDetection />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/category" element={<Category />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/customizableclothing" element={<CustomizableClothing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        
        </Routes>
        
      </Router>
    </>
  );
}
