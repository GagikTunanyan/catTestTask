import { Dispatch } from 'react';
import axios from 'axios';
import {
    START_GET_CATS,
    SUCCESS_GET_CATS,
    FAILED_GET_CATS,
    HANDLE_LOAD_MORE,
} from '../../action_types';
import { cat_data_type } from '../../../types/types_cats';

interface ActionType {
    type: string;
    payload?: boolean | string | cat_data_type
}

const startGetCats = () => {
    return {
        type: START_GET_CATS
    };
};

const failedGetCats = () => {
    return {
        type: FAILED_GET_CATS,
        payload: "Failed get cats"
    };
};

const successGetCats = (data: cat_data_type) => {
    return {
        type: SUCCESS_GET_CATS,
        payload: data
    };
};

export const getCats = (page:number, category: number | null) => {
    const url = category !== null 
        ? `https://api.thecatapi.com/v1/images/search?limit=${10 * page}&&category_ids=${category}`
        : `https://api.thecatapi.com/v1/images/search?limit=${10 * page}`
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(startGetCats());
        axios.get(url)
            .then((e: { data: cat_data_type }) => dispatch(successGetCats(e.data)))
            .catch(() => dispatch(failedGetCats()));
    }
};

export const handleLoadMore = (page: number) => {
    return {
        type: HANDLE_LOAD_MORE,
        payload: page,
    }
}