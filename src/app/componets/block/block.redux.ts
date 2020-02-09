import {Action} from "redux/index";
import {BlockStoreData} from "../../types/BlockStoreData";
import {BlocksState} from "../../redux/state";

const BLOCK_UPDATE_BLOCK = "BLOCK_UPDATE_BLOCK";

interface BlockAction extends Action {
  blockState: BlockStoreData
}

/**
 * reducer
 * @param blocks
 * @param action
 */
export function blocks(blocks: BlocksState = {}, action: BlockAction): {} {

  switch (action.type) {
    case BLOCK_UPDATE_BLOCK:
      let blockState =
        Object.assign(
          {},
          typeof (blocks[action.blockState.id]) === 'object' ? blocks[action.blockState.id] : {},
          action.blockState
        );
      return Object.assign({}, blocks, {
        [blockState.id]: blockState
      });
    default:
      return blocks;
  }
}

export function CreateBlockUpdateAction(id: string, isExpanded: boolean): BlockAction {
  return {
    type: BLOCK_UPDATE_BLOCK,
    blockState: {id, isExpanded}
  };
}

