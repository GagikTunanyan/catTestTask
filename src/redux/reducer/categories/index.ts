import categores_state from '../../state/categories';
import { categories_state_type } from '../../../types/types_categories';
import {
    START_GET_CATEGORIES,
    SUCCESS_GET_CATEGORIES,
    FAILED_GET_CATEGORIES,
    HANDLE_SELECTED_CATEGORY,
} from "../../action_types";

interface ActionType {
    type: string,
    payload: any,
}

const categoriesReducer = (state: categories_state_type = categores_state , action: ActionType) => {
    const stateCopy = { ...state };
    if (action.type === START_GET_CATEGORIES) {
        stateCopy.isRequested = true;
    }
    if (action.type === FAILED_GET_CATEGORIES) {
        stateCopy.isRequested = false;
        stateCopy.error = action.payload
    }

    if (action.type === SUCCESS_GET_CATEGORIES) {
        stateCopy.isRequested = false;
        stateCopy.error = null;
        stateCopy.data = action.payload;
    }

    if(action.type === HANDLE_SELECTED_CATEGORY) {
        if(stateCopy.selected === action.payload) {
            stateCopy.selected = null;
        }
        else {
            stateCopy.selected = action.payload;
        }
    }


    return stateCopy;
};

export default categoriesReducer