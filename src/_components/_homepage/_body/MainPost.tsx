import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Chip, Typography } from "@mui/material";
import { posts } from "../../data/posts";
import { categories } from "../../data/categories";


interface IHomePageProps {
  test?: any
}

export const MainPost: React.FC<IHomePageProps> = (props): JSX.Element | null => {
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
    <Box >
       <Box sx={{ padding: 2 }}>
        <Typography variant="h2">Blog Categories</Typography>
        <Box sx={{ display: "flex", overflowX: "auto", marginTop: 2 }}>
          {categories.map((category) => (
            <Card key={category.name} sx={{ marginRight: 2, minWidth: 200 }}>
              <CardContent>
                <Typography variant="h5">{category.displayName}</Typography>
                <Link to={`/category/${category.name}`} style={{ textDecoration: "none" }}>
                  <Button variant="contained" sx={{ mt: 1 }}>
                    View {category.displayName}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h3">Filter Posts by Tags</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 2 }}>
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

          <Box sx={{ marginTop: 2 }}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card key={post.id} sx={{ marginBottom: 2 }}>
                  <CardContent>
                    <Typography variant="h5">{post.title}</Typography>
                    <Typography>{post.content}</Typography>
                    {post.tags.map((tag) => (
                      <Chip
                      key={tag}
                      label={tag}
                      sx={{ margin: 0.5 }}
                    />
                    ))}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography>No posts found</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
