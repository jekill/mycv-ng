import {LangsList} from "../types/langs-list";
import {SkillStoreData} from "../types/SkillStoreData";
import {BlockStoreData} from "../types/BlockStoreData";


export type BlocksState = { [blockId: string]: BlockStoreData };
export type SkillsState = { [skillName: string]: SkillStoreData };

export interface AppState {
  lang: LangsList,
  isSkillsBlockExpanded: boolean,
  blocks: BlocksState,
  skills: SkillsState,
  popoverSkillDescription: PopoverSkillDescription,
  hoveredElement: string
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
  hoveredElement: ''
};
