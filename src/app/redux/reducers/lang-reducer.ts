import {CHANGE_LANG} from "../actions/action-types";
import {LangsList} from "../../types/langs-list";

export function lang(state:LangsList = LangsList.en, action) {
    switch (action.type) {
        case CHANGE_LANG:
            return action.lang;
        default:
            return state;
    }
}