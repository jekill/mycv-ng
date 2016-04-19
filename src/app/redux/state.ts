import {LangsList} from "../types/langs-list";

export interface AppState {
    lang:LangsList ;
    isSkillsBlockExpanded:boolean;
    blocks:{}
}


export const InitialState:AppState = {
    lang: LangsList.en,
    isSkillsBlockExpanded: false,
    blocks: {}
};