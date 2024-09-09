import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./_components/_homepage/HomePage";
import FormPage from "./_components/_formpage/FormPage";
import React from "react";
import CategoryPage from "./_components/_categorypage/CategoryPage";
import { Header } from "./_components/_homepage/Header";
import Footer from "./_components/_homepage/Footer";
import { Box } from "@mui/material";
import { SearchPosts } from "./_components/_homepage/_body/SearchPosts";

function App() {
  return (
    <Router>
      <Header />
      <Box sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/posts" element={<SearchPosts />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
