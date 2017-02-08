import {
  ADD_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
} from '../actions/actionTypes';

const USER_INITIAL_STATE = {
  registeredItems: [],
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_ACTION: {
      const {item} = action;
      const newRegi = state.registeredItems.concat([item]);
      return Object.assign({}, state, {
        registeredItems: newRegi,
      });
    }
    case REMOVE_ITEM_ACTION: {
      const {item} = action;
      const newRegi = state.registeredItems.filter(registeredItem => {
        return item.name !== registeredItem.name;
      });
      return Object.assign({}, state, {
        registeredItems: newRegi,
      });
    }
    default: return state;
  }
};

export default user;
