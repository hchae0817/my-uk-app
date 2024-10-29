// src/components/PostDetail.styles.ts
import { Theme } from "@mui/material/styles";

export const postDetailStyles = {
  container: {
    padding: 2,
  },
  title: (theme: Theme) => ({
    color: theme.palette.text.primary,
  }),
  subheading: {
    marginBottom: 1,
  },
  essentialInfoBox: (theme: Theme) => ({
    marginTop: 3,
    padding: 2,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  }),
  tagsSection: {
    marginTop: 2,
  },
  tagChip: {
    marginRight: 1,
  },
  contentSection: {
    marginTop: 3,
  },
  ratingBox: (theme: Theme) => ({
    marginTop: 3,
    padding: 2,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  }),
  ratingText: {
    marginLeft: 1,
  },
};
