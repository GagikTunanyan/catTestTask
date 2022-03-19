import { category_item_type } from "./types_categories";

export interface cat_item_type {
    breeds: any[],
    categories?: category_item_type[],
    id: string,
    url: string,
    width: number,
    height: number,
}

export type cat_data_type = cat_item_type[];

export interface cat_state_type {
    data: cat_data_type;
    error: null | string;
    isRequested: boolean;
    page: number;
};