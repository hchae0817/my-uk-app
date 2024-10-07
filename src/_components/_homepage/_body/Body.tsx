import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BodyStyles } from "../BodyStyles";
import { CategoryPosts } from "./CategoryPosts";
import Globe from "./Globe";
import Description from "./Description";

const Body = () => {
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
      <Globe />
      <Description />

      {/* CategoryPosts Section */}
      <Box sx={{ width: "100%" }} data-aos="fade-up" data-aos-delay="400">
        <CategoryPosts />
      </Box>
    </Box>
  );
};

export default Body;
