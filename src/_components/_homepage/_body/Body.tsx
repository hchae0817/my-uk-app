// import { Box } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { BodyStyles } from "../BodyStyles";
// import { CategoryPosts } from "./CategoryPosts";
// import { SearchPosts } from "./SearchPosts";

// interface IBodyProps {
//   test?: any;
// }

// export const Body: React.FC<IBodyProps> = (props): JSX.Element | null => {
//   return (
//     <Box sx={BodyStyles.ContainerBox}>
//       <CategoryPosts />
//       <SearchPosts />
//       <Box sx={BodyStyles.MessageBox}>쉽고 편하게 여행하는</Box>
//     </Box>
//   );
// };

import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BodyStyles } from "../BodyStyles";
import { CategoryPosts } from "./CategoryPosts";
import { SearchPosts } from "./SearchPosts";

const Body = () => {
  const navigate = useNavigate();

  const handleViewAllPosts = () => {
    navigate("/posts");
  };

  return (
    <Box sx={BodyStyles.ContainerBox}>
      <Box >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          쉽고 편하게 여행하는
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Welcome to TodoUK, your guide to exploring the UK. Enjoy easy and comfortable trips with
          our recommendations.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discover the best places to visit in the UK with us, covering music, landmarks,
          restaurants, and more.
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="h2">Blog Categories</Typography>
        <CategoryPosts />
      </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleViewAllPosts}
          // sx={BodyStyles.ViewAllButton}
        >
          View All Posts
        </Button>
    </Box>
  );
};

export default Body;
