import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BodyStyles } from "../BodyStyles";
import { CategoryPosts } from "./CategoryPosts";
import Globe from "./Globe";

const Body = () => {
  const navigate = useNavigate();

  const handleViewAllPosts = () => {
    navigate("/posts");
  };

  return (
    <Box sx={BodyStyles.ContainerBox}>
       <Globe/>
       <Box sx={{ fontWeight: "bold"}}>
        <Typography variant="h2" sx={{ fontWeight: "bold",  width: "50%"}}>
          Booking Service
        </Typography>
        <Box sx={{ width: "50%"}}>
        <Typography variant="body1" sx={{ mb: 2 }}>
         Life is too short to plan all my travel
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
