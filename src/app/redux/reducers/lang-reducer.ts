import {CHANGE_LANG} from "../actions/action-types";
import {LangEnum} from "../state";

export function lang(state:LangEnum = LangEnum.en, action) {
    switch (action.type) {
        case CHANGE_LANG:
            return action.lang;
        default:
            return state;
    }
}