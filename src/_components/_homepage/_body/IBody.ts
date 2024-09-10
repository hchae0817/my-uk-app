export interface Post {
    id: number;
    title: string;
    category: string;
    content: string;
    tags: string[];
    contentType: ContentType;
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