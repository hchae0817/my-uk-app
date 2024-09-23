export interface Post {
    id: number;
    title: string;
    category: string;
    content: string;
    summary: string;
    tags: string[];
    contentType: ContentType;
    location: string,
    rating: number,
  }
  
  export enum ContentType {
    html,
    template
  }
  
  export interface Category {
    name: string;
    displayName: string;
    imageUrl: string;
  }