import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { categories } from "../../data/categories";
import { categoryPostsStyles } from "./CategoryPostStyle";

export const CategoryPosts: React.FC = (props): JSX.Element | null => {
  return (
    <Box sx={categoryPostsStyles.container}>
      {categories.map((category) => (
        <Card key={category.name} sx={{ marginRight: 2, minWidth: 200 }}>
          <Link to={`/category/${category.name}`} style={{ textDecoration: "none" }}>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography variant="h5">{category.displayName}</Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </Box>
  );
};
