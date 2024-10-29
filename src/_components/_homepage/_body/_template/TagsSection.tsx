// src/components/TagsSection.tsx
import React from "react";
import { Box, Chip } from "@mui/material";
import { postDetailStyles } from "../PostDetails.styles";

interface TagsSectionProps {
  tags: string[];
}

const TagsSection: React.FC<TagsSectionProps> = ({ tags }) => (
  <Box sx={postDetailStyles.tagsSection}>
    {tags.map((tag) => (
      <Chip key={tag} label={tag} sx={postDetailStyles.tagChip} />
    ))}
  </Box>
);

export default TagsSection;
