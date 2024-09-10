import React, { useState, useEffect } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';
import { ContentType, Post } from './IBody';

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
      {htmlContent ? (
        <Box sx={{ marginTop: 2 }} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <Typography sx={{ marginTop: 2 }}>{post.content}</Typography>
      )}
      <Box sx={{ marginTop: 2 }}>
        {post.tags.map(tag => (
          <Chip key={tag} label={tag} sx={{ marginRight: 1 }} />
        ))}
      </Box>
    </Box>
  );
};

export default PostDetail;
