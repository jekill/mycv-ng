import {createStore, Store, combineReducers} from "redux";
import {CHANGE_LANG} from "./actions/action-types";
import {InitialState, AppState} from "./state";

import {lang} from "./reducers/lang-reducer";
import {isSkillsBlockExpanded} from "./reducers/skills-block-reducer";
import {blocks} from "../componets/block/block.redux";
import {LangsList} from "../types/langs-list";
import {skills, popoverSkillDescription} from "../componets/skill/skill.reduxt";
import {hoveredElement} from "./reducers/hovered-element-reducer";

const rootReducer = combineReducers({
    lang,
    isSkillsBlockExpanded,
    blocks,
    skills,
    popoverSkillDescription,
    hoveredElement
});

export const AppStore: Store<any> = createStore(rootReducer, InitialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

window.__store = AppStore;


declare var window: {
    devToolsExtension?: any;
    __store: Store<any>;
};

