export const TYPE_SKILL_HOVER_ON = "TYPE_SKILL_HOVER_ON";
export const TYPE_SKILL_HOVER_OFF = "TYPE_SKILL_HOVER_OFF";

export function HoverSkillAction(element:any, isHoverOn:boolean) {
    return {
        type: isHoverOn ? TYPE_SKILL_HOVER_ON : TYPE_SKILL_HOVER_OFF,
        skill: element
    }
}