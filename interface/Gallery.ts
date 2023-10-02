import { StaticImageData } from "next/image";

export default interface Artworks {
  id: number;
  coverImage: StaticImageData;
  title: string;
  description: string;
  category: string;
  year: string;
  images: StaticImageData[];
}
