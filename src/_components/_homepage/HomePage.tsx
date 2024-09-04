import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";


interface IHomePageProps {
  test?: any
}

export const HomePage: React.FC<IHomePageProps> = (props): JSX.Element | null => {
  
  return (
    <Box >
       <Header/>
       <Body/>
       <Footer/>
    </Box>
  );
};
