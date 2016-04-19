import {Block} from "./block";
import {Action} from "redux/index";

const BLOCK_ADD_NEW_BLOCK = "BLOCK_ADD_NEW_BLOCK";
const BLOCK_SET_EXPANDED = "BLOCK_SET_EXPANDED";

interface BlockState {
    id:string;
    isExpanded:boolean;
}

interface BlockAction extends Action {
    blockState:BlockState
}

/**
 * reducer
 * @param blocks
 * @param action
 */
export function blocks(blocks = {}, action:BlockAction) {
    let o = {};
    switch (action.type) {
        case BLOCK_ADD_NEW_BLOCK:
            o[action.blockState.id] = action.blockState;
            return Object.assign({}, blocks, o);
        case BLOCK_SET_EXPANDED:
            let blockState = Object.assign({}, blocks[action.blockState.id], {isExpanded: action.blockState.isExpanded});
            o[blockState.id] = blockState;
            return Object.assign({}, blocks, o);
        default:
            return blocks;
    }
}
export function CreateAddNewBlockToStoreAction(id:string, isExpanded:boolean):BlockAction {
    return {
        type: BLOCK_ADD_NEW_BLOCK,
        blockState: {id, isExpanded}
    };
}

export function CreateSetExpandedAction(id:string, isExpanded:boolean):BlockAction {
    return {
        type: BLOCK_SET_EXPANDED,
        blockState: {id, isExpanded}
    };
}
