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
       
       <Box sx={{ fontWeight: "bold"}}>
        <Typography variant="h2" sx={{ fontWeight: "bold",  width: "50%"}}>
          Booking Service
        </Typography>
        <Box sx={{ width: "50%"}}>
        <Typography variant="body1" sx={{ mb: 2 }}>
         더 편하게, 더 다양하게, 더 재미있게
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discover the best places to visit in the UK with us, covering music, landmarks,
          restaurants, and more.
        </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
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
