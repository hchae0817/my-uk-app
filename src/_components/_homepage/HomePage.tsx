import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Body  from "./_body/Body";


interface IHomePageProps {
  test?: any
}

export const HomePage: React.FC<IHomePageProps> = (props): JSX.Element | null => {
  
  return (
    <Box >
       <Body/>
    </Box>
  );
};
