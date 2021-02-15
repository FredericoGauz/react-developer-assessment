import { IAuthor } from "./author.interface";
import { ICategory } from "./category.interface";

export interface IPost {
  id: string;
  title: string;
  publishDate: string;
  author: IAuthor;
  summary: string;
  categories: ICategory[];
}
