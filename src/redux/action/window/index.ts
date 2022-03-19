import { Dispatch } from "react";
import { DETECTED_SCREEN_SIZE } from '../../action_types';

interface ActionType {
    type: string;
    payload: any;
}

export const actionDetectedWindowSize = (screenSize: any) => {
    return (dispatch: Dispatch<ActionType>) => {
        if(screenSize >= 800) {
            return dispatch({
                type: DETECTED_SCREEN_SIZE,
                payload: "desktop"
            });
        }
        else if(screenSize <= 800 && screenSize >= 600) {
            return dispatch({
                type: DETECTED_SCREEN_SIZE,
                payload: "tablet"
            });
        }
        return dispatch({
            type: DETECTED_SCREEN_SIZE,
            payload: "mobile"
        });
    }
};