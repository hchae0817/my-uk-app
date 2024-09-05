import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeaderStyles } from "./HeaderStyles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface IHearderProps {
  test?: any;
}

export const Header: React.FC<IHearderProps> = (props): JSX.Element | null => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <Box sx={HeaderStyles.Box}>
      <Box
        component={Link}
        to="/"
        sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        TodoUK
      </Box>{" "}
      <Box>영국에서 뭐하지?</Box>
      <Button onClick={handleClick} sx={HeaderStyles.Button_Query}>
        문의하기
      </Button>
    </Box>
  );
};
