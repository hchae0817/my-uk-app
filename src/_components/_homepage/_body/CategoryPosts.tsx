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
            <Card 
              sx={{
                height: '100%',
                overflow: 'hidden',
                position: 'relative', 
                '&:hover .overlay': {
                  opacity: 1,
                },
                '&:hover img': { 
                  opacity: 0.6,
                }
              }}
            >
              <Link to={`/category/${category.name}`} style={{ textDecoration: "none" }}>
                <CardActionArea sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={category.imageUrl}
                    alt={category.displayName}
                    sx={{
                      transition: 'opacity 0.3s ease-in-out',
                      opacity: 1,
                    }}
                  />
                  <Box 
                    className="overlay" 
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold', 
                        px: 2, 
                        textTransform: 'uppercase' 
                      }}
                    >
                      {category.displayName}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
