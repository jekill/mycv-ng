import {ElementRef} from "@angular/core";

export interface SkillStoreData {
  skillName: string;
  about?: string;
  descriptionElementRef?: ElementRef;
  icon?: string;
  site?: string;
}
