import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BodyStyles } from "./BodyStyles";

interface IBodyProps {
  test?: any;
}

export const Body: React.FC<IBodyProps> = (props): JSX.Element | null => {
  return (
    <Box sx={BodyStyles.ContainerBox}>
      <Box sx={BodyStyles.MessageBox}>쉽고 편하게 여행하는</Box>
    </Box>
  );
};
