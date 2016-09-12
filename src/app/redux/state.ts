import {LangsList} from "../types/langs-list";

export interface AppState {
    lang: LangsList,
    isSkillsBlockExpanded: boolean,
    blocks: {},
    skills: {},
    popoverSkillDescription: PopoverSkillDescription,
    hoveredElement:string
}

export interface PopoverSkillDescription {
    skillName: string;
    position: number[]
}


export const InitialState: AppState = {
    lang: LangsList.en,
    isSkillsBlockExpanded: false,
    blocks: {},
    skills: {},
    popoverSkillDescription: null,
    hoveredElement:''
};