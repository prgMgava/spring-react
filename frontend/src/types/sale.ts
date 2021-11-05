import { Seller } from "./seller";

export interface SaleSum {
  sellerName: string;
  sum: number;
}

export interface SaleSuccess {
  sellerName: string;
  visited: number;
  deals: number;
}

export interface Sale {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export interface SalePage {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean    ;
  number: number;
  numberOfElements?: number;
  size?: number;
  empty?: boolean;
}
