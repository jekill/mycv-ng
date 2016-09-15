import {CHANGE_LANG} from "../../redux/actions/action-types";
import {LangsList} from "../../types/langs-list";

export function CreateChangeLangAction(newLang: LangsList) {
    return {
        type: CHANGE_LANG,
        lang: newLang
    }
}