import React from "react";
import { Box, Typography } from "@mui/material";
import EssentialInfo from "./_template/EssentailInfo";
import GoogleMap from "./_template/Map";
import TagsSection from "./_template/TagsSection";
import ContentSection from "./_template/ContentSection";
import ReviewSection from "./_template/ReviewSection";
import { postDetailStyles } from "./PostDetails.styles";
import { Post } from "./IBody";

interface PostDetailTemplateProps {
  post: Post;
}

const PostDetailTemplate: React.FC<PostDetailTemplateProps> = ({ post }) => {
  return (
    <Box sx={postDetailStyles.container}>
      {/* Heading */}
      <Typography variant="h3" sx={postDetailStyles.title}>
        {post.title}
      </Typography>
      <Typography variant="h6" sx={postDetailStyles.subheading}>
        {post.subTitle}
      </Typography>
      {/* Tags */}
      <TagsSection tags={post.tags} />

      {/* Essential Information */}
      <EssentialInfo
        location={post.location}
        openingHours={post.openingHours}
        bookingRequired={post.bookingRequired}
      />

      {/* Google Map */}
      <GoogleMap latitude={post.latitude} longitude={post.longitude} />

      {/* Content */}
      <ContentSection content={post.content} contentType={post.contentType} />

      {/* Reviews */}
      <ReviewSection rating={post.rating} />
    </Box>
  );
};

export default PostDetailTemplate;
