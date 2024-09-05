// src/pages/CategoryPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography} from '@mui/material';
import { posts } from '../data/posts';
import BackButton from '../BackButton';
import DisplayPosts from '../_homepage/_body/DisplayPosts';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <Typography>Category not found</Typography>;
  }

  const filteredPosts = posts.filter(post => post.category === category);

  return (
    <Box sx={{ padding: 2 }}>
      <BackButton />
      <Typography variant="h2">{category} Posts</Typography>
      <DisplayPosts filteredPosts={filteredPosts} />

    </Box>
  );
};

export default CategoryPage;
