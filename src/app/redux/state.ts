import {LangsList} from "../types/langs-list";

export interface AppState {
    lang:LangsList ;
    isSkillsBlockExpanded:boolean;
    blocks:{},
    skills:{},
    popoverSkillDescription:{
        skillName:string;
        position:number[]
    }
}


export const InitialState:AppState = {
    lang: LangsList.en,
    isSkillsBlockExpanded: false,
    blocks: {},
    skills:{},
    popoverSkillDescription: null
};