import { ContentType, Post } from "../_homepage/_body/IBody";

export const posts: Post[] = [
  {
    id: 1,
    title: "Lion King",
    category: "musical",
    content: "Details about a musical event.",
    tags: ["music", "performance"],
    contentType: ContentType.template,
  },
  {
    id: 2,
    title: "London eye",
    category: "landmarks",
    content: "Details about a famous landmark.",
    tags: ["history", "architecture"],
    contentType: ContentType.template,
  },
  {
    id: 3,
    title: "Da Mario",
    category: "restaurant",
    content: "Details about the best restaurant.",
    tags: ["food", "dining"],
    contentType: ContentType.html,
  },
  {
    id: 4,
    title: "Local Alcoholic Beverage",
    category: "alcohol",
    content: "Details about a local alcoholic beverage.",
    tags: ["beverage", "local"],
    contentType: ContentType.template,
  },
  {
    id: 5,
    title: "Sky Garden",
    category: "view",
    content: "Details about a scenic viewpoint.",
    tags: ["scenery", "nature"],
    contentType: ContentType.template,
  },
];
