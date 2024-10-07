import React, { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { posts } from "../../data/posts";
import DisplayPosts from "./DisplayPosts";


export const SearchPosts: React.FC = (props): JSX.Element | null => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) => {
      const newTags = prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag];
      filterPostsByTags(newTags);
      return newTags;
    });
  };

  const filterPostsByTags = (tags: string[]) => {
    if (tags.length === 0) {
      setFilteredPosts(posts);
    } else {
      const result = posts.filter((post) => post.tags.some((tag) => tags.includes(tag)));
      setFilteredPosts(result);
    }
  };

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <Box>
      <Box>
        <Box sx={{ marginTop: 4, marginBottom: 1 }}>
          <Typography variant="h3">Filter Posts by Tags</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap"}}>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                clickable
                color={selectedTags.includes(tag) ? "primary" : "default"}
                onClick={() => handleTagClick(tag)}
                sx={{ margin: 0.5 }}
              />
            ))}
          </Box>

          <DisplayPosts filteredPosts={filteredPosts} />
        </Box>
      </Box>
    </Box>
  );
};
