import axios from "axios";
import { Dispatch } from "react";
import { categories_types } from "../../../types/types_categories";
import {
    START_GET_CATEGORIES,
    SUCCESS_GET_CATEGORIES,
    FAILED_GET_CATEGORIES,
    HANDLE_SELECTED_CATEGORY,
} from "../../action_types";

interface ActionType {
    type: string;
    payload?: boolean | string | categories_types
}

const startGetCategories = () => {
    return {
        type: START_GET_CATEGORIES,
    }
};

const failedGetCategories = () => {
    return {
        type: FAILED_GET_CATEGORIES,
        payload: "Failed get categories"
    }
}

const succesGetCategories = (data: categories_types) => {
    return {
        type: SUCCESS_GET_CATEGORIES,
        payload: data,
    }
}

export const getCategories = () => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(startGetCategories());
        axios.get("https://api.thecatapi.com/v1/categories")
            .then((e) => dispatch(succesGetCategories(e.data)))
            .catch((e) => dispatch(failedGetCategories()))
    }
};

export const selectedCategory = (id: number) => {
    return {
        type: HANDLE_SELECTED_CATEGORY,
        payload: id,
    }
}