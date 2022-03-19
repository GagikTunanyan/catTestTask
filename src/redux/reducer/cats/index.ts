import catsState from '../../state/cats';
import { cat_state_type } from '../../../types/types_cats';
import {
    START_GET_CATS,
    SUCCESS_GET_CATS,
    FAILED_GET_CATS,
    HANDLE_LOAD_MORE,
} from "../../action_types";

const catsReducer = (state: cat_state_type = catsState, action: any) => {
    const stateCopy = { ...state };

    if(action.type === START_GET_CATS) {
        stateCopy.isRequested = true;
    };

    if(action.type === FAILED_GET_CATS) {
        stateCopy.isRequested = false;
        stateCopy.error = action.payload;
    }

    if(action.type === SUCCESS_GET_CATS) {
        stateCopy.isRequested = false;
        stateCopy.error = null;
        stateCopy.data = action.payload;
    }

    if(action.type === HANDLE_LOAD_MORE) {
        stateCopy.page = action.payload;
    }

    return stateCopy;
};

export default catsReducer