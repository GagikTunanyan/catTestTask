export interface category_item_type {
    id: number;
    name: string;
};

export type categories_types = category_item_type[];

export interface categories_state_type {
    data: categories_types,
    error: string | null,
    isRequested: boolean,
    selected: null | number,
}