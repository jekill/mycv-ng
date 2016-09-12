import {HOVER_ELEMENT_ACTION} from "../actions/action-types";
export function hoveredElement(state: string = '', action) {
    switch (action.type) {
        case HOVER_ELEMENT_ACTION:
            if (!action.payload.isHover) {
                return '';
            }
            return action.payload.id;
        default:
            return state;
    }


}