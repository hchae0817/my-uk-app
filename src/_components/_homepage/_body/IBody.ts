export interface Post {
    id: number;
    title: string;
    category: string;
    content: string;
    tags: string[];
  }
  
  
  export interface Category {
    name: string;
    displayName: string;
  }