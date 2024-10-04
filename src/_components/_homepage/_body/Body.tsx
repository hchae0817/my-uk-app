import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BodyStyles } from "../BodyStyles";
import { CategoryPosts } from "./CategoryPosts";
import Globe from "./Globe";

const Body = () => {
  const navigate = useNavigate();

  const handleViewAllPosts = () => {
    navigate("/posts");
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false,
    });

    return () => {
      AOS.refresh(); 
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const globeElement = document.getElementById("globe-container");
      if (globeElement) {
        const scrollPosition = window.scrollY;
        globeElement.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={BodyStyles.ContainerBox}>
      {/* Parallax Globe */}
      <Globe />

      {/* Text Section */}
      <Box sx={{ fontWeight: "bold" }} data-aos="fade-up" data-aos-delay="200">
        <Typography variant="h2" sx={{ fontWeight: "bold", width: "50%" }}>
          Booking Service
        </Typography>
        <Box sx={{ width: "50%" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Life is too short to plan all my travel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discover the best places to visit in the UK with us, covering music,
            landmarks, restaurants, and more.
          </Typography>
        </Box>
      </Box>

      {/* CategoryPosts Section */}
      <Box sx={{ width: "100%" }} data-aos="fade-up" data-aos-delay="400">
        <CategoryPosts />
      </Box>

      {/* View All Posts Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleViewAllPosts}
        sx={{ mt: 2 }}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        View All Posts
      </Button>
    </Box>
  );
};

export default Body;
