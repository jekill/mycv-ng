import {Action} from "redux/index";

const BLOCK_UPDATE_BLOCK = "BLOCK_UPDATE_BLOCK";

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

    switch (action.type) {
        case BLOCK_UPDATE_BLOCK:
            let blockState =
                Object.assign(
                    {},
                    typeof(blocks[action.blockState.id]) === 'object' ? blocks[action.blockState.id] : {},
                    action.blockState
                );
            return Object.assign({}, blocks, {
                [blockState.id]: blockState
            });
        default:
            return blocks;
    }
}
export function CreateBlockUpdateAction(id:string, isExpanded:boolean):BlockAction {
    return {
        type: BLOCK_UPDATE_BLOCK,
        blockState: {id, isExpanded}
    };
}

