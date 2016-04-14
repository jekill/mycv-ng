import {createStore, Store, combineReducers} from "redux";
import {CHANGE_LANG} from "./actions/action-types";
import {LangEnum, InitialState} from "./state";

import {lang} from "./reducers/lang-reducer";
import {isSkillsBlockExpanded} from "./reducers/skills-block-reducer";

const rootReducer = combineReducers({lang, isSkillsBlockExpanded});

// export const AppStore:Store =
export const AppStore = createStore(rootReducer, InitialState);


// Action generators:

export function CreateChangeLangAction(newLang:LangEnum) {
    return {
        type: CHANGE_LANG,
        lang: newLang
    }
}

