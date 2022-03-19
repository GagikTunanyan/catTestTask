import window_state from '../../state/window';
import { window_state_type } from '../../../types/types_window_state';
import * as ActionTypes from '../../action_types'; 

const windowReducer = (state: window_state_type = window_state , action: any) => {
    const stateCopy = { ...state };
    if(action.type === ActionTypes.DETECTED_SCREEN_SIZE) {
        stateCopy.windowSize = action.payload;
    }
    return stateCopy;
};

export default windowReducer