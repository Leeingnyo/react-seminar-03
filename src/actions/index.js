import {
  ADD_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
  CHANGE_MODE_ACTION,
  SEARCH_ACTION,
} from './actionTypes';

export function addItemAction(item) {
  return {
    type: ADD_ITEM_ACTION,
    item,
  };
};

export function removeItemAction(item) {
  return {
    type: REMOVE_ITEM_ACTION,
    item,
  };
};

export function changeModeAction(mode) {
  return {
    type: CHANGE_MODE_ACTION,
    mode,
  };
};

export function searchAction(query) {
  return {
    type: SEARCH_ACTION,
    query,
  };
}
