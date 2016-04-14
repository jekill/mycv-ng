export enum LangEnum{
    en,
    ru
}

export interface AppState {
    lang:LangEnum ;
    isSkillsBlockExpanded:boolean;
    hoveredSkill:string;
}


export const InitialState:AppState = {
    lang: LangEnum.en,
    isSkillsBlockExpanded: false,
    hoveredSkill: ''
};