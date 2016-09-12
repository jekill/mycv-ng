import {HOVER_ELEMENT_ACTION} from "./action-types";

export function CreateAction_HoverElement(elementId, isHover) {
    return {
        type: HOVER_ELEMENT_ACTION,
        payload: {
            isHover: isHover,
            id: elementId
        }

    }
}