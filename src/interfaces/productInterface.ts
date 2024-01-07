export interface product {
    id: number;
    title: string;
    price?: number | undefined;
    description: string;
    category: string;
    image: string;
    rating: object;
  }