// src/pages/CategoryPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { posts } from '../data/posts';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <Typography>Category not found</Typography>;
  }

  const filteredPosts = posts.filter(post => post.category === category);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h2">{category} Posts</Typography>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <Card key={post.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography>{post.content}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No posts found in this category</Typography>
      )}
    </Box>
  );
};

export default CategoryPage;
