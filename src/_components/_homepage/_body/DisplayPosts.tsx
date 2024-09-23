import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import { Post } from "./IBody";
import { useNavigate } from "react-router-dom";

interface IDisplayPostsProps {
  filteredPosts: Post[];
}
const DisplayPosts: React.FC<IDisplayPostsProps> = (props) => {
  const { filteredPosts } = props;
  const navigate = useNavigate();

  const handleCardClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };


  return (
    <Box sx={{ padding: 2 }}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Card
            key={post.id}
            sx={{ marginBottom: 2 }}
            onClick={() => handleCardClick(post.id)} 
          >
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography>{post.summary}</Typography>
              {post.tags.map((tag) => (
                <Chip key={tag} label={tag} sx={{ margin: 0.5 }} />
              ))}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No posts found in this category</Typography>
      )}
    </Box>
  );
};

export default DisplayPosts;
