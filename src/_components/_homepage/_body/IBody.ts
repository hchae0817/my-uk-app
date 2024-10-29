export interface Post {
    id: number;
    title: string;
    subTitle: string;
    category: string;
    content: string;
    summary: string;
    tags: string[];
    contentType: ContentType;
    location: string,
    rating: number,
    latitude: number,
    longitude: number
    openingHours: string,
    bookingRequired: boolean,
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