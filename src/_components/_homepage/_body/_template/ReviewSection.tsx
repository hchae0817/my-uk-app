// src/components/ReviewSection.tsx
import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import { postDetailStyles } from "../PostDetails.styles";

interface ReviewSectionProps {
  rating: number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ rating }) => (
  <Box sx={postDetailStyles.ratingBox}>
    <Typography variant="h5">My Personal Rating</Typography>
    <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
      <Rating name="read-only" value={rating || 0} readOnly precision={0.5} />
      <Typography variant="body1" sx={postDetailStyles.ratingText}>
        {rating ? `${rating} / 5` : "No rating available"}
      </Typography>
    </Box>
  </Box>
);

export default ReviewSection;
