// src/components/EssentialInfo.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { postDetailStyles } from "../PostDetails.styles";

interface EssentialInfoProps {
  location: string;
  openingHours: string;
  bookingRequired: boolean;
}

const EssentialInfo: React.FC<EssentialInfoProps> = ({ location, openingHours, bookingRequired }) => {
  return (
    <Box sx={postDetailStyles.essentialInfoBox}>
      <Typography variant="body1">Location: {location}</Typography>
      <Typography variant="body1">Opening Hours: {openingHours}</Typography>
      <Typography variant="body1">
        Booking Required: {bookingRequired ? "Yes" : "No"}
      </Typography>
    </Box>
  );
};

export default EssentialInfo;
