// src/components/ContentSection.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { ContentType} from "../IBody";
import { postDetailStyles } from "../PostDetails.styles";


interface ContentSectionProps {
  content: string;
  contentType: ContentType;
}

const ContentSection: React.FC<ContentSectionProps> = ({ content, contentType }) => (
  <Box sx={postDetailStyles.contentSection}>
    {contentType === ContentType.html ? (
      <Box dangerouslySetInnerHTML={{ __html: content }} />
    ) : (
      <Typography>{content}</Typography>
    )}
  </Box>
);

export default ContentSection;
