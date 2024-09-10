import { Category } from "../_homepage/_body/IBody";

export const categories: Category[] = [
  {
    name: "musical",
    displayName: "Musical",
    imageUrl: `${process.env.PUBLIC_URL}/images/museum.jpeg`,
  },
  {
    name: "landmarks",
    displayName: "Landmarks",
    imageUrl: `${process.env.PUBLIC_URL}/images/bigben.jpeg`,
  },
  {
    name: "restaurant",
    displayName: "Restaurants",
    imageUrl: `${process.env.PUBLIC_URL}/images/restaurant.jpeg`,
  },
  {
    name: "alcohol",
    displayName: "Alcohol",
    imageUrl: `${process.env.PUBLIC_URL}/images/pub.jpeg`,
  },
  {
    name: "view",
    displayName: "Scenic Viewpoints",
    imageUrl: `${process.env.PUBLIC_URL}/images/londonBridge.jpeg`,
  },
  {
    name: "shopping",
    displayName: "Shopping",
    imageUrl: `${process.env.PUBLIC_URL}/images/streetView.jpeg`,
  },
];
