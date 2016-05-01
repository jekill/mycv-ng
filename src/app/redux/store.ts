import {createStore, Store, combineReducers} from "redux";
import {CHANGE_LANG} from "./actions/action-types";
import {InitialState} from "./state";

import {lang} from "./reducers/lang-reducer";
import {isSkillsBlockExpanded} from "./reducers/skills-block-reducer";
import {blocks} from "../componets/block/block.redux";
import {LangsList} from "../types/langs-list";
import {skills, popoverSkillDescription} from "../componets/skill/skill.reduxt";


const rootReducer = combineReducers({lang, isSkillsBlockExpanded, blocks,skills,popoverSkillDescription});

declare var window:{
    devToolsExtension?:any;
}
// export const AppStore:Store =
export const AppStore = createStore(rootReducer, InitialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);


// Action generators:

export function CreateChangeLangAction(newLang:LangsList) {
    return {
        type: CHANGE_LANG,
        lang: newLang
    }
}

