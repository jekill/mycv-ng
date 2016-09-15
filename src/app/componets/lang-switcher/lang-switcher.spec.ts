import {CreateChangeLangAction} from "./lang-switcher.redux";
import {LangsList} from "../../types/langs-list";

const assert = chai.assert;
describe('Test lang switcher redux action', function () {
    it('It returns valid result', function () {
        const actionRuLang = CreateChangeLangAction(LangsList.ru);
        assert.deepEqual(actionRuLang,{type:'CHANGE_LANG', lang:1});
        const actionEnLang = CreateChangeLangAction(LangsList.en);
        assert.deepEqual(actionEnLang,{type:'CHANGE_LANG', lang:0});
    })
})