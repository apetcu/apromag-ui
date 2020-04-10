export interface ProductSave {
  name: string;
  category: string;
  id?: number;
  description: string;
  images: Array<File>;
  price: number;
  unit: string;
}
