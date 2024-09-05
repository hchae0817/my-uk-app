import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { categories } from "../../data/categories";
import { categoryPostsStyles } from "./CategoryPostStyle";

export const CategoryPosts: React.FC = (): JSX.Element | null => {
  return (
    <Box sx={categoryPostsStyles.container}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={category.name}>
            <Card sx={{ height: '100%' }}>
              <Link to={`/category/${category.name}`} style={{ textDecoration: "none" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={category.imageUrl}
                    alt={category.displayName}
                  />
                  <CardContent sx={{ padding: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="subtitle1" align="center" noWrap>
                      {category.displayName}
                    </Typography>
                   </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
