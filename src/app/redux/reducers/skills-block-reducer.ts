import {TOGGLE_EXPAND_SKILLS_BLOCK} from "../actions/action-types";

export function isSkillsBlockExpanded(state:boolean = false, action) {
    switch (action.type) {
        case TOGGLE_EXPAND_SKILLS_BLOCK:
            return !state;
        default:
            return state;
    }
}