import React, { useState, useEffect } from 'react';
import { Box, Chip, Rating, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';
import { ContentType, Post } from './IBody';
import { LocationOnOutlined } from '@mui/icons-material';

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const selectedPost = posts.find(p => p.id === Number(postId));
    if (selectedPost) {
      setPost(selectedPost);
      // If the post has an HTML file to load
      if (selectedPost.contentType === ContentType.html) {
        // Fetch the corresponding HTML file
        fetch(`${process.env.PUBLIC_URL}/html/post-${selectedPost.id}.html`)
          .then(response => response.text())
          .then(data => setHtmlContent(data));
      }
    }
  }, [postId]);

  if (!post) {
    return <Typography>Post not found</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3">{post.title}</Typography>

       {/* Tags Section */}
      <Box sx={{ marginTop: 2 }}>
        {post.tags.map(tag => (
          <Chip key={tag} label={tag} sx={{ marginRight: 1 }} />
        ))}
      </Box>

      {/* Location Section */}
      <Box sx={{ 
  marginTop: 3, 
  padding: 2, 
  backgroundColor: '#ffffff', 
  borderRadius: 2, 
  boxShadow: 1, 
  display: 'flex', 
  alignItems: 'center' // Align items in the center vertically
}}>
  <LocationOnOutlined sx={{ color: '#1976d2', fontSize: 40, marginRight: 2 }} /> {/* Location icon */}
  <Box>
    <Typography variant="h6">
      {post.location || 'Location not specified'}
    </Typography>
  </Box>
</Box>
  
  {/* Content Section */}
      {htmlContent ? (
        <Box sx={{ marginTop: 2 }} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <Typography sx={{ marginTop: 2 }}>{post.content}</Typography>
      )}

        {/* Rating Section */}
  <Box sx={{ marginTop: 3, padding: 2, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 1 }}>
    <Typography variant="h5">Rating</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
      <Rating name="read-only" value={post.rating || 0} readOnly precision={0.5} />
      <Typography variant="body1" sx={{ marginLeft: 1 }}>
        {post.rating ? `${post.rating } / 5` : 'No rating available'}
      </Typography>
    </Box>
  </Box>
    </Box>
  );
};

export default PostDetail;
