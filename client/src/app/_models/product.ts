import { Image } from './image';

export class Product{
         id: Number;
         title: string;
         bodyHtml: string;
         vendor: string;
         productType: string;
         createdAt: Date;
         handle: string;
         publishedScope : string;
         tags: string;
         //imageSrc: string;
         image: Image;
}
      