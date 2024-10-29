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
import PostDetail from "./_components/_homepage/_body/PostDetail";
import ScrollToTop from "./ScrollToTop";
import Thankyou from "./_components/_formpage/Thankyou";
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Arrange children in a column
        minHeight: '100vh', // Full height of the viewport
      }}
    >
    <Router>
      <ScrollToTop />
      <Header />
      <Box component="main" sx={{ padding: 2, scrollBehavior: 'smooth' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/posts" element={<SearchPosts />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
    </Box>
  );
}

export default App;
