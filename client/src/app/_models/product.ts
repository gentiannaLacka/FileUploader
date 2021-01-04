import { Image } from './image';

export class Product{
         id:number;
         title: string;
         bodyHtml: string;
         vendor: string;
         productType: string;
         createdAt: Date;
         handle: string;
         publishedScope : string;
         tags: string;
         imageSrc: string;
         images: Image[];
}
