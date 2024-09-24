// src/pages/CategoryPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, CardMedia, Typography } from '@mui/material';
import { posts } from '../data/posts';
import DisplayPosts from '../_homepage/_body/DisplayPosts';
import { categories } from '../data/categories';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <Typography>Category not found</Typography>;
  }

  const filteredPosts = posts.filter(post => post.category === category);

  const categoryData = categories.find(cat => cat.name === category);
  const imageUrl = categoryData ? categoryData.imageUrl : '';
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Box sx={{ padding: 2 }}>

      <Typography variant="h2" gutterBottom>
        {capitalizedCategory} Posts
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginY: 4 }}>
        Discover a curated selection of posts related to {capitalizedCategory}. 
        Explore the latest and most popular content.
      </Typography>

      {imageUrl && (
        <CardMedia
          component="img"
          image={imageUrl}
          alt={category}
          sx={{
            width: '100%',
            height: '300px', 
            objectFit: 'cover',
            marginBottom: 2
          }}
        />
      )}

      <DisplayPosts filteredPosts={filteredPosts} />

    </Box>
  );
};

export default CategoryPage;
