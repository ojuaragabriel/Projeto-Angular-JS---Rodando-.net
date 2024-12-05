import { BurgerInterface } from './burger-interface';

export interface CategoryInterface {
  id: number;
  name: string;
  pathImage: string;
  baseDescription: string;
  fullDescription: string;
  products: BurgerInterface[];
}