import {Action} from "redux/index";
import {SkillDescription} from "./skill";
import {ElementRef} from "angular2/core";
export const TYPE_SKILL_HOVER_ON = "TYPE_SKILL_HOVER_ON";
export const TYPE_SKILL_HOVER_OFF = "TYPE_SKILL_HOVER_OFF";
export const TYPE_SKILL_REGISTER_DESCRIPTION = "TYPE_SKILL_REGISTER_DESCRIPTION";

interface SkillsAction extends Action {
    data:{
        skillName:string,
        descriptionElementRef?:ElementRef
    }
    position?:number[]
}

export function CreateHoverSkillAction(skillName:string, pos:number[], isHoverOn:boolean):SkillsAction {
    return {
        type: isHoverOn ? TYPE_SKILL_HOVER_ON : TYPE_SKILL_HOVER_OFF,
        data: {
            skillName: skillName
        },
        position: pos
    }
}

/**
 * skills reducer
 * @param skillsSetSate
 * @param action
 */
export function skills(skillsSetSate = {}, action:SkillsAction) {
    switch (action.type) {
        case TYPE_SKILL_REGISTER_DESCRIPTION:
            let o = {};
            o[action.data.skillName] = action.data;
            return Object.assign({}, skillsSetSate, o);
        default:
            return skillsSetSate;
    }
}

export function popoverSkillDescription(state = null, action:SkillsAction) {
    switch (action.type) {
        case TYPE_SKILL_HOVER_ON:
            return {
                skillName: action.data.skillName,
                position: action.position
            };
        case TYPE_SKILL_HOVER_OFF:
            return null;
        default:
            return state;
    }

}